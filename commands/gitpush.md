Create and push a commit with a descriptive message based on our current session. Follow these steps:

1. Review the git status and staged changes using `git status` and `git diff --cached`
2. Analyze the changes we've made in this Claude Code session
3. Generate a descriptive commit message following conventional commit format (type: description)
4. Stage any unstaged changes if needed with `git add .`
5. Create the commit with the generated message (DO NOT include any AI/Claude signatures or co-author tags)
6. Push to the current branch with `git push`

Make the commit message concise but descriptive, reflecting the work we've accomplished in this session. Use semantic commit types like feat, fix, docs, style, refactor, etc.

IMPORTANT: The commit message should appear as if written by a human developer - no mentions of AI, Claude, or automated generation.