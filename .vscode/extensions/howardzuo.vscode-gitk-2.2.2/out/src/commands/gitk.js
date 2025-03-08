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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registryGitk = void 0;
const vscode = __importStar(require("vscode"));
const gitkViewProvider_1 = require("../gitkViewProvider");
function registryGitk(context) {
    let provider = new gitkViewProvider_1.GitkContentProvider();
    let panel;
    let config = vscode.workspace.getConfiguration('gitk');
    vscode.workspace.onDidChangeConfiguration(() => __awaiter(this, void 0, void 0, function* () {
        config = vscode.workspace.getConfiguration('gitk');
        provider.setConfig(config);
        const html = yield provider.getInitHtml(panel.webview);
        panel.webview.html = html;
    }), this, context.subscriptions);
    const gitk = vscode.commands.registerCommand('extension.gitk', (fileUri) => __awaiter(this, void 0, void 0, function* () {
        if ((!fileUri || !fileUri.fsPath) &&
            (!vscode.window.activeTextEditor || !vscode.window.activeTextEditor.document)) {
            vscode.window.showWarningMessage('You have to select a document for gitk');
            return;
        }
        const fileName = (fileUri && fileUri.fsPath) ||
            (vscode.window.activeTextEditor && vscode.window.activeTextEditor.document.fileName);
        if (!panel) {
            panel = vscode.window.createWebviewPanel('gitk', 'Gitk', vscode.ViewColumn.One, {
                enableScripts: true,
            });
            // Reset when the current panel is closed
            panel.onDidDispose(() => {
                panel = undefined;
            }, null, context.subscriptions);
            // Handle messages from the webview
            panel.webview.onDidReceiveMessage((message) => __awaiter(this, void 0, void 0, function* () {
                if (message.command === 'read-detail') {
                    const detail = yield provider.getDetail(message.payload.hash);
                    panel.webview.postMessage({ command: 'see-detail', payload: detail });
                }
                if (message.command === 'hash-copied') {
                    vscode.window.setStatusBarMessage(`hash [${message.payload.hash}] was copied`, 3000);
                }
            }), undefined, context.subscriptions);
        }
        else if (!panel.visible) {
            panel.reveal();
        }
        try {
            provider.setConfig(config);
            provider.setTargetDocumentFilePath(fileName);
            const html = yield provider.getInitHtml(panel.webview);
            panel.webview.html = html;
        }
        catch (error) {
            vscode.window.showErrorMessage(error);
        }
    }));
    return gitk;
}
exports.registryGitk = registryGitk;
//# sourceMappingURL=gitk.js.map