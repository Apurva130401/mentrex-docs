# Using Your AI Co-Pilot

Mentrex is more than just a chatbot—it is an **Agent**. This means it can perform actions on your computer (with your permission) to accomplish complex tasks.

## The Agentic Workflow

When you ask Mentrex to do something, it follows a rigorous engineering process:

1.  **Plan**: It analyzes your request and your workspace files to create a step-by-step implementation plan.
2.  **Execute**: It writes code, creates files, and runs terminal commands (like `npm install`).
3.  **Verify**: It can run tests or check the output to ensure the task was completed correctly.

## Key Features

### 💬 Context-Aware Chat
Mentrex reads your open files and project structure. You don't need to copy-paste code.
*   *Tip*: Mention files with `@Filename` to explicitly focus the AI's attention.

### 🛠️ Tool Use
Mentrex has access to powerful tools:
*   **File Editor**: Can create, read, and modify files.
*   **Terminal**: Can run build scripts, tests, and git commands.
*   **Browser**: Can search the web for the latest documentation if it gets stuck.

### 🚀 Auto-Approval (Power Mode)
By default, Mentrex asks for permission before every file edit or command.
*   **Safe Mode**: You approve every action. Good for learning.
*   **Autonomous Mode**: You can toggle "Always Approve" for specific actions (like reading files) to let Mentrex work faster without interrupting you.

## Best Practices

*   **Be Specific**: "Fix the bug" is vague. "Fix the NullPointer error in AuthController.ts when logging in" is perfect.
*   **Iterate**: If the AI makes a mistake, just tell it! "You forgot to export the function." It will correct itself immediately.
*   **Use the CLI**: For quick tasks without opening VS Code, use `mentrex create "A python script to recursive sort files"`.
