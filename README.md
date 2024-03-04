This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# The Movie DB Code Challenge

Here is the information you will need:

- The Movie DB documentation:
  - https://developer.themoviedb.org/reference/intro/getting-started
- Use this provided API Key:
  - **`a9b856b302ef45f0fc28033e35b71d6a`**
- Use the Discover endpoint to get a list of movies:
  - https://developer.themoviedb.org/reference/discover-movie
  - `https://api.themoviedb.org/3/discover/movie?api_key=api_key`
- To get the images, you will need a separate url
  - `http://image.tmdb.org/t/p/w500/your_poster_path`

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
