# Bhuk Foods - Operations Manual

## 🚀 Deployment Instructions

This project is configured for deployment on Google Cloud.

### 💻 Local Development
To preview changes locally:
```bash
npm install
npm run dev
```

### ⚙️ Build for Production
To build the project for production deployment (e.g. to Google Cloud Storage or Cloud Run):
```bash
npm run build
```
The optimized static files will be generated in the `dist` directory.

### ⚙️ Admin & Database
- The Admin Dashboard is located at `/admin`.
- Ensure you have enabled **Authentication**, **Firestore**, and **Storage** in your Google Cloud / Firebase Console.
- Update `src/firebaseConfig.ts` with your project keys if you haven't already.