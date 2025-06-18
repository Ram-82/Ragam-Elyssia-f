# Ragam Elyssia - Frontend

Luxury event planning & concierge services website frontend.

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **UI Library**: Shadcn/ui (Radix UI primitives)
- **Styling**: Tailwind CSS
- **Routing**: Wouter
- **State Management**: TanStack Query
- **Form Handling**: React Hook Form + Zod

## Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   ```bash
   cp .env.example .env
   # Edit .env with your backend API URL
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## Deployment (Vercel)

1. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Select the `ragam-elyssia-frontend` directory

2. **Set environment variables**:
   - `VITE_API_URL`: Your backend API URL (e.g., `https://your-backend.onrender.com`)

3. **Deploy**:
   - Vercel will automatically build and deploy your app

## Environment Variables

- `VITE_API_URL`: Backend API URL (required)

## Features

- **Homepage**: Luxury branding and service previews
- **About**: Founder's story and philosophy
- **Services**: Four service categories
- **Consultation**: Booking form for potential clients
- **Contact**: Contact form and business information
- **Responsive Design**: Mobile-first approach
- **Luxury Design System**: Premium aesthetics with gold accents 