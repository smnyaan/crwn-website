# CRWN — landing page

Static base for the CRWN marketing site. No build step.

## Structure

| File         | Purpose                                    |
| ------------ | ------------------------------------------ |
| `index.html` | Page markup — header, hero, feature rows, CTA, footer |
| `styles.css` | All styling; design tokens in `:root`      |
| `main.js`    | Mobile nav toggle                          |

## Run

Open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Notes

- Fonts: Fraunces (headings) + Inter (body) via Google Fonts.
- Colors, spacing, and fonts are CSS custom properties in `:root` — edit there.
- Phone mockups and style swatches are pure CSS placeholders; swap for real imagery in `assets/`.
- Links (`#waitlist`, `Log in`, etc.) are placeholders pending real routes.
