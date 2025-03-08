"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gitkRepoHTML = void 0;
const vscode = __importStar(require("vscode"));
const path = __importStar(require("path"));
const lodash_template_1 = __importDefault(require("lodash.template"));
const SIZE_PER_PAGE = 30;
function compile(webview) {
    return lodash_template_1.default(`
  <html>
      <link rel="stylesheet" href="${assetPath(webview, 'css', 'gitk.css')}" >
      <body style="font-family: <%= obj.fontFamily %>;">
          <div class="container">
              <div id="divCommits" class="commits" tabindex="0">
                  <% for (let c of obj.commits) { %>
                      <a class="commit" data-hash="<%= c.hash %>">
                          <div class="hash" <%if(obj.colors.hash){%>style="color:<%=obj.colors.hash%>;" <%}%> ><%= c.hash %></div>
                          <div class="message" <%if(obj.colors.message){%>style="color:<%=obj.colors.message%>;" <%}%> ><%= c.message %></div>
                          <div class="author" <%if(obj.colors.author){%>style="color:<%=obj.colors.author%>;" <%}%> ><%= c.author %></div>
                          <div class="date" <%if(obj.colors.date){%>style="color:<%=obj.colors.date%>;" <%}%> ><%= c.date %></div>
                      </a>
                  <% } %>
              </div>
              <div class="pagination">
                  <div class="group">
                      <a class="prev <%= obj.pageNum === 1 ? 'disabled' : '' %>" >Prev</a>
                      &nbsp;
                      <a class="next <%= obj.pageNum === obj.totalPageCount ? 'disabled' : '' %>" >Next</a>
                  </div>
              </div>
              <div id="resizer"></div>
              <div class="detail" <%if(obj.colors.defaultDetail){%>style="color:<%=obj.colors.defaultDetail%>;" <%}%> />
          </div>
          <script src="${assetPath(webview, 'js', 'util.js')}"></script>
          <script src="${assetPath(webview, 'js', 'takefocus.js')}"></script>
          <script src="${assetPath(webview, 'js', 'messageReceiver.js')}"></script>
          <script src="${assetPath(webview, 'js', 'selectHandler.js')}"></script>
          <script src="${assetPath(webview, 'js', 'defaultSelection.js')}"></script>
          <script src="${assetPath(webview, 'js', 'copyHash.js')}"></script>
          <script src="${assetPath(webview, 'js', 'keyboard.js')}"></script>
          <script >
            const data = {
              pageNum: <%= obj.pageNum %>,
              totalPageCount: <%= obj.totalPageCount %>
            }
  
            document.querySelector('a.prev').addEventListener('click', e => {
                e.preventDefault()
                e.stopPropagation()
  
                window.vscode.postMessage({
                  command: 'go-prev',
                  payload: {
                    pageNum: data.pageNum - 1
                  }
                })
            }, false)
  
            document.querySelector('a.next').addEventListener('click', e => {
              e.preventDefault()
              e.stopPropagation()
  
              window.vscode.postMessage({
                command: 'go-next',
                payload: {
                  pageNum: data.pageNum + 1
                }
              })
          }, false)
  
          </script>
      </body>
  </html>
      `, { variable: 'obj' });
}
function gitkRepoHTML(pageNum = 1, commits, config, webview) {
    const workconfig = vscode.workspace.getConfiguration('gitk');
    const colors = Object.assign({}, workconfig.colors);
    const totalPageCount = Math.ceil(commits.length / SIZE_PER_PAGE);
    const start = (pageNum - 1) * SIZE_PER_PAGE;
    const end = start + SIZE_PER_PAGE;
    return compile(webview)({
        commits: commits.slice(start, end),
        fontFamily: config.fontFamily,
        pageNum,
        totalPageCount,
        colors,
    });
}
exports.gitkRepoHTML = gitkRepoHTML;
function assetPath(webview, ...args) {
    return webview.asWebviewUri(vscode.Uri.file(path.join(__dirname, '..', '..', '..', 'assets', ...args)));
}
//# sourceMappingURL=gitkrepo.js.map