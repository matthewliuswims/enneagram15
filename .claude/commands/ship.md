Ship my changes — stage everything, commit, and push to the remote branch.

Follow these steps exactly:

1. Run `git status` to see what changed.
2. If there are no changes at all (no modified, added, or deleted files), tell the user "Nothing to ship — no changes found." and stop.
3. Run `git add -A` to stage all changes.
4. Run `git diff --cached --stat` to get a summary of what's being committed.
5. Write a short, clear commit message (1-2 sentences) that describes what changed based on the diff summary. Keep it simple and human-readable. End the message with a blank line followed by: `Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>`
6. Commit using that message.
7. Push to the current remote branch. If there's no upstream branch yet, use `git push -u origin HEAD`.
8. Once the push succeeds, wrap up with a friendly message that includes:
   - Confirmation that the changes are pushed up
   - The commit message you used
   - A note that the changes should be live at https://www.enneagram15.com in a couple of minutes
   - Let them know you're ready for whatever they need next

Do NOT ask the user any questions. Just do it. Keep all output short and friendly.
