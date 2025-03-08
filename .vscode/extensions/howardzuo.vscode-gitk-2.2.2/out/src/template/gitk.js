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
exports.gitkHTML = void 0;
const vscode = __importStar(require("vscode"));
const path = __importStar(require("path"));
const lodash_template_1 = __importDefault(require("lodash.template"));
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
        </body>
    </html>
  `, { variable: 'obj' });
}
function gitkHTML(commits, config, webview) {
    const workconfig = vscode.workspace.getConfiguration('gitk');
    const colors = Object.assign({}, workconfig.colors);
    return compile(webview)({
        commits,
        colors,
        fontFamily: config.fontFamily,
    });
}
exports.gitkHTML = gitkHTML;
function assetPath(webview, ...args) {
    return webview.asWebviewUri(vscode.Uri.file(path.join(__dirname, '..', '..', '..', 'assets', ...args)));
}
//# sourceMappingURL=gitk.js.map