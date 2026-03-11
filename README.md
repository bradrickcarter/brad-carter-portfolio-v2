# BradMail — Portfolio Site

A retro email-client-style portfolio built with React + Vite.

## Quick Start

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Project Structure

```
src/
  data.js                  # ← All content lives here. Edit this to update the site.
  index.css                # Global styles + design tokens
  main.jsx                 # React entry point
  App.jsx                  # Root layout + email routing
  App.module.css           # App frame styles
  components/
    TitleBar.jsx/.module.css      # macOS-style title bar
    Toolbar.jsx/.module.css       # Mail toolbar + search
    Sidebar.jsx/.module.css       # Left mailbox nav
    EmailList.jsx/.module.css     # Inbox message list
    DetailHeader.jsx/.module.css  # Shared email header (from/subject/date)
    EmailDetail.module.css        # Shared email body styles
    AboutEmail.jsx                # "Who is this guy?" email
    WorkEmail.jsx                 # Case studies email
    ContactEmail.jsx              # Contact info email
    ResumeEmail.jsx               # Resume / experience email
    StatusBar.jsx/.module.css     # Bottom status bar
```

## How to Update Content

**To update text, links, or case studies** → edit `src/data.js`

**To add a new email** →
1. Add an entry to the `emails` array in `data.js`
2. Create `src/components/YourEmail.jsx` (copy any existing email as a template)
3. Import it in `App.jsx` and add it to the `EMAIL_VIEWS` object

## Design Tokens

All colors are CSS variables defined in `src/index.css`:

| Variable    | Value     | Use               |
|-------------|-----------|-------------------|
| `--green`   | `#4ADE80` | Primary accent    |
| `--yellow`  | `#FCD34D` | Secondary accent  |
| `--pink`    | `#F472B6` | Tertiary accent   |
| `--black`   | `#0C0C0C` | Page background   |
| `--panel`   | `#1A1A1A` | Card backgrounds  |
| `--border`  | `#2A2A2A` | Borders/dividers  |
