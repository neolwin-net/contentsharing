# SP Networking Guide — Documentation Website

A GitBook-inspired static documentation website for networking notes, lab guides, configuration examples, and verification steps.

## Project structure

```text
contentsharing/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── app.js
└── README.md
```

## Main features

- Responsive documentation layout with a collapsible sidebar.
- Search filtering for sidebar links and topic cards.
- Dark and light theme toggle.
- Expandable navigation groups.
- Copy-to-clipboard buttons for code blocks.
- On-page navigation using section anchors.
- No build tools or external JavaScript libraries required.

## Preview locally

Download or clone the repository, then open `index.html` in a modern browser. For clipboard access and consistent local behavior, you can also run a local static server from the repository directory.

## Publish with GitHub Pages

1. Open the repository's **Settings** page.
2. Select **Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Select the default branch and the `/ (root)` folder.
5. Save, then wait for GitHub Pages to finish its deployment.
6. Open the published URL shown in the Pages settings.

If the site does not load, check the Pages deployment status and confirm that the published branch contains `index.html`, `assets/css/style.css`, and `assets/js/app.js` at the paths shown above.

## Customizing the guide

The current topic text is example content. Replace it with your own material. When the content grows, create separate HTML pages for individual lessons and link them from the sidebar rather than keeping every lesson in `index.html`.
