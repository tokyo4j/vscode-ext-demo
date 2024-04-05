const vscode = require("vscode");
const log = require("./log.js");

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  let disposable = vscode.commands.registerCommand(
    "vscode-ext-demo.helloWorld",
    () => {
      vscode.window.showInformationMessage("Hello World from vscode-ext-demo!");
    }
  );

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
