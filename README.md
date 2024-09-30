# Spam Saving

**Spam Saving** is a VS Code extension that automatically saves your files after a short period of inactivity while coding. This helps prevent data loss and keeps your files up to date without needing to manually save them.

This extension is created by **Turki Alshehri** [@ferotaiten](https://github.com/ferotaiten).

## Features

- **Auto-Save on Inactivity**: Automatically saves your files after you stop typing for a predefined delay (e.g., 3 seconds).
- **Works Across File Types**: Supports saving across different file types supported by VS Code.
- **Non-Interruptive**: The auto-save feature works in the background, ensuring you never lose your work.

### Screenshot

\!\[Auto-Save in Action\](images/auto-save.png)

## How It Works

- Once installed and activated, the extension listens for changes to your text documents.
- After you stop typing for 3 seconds (default), it triggers an auto-save operation, keeping your files up to date without the need to press `Ctrl + S`.

## Requirements

There are no external dependencies for this extension. It works with the default installation of Visual Studio Code.

## Extension Settings

At the moment, the extension does not introduce new configuration settings. However, in future versions, we plan to add customization options such as:

- **Auto-Save Delay**: Configure the amount of delay (in seconds) before the file is auto-saved after typing stops.
- **File Types to Exclude**: Exclude certain file types from the auto-save feature if needed.

## Known Issues

Currently, there are no major known issues. Please report any bugs you encounter on the [GitHub Issues page](#).

## Release Notes

### 1.0.0

- Initial release of Spam Saving.
- Basic auto-save functionality after 3 seconds of inactivity.

---

## Following extension guidelines

This extension follows the best practices and guidelines for creating VS Code extensions.

- [VS Code Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)

---

## Working with Markdown

This README file is written in Markdown. You can edit this document using Visual Studio Code. Some helpful shortcuts include:

- **Split the editor**: `Cmd+\` (macOS) or `Ctrl+\` (Windows/Linux).
- **Toggle preview**: `Shift+Cmd+V` (macOS) or `Shift+Ctrl+V` (Windows/Linux).
- **Markdown snippets**: Press `Ctrl+Space` to view Markdown snippets.

---

## For more information

For more information about this extension or to contribute, please visit:

- [GitHub Repository](#)
- [Visual Studio Code's Markdown Support](https://code.visualstudio.com/docs/languages/markdown)
- [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy using Spam Saving and never lose unsaved work again!**

---

**This extension is created by Turki Alshehri [@ferotaiten](https://github.com/ferotaiten).**
