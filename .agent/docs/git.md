# Git Standards

## Committing Changes

When the user asks to "commit" without specifying which files to stage, follow these rules:

1.  **Automatic Staging:** Stage and commit all modified and untracked files in the repository.
2.  **Exclusion Rule:** Always exclude files in the `docs/` directory from automatic staging.
3.  **Exception:** The `docs/` directory should only be included in a commit if the user explicitly specifies them or explicitly asks to "commit all including docs".

This ensures that static project documentation (like resumes or summaries) is only updated when intentionally requested.
