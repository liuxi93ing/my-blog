# my-blog

A website that collects my writings and project demos — geek-style, minimalist, and
dark-mode-first. Static, fast, and entirely Markdown-driven (no database, no CMS).

Built with **Astro** + MDX, **Tailwind CSS v4**, built-in **Shiki** syntax highlighting,
and **Pagefind** static search.

## Develop

```bash
# Node is installed via nvm in this environment:
export PATH="$HOME/.nvm/versions/node/v24.18.0/bin:$PATH"

npm install      # first time only
npm run dev      # http://localhost:4321
```

> Search runs against the built index, so try it with `npm run build && npm run preview`.

## Commands

| Command           | Action                                           |
| ----------------- | ------------------------------------------------ |
| `npm run dev`     | Start the dev server                             |
| `npm run build`   | Build to `dist/` and generate the Pagefind index |
| `npm run preview` | Preview the production build locally             |

## Writing content

- **Posts:** add an `.md`/`.mdx` file to `src/content/blog/` with frontmatter
  (`title`, `description`, `date`, `tags`, optional `draft: true`).
- **Projects:** add a file to `src/content/projects/` (`title`, `description`, `tech`,
  `repo`, `demoUrl`, `featured`, `status`).

Frontmatter is validated by Zod in `src/content.config.ts`, so mistakes fail the build.

## Customize

- Site name / nav / socials: `src/consts.ts`
- Colors & typography: `src/styles/global.css` (`--accent` is the single accent color)
- Domain (sitemap/canonical/RSS): `site` in `astro.config.mjs` + `SITE.url` in `src/consts.ts`

## Deploy

Static output in `dist/`. Hosts on Vercel (config in `vercel.json`), Cloudflare Pages, or
any static host. Build command: `npm run build`, output dir: `dist`.
