const vscode = require("vscode");

let channel = vscode.window.createOutputChannel("demo");

/**
 * @param {string} msg
 */
function log(msg) {
  channel.appendLine(msg);
}

module.exports = log;
