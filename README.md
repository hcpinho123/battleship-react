# Battleship

A browser-based two-player Battleship game built with React and TypeScript. Two players, one device — place your fleets in secret, take turns firing, and sink the enemy before they sink you.

**[Play it live →](https://hcpinho123.github.io/battleship-react/)**

---

## How to play

1. **Player 1** places their five ships on the grid in secret
2. **Hand the device to Player 2** — shield the screen during the handoff
3. **Player 2** places their five ships in secret
4. **Battle begins** — players alternate turns firing at coordinates
5. The first player to have their entire fleet sunk **loses**

Ships available: Carrier (5), Battleship (4), Cruiser (3), Submarine (3), Destroyer (2)

---

## Tech stack

- [React 18](https://react.dev/) — UI
- [TypeScript](https://www.typescriptlang.org/) — type safety
- [Vite](https://vitejs.dev/) — build tool and dev server
- [Vitest](https://vitest.dev/) — unit testing
- [gh-pages](https://github.com/tschaub/gh-pages) — GitHub Pages deployment

---

## Getting started

**Prerequisites:** Node.js 18+ and Yarn

```bash
# Clone the repo
git clone https://github.com/hcpinho123/battleship-react.git
cd battleship-react

# Install dependencies
yarn

# Start the dev server
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Scripts

| Command | Description |
|---|---|
| `yarn dev` | Start local dev server |
| `yarn build` | Type-check and build for production |
| `yarn preview` | Preview the production build locally |
| `yarn test` | Run tests with Vitest UI |
| `yarn deploy` | Build and deploy to GitHub Pages |

---

## Project structure

```
src/
├── components/       # React components (Game, Grid, IntroScreen, ...)
├── interfaces/       # TypeScript interfaces (GameBoard, Ship, Tile, ...)
├── lib/              # Pure game logic (placeShip, attemptToHitShip, ...)
├── types/            # Enums and type aliases
└── main.tsx          # Entry point
```

---

## Branching strategy

This project follows **Git Flow**:

- `main` — production-ready code
- `develop` — integration branch for features
- `feature/*` — individual feature branches, branched from `develop`

```bash
# Start a new feature
git flow feature start my-feature

# Finish and merge back to develop
git flow feature finish my-feature
```

---

## Deployment

The app is deployed to GitHub Pages via the `gh-pages` branch.

```bash
yarn deploy
```

Live at: **https://hcpinho123.github.io/battleship-react/**

---

## License

MIT
