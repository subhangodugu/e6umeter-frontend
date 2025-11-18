<<<<<<< HEAD
﻿# e6umeter-frontend
Next.js frontend for AI-powered adaptive assessments and career recommendations


---

# E6U Meter â€” Frontend

Next.js + TypeScript frontend for the E6U Meter application. This UI drives adaptive assessments, dashboards, and results pages and communicates with the FastAPI AI backend for question generation, NLP evaluation, and career recommendations.

## Quick start

1. Install dependencies

```powershell
cd frontend
npm install
```

2. Run development server

```powershell
npm run dev
```

3. Build for production

```powershell
npm run build
npm start
```

## Environment

Create a `.env.local` file at the project root with at least the backend URL:

```
NEXT_PUBLIC_API_URL=http://localhost:8000
```

## Deployment

This project is ready for Vercel. Connect the GitHub repository to Vercel and set the environment variable `NEXT_PUBLIC_API_URL` to your production backend URL. Vercel will auto-detect Next.js and run the correct build.

## Contributing

Fork the repo, create a feature branch, then open a pull request against `main`.

## License

MIT â€” see `LICENSE` for details.
<<<<<<< HEAD
# e6umeter
Frontend for Edumeter project - Next.js app
=======
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
>>>>>>> ce166b5 (Initial commit - frontend)

=======
# e6umeter-frontend
Next.js frontend for AI-powered adaptive assessments and career recommendations
>>>>>>> origin/main
