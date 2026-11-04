# Project API Flow & How to Run (Frontend + Backend)

This project keeps the frontend and backend in separate folders:

- `nextclient/` — Next.js frontend
- `server/` — Express/MongoDB backend

Below is a concise explanation of how the frontend hits the backend and how to run/debug both.

## 1) How the frontend calls the backend

- The frontend uses a centralized HTTP client at `services/apiClient.js`. In development it uses `/api` as the base URL; in production it uses `NEXT_PUBLIC_API_URL`.
- In development Next.js rewrites (see `next.config.mjs`) proxy requests from `/api/:path*` to the backend host (by default `http://localhost:5001/api/:path*`). This lets client-side code call `/api/...` without hardcoding ports.
- Static file requests for uploads are proxied from `/uploads/:path*` to the backend uploads path.

Flow summary:

1. Client code calls `apiClient.get('/blogs')` → axios base URL is `/api` → request goes to `/api/blogs` on the Next.js dev server.
2. Next.js rewrites proxy `/api/blogs` → `http://localhost:5001/api/blogs` (backend).
3. Backend receives request, returns JSON.
4. Next.js returns the backend response to the browser.

## 2) Where ports and URLs live

- Backend port: `server/.env` has `PORT` (in this project `PORT=5001`).
- Frontend override: `nextclient/.env.local` can set `NEXT_PUBLIC_API_URL` (for example `http://localhost:5001/api`). If set, `next.config.mjs` uses it instead of the hardcoded localhost.
- Frontend default (when `NEXT_PUBLIC_API_URL` is empty): proxy uses the URL defined in `next.config.mjs` (development default `http://localhost:5001`).

## 3) How to run both locally

1. Start the backend (from repo root or `server/`):

```
cd server
npm install (if not installed)
npm run dev    # uses nodemon, starts server.js (reads .env PORT)
```

2. Start the frontend (in a new terminal):

```
cd nextclient
npm install (if not installed)
npm run dev
```

Now open `http://localhost:3000` for the frontend. API calls made to `/api/...` will be proxied to the backend.

## 4) Common problems & troubleshooting

- ECONNREFUSED / Request failed: check backend is running and listening on the port set in `server/.env`.
- EADDRINUSE: port already in use — either kill the process using that port or change `PORT` in `server/.env`.
- If the frontend shows status 500 or proxy errors, confirm `next.config.mjs` rewrites point to the correct backend port.
- CORS: in production the backend must allow requests from the frontend origin. In development rewrites avoid CORS because the Next server proxies the requests.
- If you set `NEXT_PUBLIC_API_URL` to a full URL, frontend axios uses that value directly; update `CORS_ORIGIN` in `server/.env` accordingly.

## 5) Where to change API endpoints

- Frontend: network calls live in `nextclient/services/` (e.g., `apiClient.js`, `blogService.js`, etc.).
- Backend: route files live in `server/routes/` (e.g., `blogRoutes.js`) and controllers in `server/controllers/`.

## 6) Production notes

- For production deploys, set `NEXT_PUBLIC_API_URL` to your production API base (no trailing `/api` required if you want to keep path structure). Ensure backend `CORS_ORIGIN` includes the frontend domain.
- Remove or adapt dev rewrites if you serve frontend and backend from different domains.

---

If you want, I can also:

- Add example `curl` commands for each major endpoint (blogs, contact, auth).
- Create a small run script to start both (e.g., a PowerShell script or `concurrently` config).

Requested by: project maintainer
