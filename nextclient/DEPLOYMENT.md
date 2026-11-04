# Production Deployment Guide

## Project Structure
```
nextclient/          (Next.js Frontend - Port 3000)
└── server/          (Express Backend - Port 5000)
```

## Separated Backend & Frontend

Your frontend and backend are **correctly separated**. This is the proper architecture for scalability.

### Development Setup
1. **Backend runs on**: `http://localhost:5000`
2. **Frontend runs on**: `http://localhost:3000` (or 5173 if using Vite)
3. **API calls**: Frontend → Backend via `NEXT_PUBLIC_API_URL`

### Production Setup
1. **Backend**: Deploy on separate server (e.g., Railway, Render, Heroku, AWS)
2. **Frontend**: Deploy on Vercel, Netlify, or your own server
3. **Update environment variables** accordingly

---

## Configuration Files

### Frontend Environment Variables

**Development** (`.env.local`):
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_BASE_URL=https://mindframeindia.com
```

**Production** (`.env.production`):
```env
NEXT_PUBLIC_API_URL=https://api.mindframeindia.com/api
NEXT_PUBLIC_BASE_URL=https://mindframeindia.com
```

### Backend Environment Variables

**Development** (`server/.env`):
```env
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173,http://localhost:3000
```

**Production** (`server/.env.production`):
```env
PORT=5000
NODE_ENV=production
CORS_ORIGIN=https://mindframeindia.com
MONGODB_URI=your_production_mongodb_uri
```

---

## Deployment Steps

### 1. Deploy Backend

Options:
- **Railway** (recommended, free tier available)
- **Render**
- **Heroku**
- **AWS EC2/Lambda**

Example with Railway:
```bash
cd server
npm install
git push  # Railway auto-deploys
```

### 2. Deploy Frontend

Options:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS S3 + CloudFront**

Example with Vercel:
```bash
npx vercel --prod
```

### 3. Update Environment Variables

After deployment, set these in your hosting platform:
- **Vercel**: Project Settings → Environment Variables
- **Railway**: Variables tab in dashboard

---

## Common Issues & Fixes

### ❌ APIs Not Working
**Cause**: `NEXT_PUBLIC_API_URL` not set
**Fix**: Add to `.env.local` or hosting environment variables

### ❌ CORS Errors
**Cause**: Frontend domain not in `CORS_ORIGIN`
**Fix**: Update `server/.env` or hosting environment

### ❌ 404 on routes
**Cause**: Backend routes not matching frontend calls
**Fix**: Check `server/routes/` and ensure routes are mounted

---

## API Endpoints

All APIs are prefixed with `/api`:

### Auth Routes
- `POST /api/auth/login` - Admin login
- `GET /api/auth/me` - Get current admin (protected)
- `POST /api/auth/logout` - Logout (protected)

### Blog Routes
- `GET /api/blogs` - Get all blogs
- `GET /api/blogs/:id` - Get single blog
- `POST /api/blogs` - Create blog (admin)

### Other Routes
- `POST /api/contact` - Contact form
- `GET /api/careers` - Get job listings
- `POST /api/apply` - Apply for job

---

## Testing Production Build Locally

```bash
# Frontend
npm run build
npm start

# Backend
cd server
NODE_ENV=production npm start
```

Then test with: `NEXT_PUBLIC_API_URL=http://localhost:5000/api npm start`

---

## Performance Optimization

✅ Implemented:
- CORS properly configured
- Error handling middleware
- JWT authentication
- Image optimization (next/image)
- Cloudinary integration

✅ Recommended:
- Add caching headers
- Enable gzip compression
- Use CDN for static assets
- Monitor error logs
- Set up uptime monitoring

---

## Support URLs

- **API Health Check**: `https://your-backend-url/api/health`
- **Frontend Home**: `https://mindframeindia.com`
- **Admin Dashboard**: `https://mindframeindia.com/admin/dashboard`

