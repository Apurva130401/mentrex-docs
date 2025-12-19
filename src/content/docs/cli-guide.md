# CLI User Manual

The **Mentrex CLI** brings the power of our AI agent directly to your terminal. It is perfect for automation, quick prototyping, or developers who prefer the command line.

## Installation

```bash
npm install -g mentrex
```

## Command Reference

### `mentrex login`
Connects your terminal to your Mentrex account.
*   **Usage**: Run and paste your API Key when prompted.
*   **Security**: Your key simplifies stored securely in your OS's credential manager or encrypted config.

### `mentrex create "<prompt>"`
The magic command. Generates code, text, or entire files based on your description.
*   **Arguments**:
    *   `<prompt>`: A text description of what you want (quote it string).
*   **Options**:
    *   `-m, --model <name>`: Switch models for this request (e.g., `gpt-4`).
    *   `-o, --output <filename>`: Save the result directly to a file instead of printing it.
*   **Examples**:
    ```bash
    # Generate a React Component
    mentrex create "A responsive Navbar component with Tailwind CSS"

    # Write a Python script to a file
    mentrex create "Script to resize images in a folder" -o resize_images.py
    ```

### `mentrex model`
Configures which AI "Brain" the CLI uses by default.
*   `list`: Shows all available models (e.g., GPT-4o, Claude 3.5 Sonnet).
*   `set <model_name>`: Sets your default preference.
*   `get`: Shows what you are currently using.

### `mentrex balance`
Checks your remaining credits.
*   **Output**: Shows your balance in Credits (e.g., `2,500 Credits`).

### `mentrex whoami`
Verifies your identity. Shows your logged-in Name, Email, and User ID.

## Troubleshooting
*   **"Command not found"**: Ensure you installed with `-g` (global) flag.
*   **"Invalid Key"**: Run `mentrex login` again to refresh your credentials.
