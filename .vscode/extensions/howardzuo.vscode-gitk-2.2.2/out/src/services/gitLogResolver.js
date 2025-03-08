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
Object.defineProperty(exports, "__esModule", { value: true });
exports.colorfullDetail = exports.detail = exports.log = void 0;
const child_process = __importStar(require("child_process"));
function log(cwd, filePath = '') {
    return getLog(cwd, filePath);
}
exports.log = log;
function getLog(cwd, filePath) {
    return new Promise((resolve, reject) => {
        child_process.exec(`git log --format="%h-=-%s-=-%an<%ae>-=-%ad" --date=iso ${filePath}`, {
            cwd: cwd,
            maxBuffer: 5000 * 1024
        }, (error, stdout, stderr) => {
            if (error) {
                const msgs = error.message.split('\n');
                const msg = msgs.length === 1 ? msgs[0] : msgs.filter(m => m).find(m => !m.startsWith('Command failed'));
                return reject(msg);
            }
            if (stderr) {
                return reject(stderr);
            }
            const commits = stdout
                .replace(/\r\n/mg, '\n')
                .split('\n')
                .filter(line => line)
                .map(line => {
                const data = line.split('-=-');
                return {
                    hash: data[0],
                    message: data[1],
                    author: data[2],
                    date: data[3]
                };
            });
            resolve(commits);
        });
    });
}
function detail(cwd, commit, filePath = '') {
    return getDetail(cwd, commit, filePath);
}
exports.detail = detail;
function getDetail(cwd, commit, filePath = '') {
    return new Promise((resolve, reject) => {
        child_process.exec(`git show --pretty="%b" ${commit} ${filePath}`, {
            cwd: cwd,
            maxBuffer: 5000 * 1024
        }, (error, stdout, stderr) => {
            if (error) {
                return reject(error);
            }
            if (stderr) {
                return reject(stderr);
            }
            resolve({
                hash: commit,
                content: colorfullDetail(stdout)
            });
        });
    });
}
function colorfullDetail(detail) {
    return detail
        .replace(/\r\n/mg, '\n')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/ /mg, '&nbsp;')
        .replace(/(@@.+@@)/, m => `<span style="color: #00c6c7;">${m}</span>`)
        .replace(/^(-[^\n]*)/mg, m => `<span style="color: #ff2441;">${m.replace(/\n$/, '')}</span>`)
        .replace(/^(\+[^\n]*)/mg, m => `<span style="color: #00c02b;">${m.replace(/\n$/, '')}</span>`)
        .replace(/\n/mg, '<br/>');
}
exports.colorfullDetail = colorfullDetail;
//# sourceMappingURL=gitLogResolver.js.map