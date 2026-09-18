# suzukiyo.github.io

個人ポートフォリオサイト。

## Stack

- React 19 + TypeScript
- Vite
- React Router
- Tailwind CSS v4

## Development

```sh
npm install
npm run dev
```

## Build

```sh
npm run build   # -> dist/
npm run preview
```

## Deploy

`master` に push すると GitHub Actions (`.github/workflows/deploy.yml`) が
自動でビルドし、GitHub Pages に公開します。手動で dist/ をコミットする必要は
ありません。
