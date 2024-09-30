import * as vscode from "vscode";

let typingTimer: NodeJS.Timeout | undefined;
const typingDelay = 3000; // 3 seconds delay

export function activate(context: vscode.ExtensionContext) {
  // Listen for changes in text documents
  const textDocumentChangeListener = vscode.workspace.onDidChangeTextDocument(
    (event) => {
      // Clear the existing timer whenever a change occurs
      if (typingTimer) {
        clearTimeout(typingTimer);
      }

      // Set a new timer that saves the document after a delay
      typingTimer = setTimeout(() => {
        const activeEditor = vscode.window.activeTextEditor;

        // Ensure the document is saved if it's not untitled
        if (activeEditor && !activeEditor.document.isUntitled) {
          activeEditor.document.save().then(
            () => console.log("Document saved after typing stopped"),
            (error) => console.error("Failed to save document:", error)
          );
        }
      }, typingDelay);
    }
  );

  // Register the listener in the context to keep it active
  context.subscriptions.push(textDocumentChangeListener);
}

// This will clean up any active listeners when the extension is deactivated
export function deactivate() {
  if (typingTimer) {
    clearTimeout(typingTimer);
  }
}
