# 🚀 Mindframe Agency Development Setup

## Quick Start (Single Command)

### Windows:
```bash
npm run start:dev
```

### Mac/Linux:
```bash
npm run start:dev
```

This starts **both backend and frontend** automatically!

---

## Manual Start (If needed)

### Terminal 1 - Backend:
```bash
cd server
npm install
npm run dev
```

### Terminal 2 - Frontend:
```bash
npm run dev
```

---

## URLs

- 🌐 **Frontend**: http://localhost:3000
- 🔗 **Backend API**: http://localhost:5000/api
- ✅ **Health Check**: http://localhost:5000/api/health

---

## How It Works

```
Frontend (localhost:3000)
        ↓
    /api/contact
        ↓
Next.js Rewrites (next.config.mjs)
        ↓
Backend (localhost:5000)
        ↓
Express Server + MongoDB
```

**Frontend calls `/api/*` → Next.js automatically proxies to backend**

---

## Environment Variables

**Development (.env.local)**:
- `NEXT_PUBLIC_API_URL=` (empty - uses /api proxy)
- `NEXT_PUBLIC_BASE_URL=https://mindframeindia.com`

**Production (.env.production)**:
- `NEXT_PUBLIC_API_URL=https://api.mindframeindia.com/api`
- `NEXT_PUBLIC_BASE_URL=https://mindframeindia.com`

---

## Backend Folder Structure

```
server/
├── app.js              (Express app setup)
├── server.js           (Entry point)
├── .env               (Backend config)
├── config/
│   ├── database.js    (MongoDB)
│   ├── jwt.js
│   └── cloudinary.js
├── routes/
│   ├── authRoutes.js
│   ├── blogRoutes.js
│   ├── contactRoutes.js
│   ├── careerRoutes.js
│   └── positionRoutes.js
├── controllers/       (Business logic)
├── middleware/        (CORS, auth, errors)
├── models/           (MongoDB schemas)
└── package.json
```

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| **404 on /api/contact** | Start backend: `cd server && npm run dev` |
| **Network Error** | Check backend is running on 5000 |
| **CORS Error** | Backend CORS already configured in server/.env |
| **Port already in use** | Kill process: `lsof -i :5000` or `lsof -i :3000` |

---

## Production Deployment

1. **Deploy Backend** (Railway, Render, Heroku):
   - Add to `server/.env.production`
   - Update `CORS_ORIGIN` to your frontend domain

2. **Deploy Frontend** (Vercel):
   - Set `NEXT_PUBLIC_API_URL=https://your-backend-api.com/api`
   - Vercel will use production env vars

3. **No rewrites needed in production** - frontend calls real backend API directly

