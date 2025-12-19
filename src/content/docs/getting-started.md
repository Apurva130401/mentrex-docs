# Getting Started with Mentrex

Welcome to **Mentrex**, your advanced autonomous AI pair programmer. This guide will help you set up your environment to start building faster, smarter, and with greater focus.

## 1. Installation

### VS Code Extension
Mentrex mainly lives where you code—inside Visual Studio Code.

1.  Open **VS Code**.
2.  Go to the **Extensions** view (`Ctrl+Shift+X`).
3.  Search for **Mentrex**.
4.  Click **Install**.

### CLI Tool (Optional but Recommended)
For power users who want to control Mentrex from the terminal or automate tasks, install our CLI:

```bash
npm install -g mentrex
```

## 2. Authentication

To use Mentrex, you need an account and an API Key.

1.  **Create an Account**: Visit [Mentrex Dashboard](https://app.mentrex.shop) and sign up.
2.  **Get API Key**: Navigate to the **API Keys** section and generate a new key (e.g., `sk_live_...`).
3.  **Activate**:
    *   **In VS Code**: Open the Mentrex sidebar, paste your key when prompted.
    *   **In CLI**: Run `mentrex login` and paste your key.

## 3. Your First Task

Once installed, open a project folder in VS Code.

1.  Click the **Mentrex Icon** in your sidebar.
2.  Type a request in the chat, for example:
    > "Create a simple HTML contact form with nice CSS styling."
3.  Watch as Mentrex analyzes your request, plans the files, and writes the code right before your eyes!
