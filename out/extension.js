"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = __importStar(require("vscode"));
let typingTimer;
const typingDelay = 3000; // 3 seconds delay
function activate(context) {
    // Listen for changes in text documents
    const textDocumentChangeListener = vscode.workspace.onDidChangeTextDocument((event) => {
        // Clear the existing timer whenever a change occurs
        if (typingTimer) {
            clearTimeout(typingTimer);
        }
        // Set a new timer that saves the document after a delay
        typingTimer = setTimeout(() => {
            const activeEditor = vscode.window.activeTextEditor;
            // Ensure the document is saved if it's not untitled
            if (activeEditor && !activeEditor.document.isUntitled) {
                activeEditor.document.save().then(() => console.log("Document saved after typing stopped"), (error) => console.error("Failed to save document:", error));
            }
        }, typingDelay);
    });
    // Register the listener in the context to keep it active
    context.subscriptions.push(textDocumentChangeListener);
}
// This will clean up any active listeners when the extension is deactivated
function deactivate() {
    if (typingTimer) {
        clearTimeout(typingTimer);
    }
}
//# sourceMappingURL=extension.js.map