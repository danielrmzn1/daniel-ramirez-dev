# Git Standards

## Committing Changes

When the user asks to "commit" without specifying which files to stage, follow these rules:

1.  **Automatic Staging:** Stage and commit all modified and untracked files in the repository.
2.  **Exclusion Rule:** Always exclude files in the `docs/` directory from automatic staging.
3.  **Exception:** The `docs/` directory should only be included in a commit if the user explicitly specifies them or explicitly asks to "commit all including docs".

This ensures that static project documentation (like resumes or summaries) is only updated when intentionally requested.

## Fast Commit Workflow

**IMPORTANT:** Keep commits fast and simple. Follow this streamlined process:

1. **Single command approach:** Use `git add -A . ':!docs/' && git commit -m "message"` in ONE command
2. **Keep commit messages concise:** Use a short, descriptive message (50 chars or less for title)
3. **Auto-run everything:** Set `SafeToAutoRun: true` for all git commands
4. **No status checks:** Don't run `git status` before committing - just stage and commit directly
5. **Use short wait times:** Set `WaitMsBeforeAsync: 3000` maximum for git commands

### Example Fast Commit

```bash
# Single command - stage (excluding docs/) and commit
git add -A . ':!docs/' && git commit -m "fix: improve accessibility contrast"
```

### Commit Message Format

Use conventional commits format:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation only
- `style:` - Formatting, missing semicolons, etc.
- `refactor:` - Code restructuring
- `perf:` - Performance improvement
- `test:` - Adding tests
- `chore:` - Maintenance tasks
