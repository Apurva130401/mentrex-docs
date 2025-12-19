# How It Works: Privacy & Security

Mentrex is designed with a **Privacy-First** architecture. We understand that your code is your intellectual property, and our system is built to protect it.

## The Hybrid Architecture

Mentrex operates using a hybrid model that combines **Local Processing** with **Cloud Intelligence**.

### 1. The Local Agent (Your Machine)
The actual "Agent" lives entirely on your computer inside VS Code or the CLI.
*   **File Analysis**: It scans your project structure locally.
*   **Command Execution**: When it runs builds or tests, it uses your local terminal.
*   **Zero-Upload**: We do **not** upload your entire codebase to our servers.

### 2. The Secure Gateway
When you ask a question, the agent packages *only* the relevant context (e.g., the specific file you are editing and your question).
*   **Encryption**: This data is encrypted in transit (TLS 1.3).
*   **Anonymization**: PII (Personally Identifiable Information) scrubbers run before data leaves your machine.

### 3. The AI Brain
The prompt is sent to our enterprise-grade AI models.
*   **State-of-the-Art Logic**: The model generates the code or answer.
*   **No Training**: We have strict agreements that your data is **never** used to train the public models.

## Data Flow Diagram

```mermaid
graph LR
    User[Developer] -->|Talks to| Agent[Local Agent]
    Agent -->|Reads (Local)| Files[Your Codebase]
    Agent -->|Secure Request| Cloud[Mentrex Cloud]
    Cloud -->|Reasoning| AI[LLM Provider]
    AI -->|Code Solution| Cloud
    Cloud -->|Response| Agent
    Agent -->|Writes (Local)| Files
```

## Security FAQ

*   **Where are my API keys stored?**
    *   They are stored in your operating system's secure credential vault (Keychain on macOS, Credential Manager on Windows).
*   **Can you see my code?**
    *   No. We only see the snippets you actively send during a chat session. Use the "Context" indicator to see exactly what is being shared.
