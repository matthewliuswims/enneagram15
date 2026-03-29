# Enneagram 15

A personality quiz website built with plain HTML, CSS, and JavaScript. No frameworks, no build tools.

Live at [enneagram15.com](https://www.enneagram15.com)

## Project structure

```
enneagram15/
  index.html        # Homepage
  styles.css         # Global styles
  quiz.js            # Quiz logic and personality data
  favicon.svg        # Site favicon
  quiz/
    index.html       # Quiz page (served at /quiz/)
  privacy/
    index.html       # Privacy policy (served at /privacy/)
  terms/
    index.html       # Terms of service (served at /terms/)
```

Each page lives in its own folder as `index.html`. This gives us clean URLs (`/quiz/` instead of `/quiz.html`) because web servers automatically serve `index.html` when a folder is requested.

Shared assets (`styles.css`, `quiz.js`, `favicon.svg`) live at the root. Subpages reference them with `../` (e.g., `../styles.css`).

## Local development

With a simpler setup (all `.html` files in the root folder), you can just double-click `index.html` and everything works. The browser opens it via `file:///` and links like `quiz.html` resolve fine because they're all in the same directory.

Our setup is different. To get clean URLs (`/quiz/` instead of `/quiz.html`), we moved each page into its own folder (e.g., `quiz/index.html`). This relies on a web server convention: when you request a folder, the server automatically looks for an `index.html` inside it and serves that. This is the same reason `enneagram15.com` works without typing `enneagram15.com/index.html`.

The catch is that `file:///` has no server involved. Your browser is just reading your filesystem directly, and your filesystem doesn't know that convention. So when you click a link to `/quiz/`, instead of serving `quiz/index.html`, your browser shows you the raw folder contents.

The fix is to run a lightweight local server that adds the `index.html` resolution behavior:

```bash
cd /path/to/enneagram15
python3 -m http.server 8080
```

Then open [http://localhost:8080](http://localhost:8080) in your browser. Hit `Ctrl+C` to stop the server.

## Hosting

Deployed on AWS Amplify. The folder-based routing works out of the box with no additional configuration since Amplify (like most static hosts) automatically serves `index.html` from subdirectories.
