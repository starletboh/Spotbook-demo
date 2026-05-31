# Spotbook — Static Demo

A fully static, GitHub Pages-compatible demo of the **Spotbook** venue operations platform.

## 🚀 Quick Start

Open `index.html` in any browser — no server or build step required.

Or deploy the entire folder to **GitHub Pages**, **Netlify**, or any static host.

## 📄 Pages

| Page | File | Description |
|------|------|-------------|
| Login | `index.html` | Demo login screen |
| Dashboard | `dashboard.html` | Daily summary & reservations |
| Floor Plan | `floorplan.html` | Interactive spot grid with reservations |
| Analytics | `analytics.html` | Charts & KPIs |
| Users | `users.html` | User management + roles & permissions |
| Audit Logs | `logs.html` | Activity log with filters |
| Settings | `settings.html` | Platform configuration |

## 🎯 Demo Features

- **Live floor plan** — click any spot to view/create/check-in/cancel reservations
- **Interactive analytics** — charts powered by Chart.js, CSV export
- **User management** — add/edit/delete users with role assignment
- **Role & permissions editor** — toggle permissions per role with visual toggles
- **Audit logs** — filterable activity log with detail popups
- **Settings** — all configuration options functional in-session

## 🔒 Demo Credentials

Any username / password — click **Sign In** to proceed as **Alexandra Papadopoulos (Admin)**.

## 🏗 Architecture

```
spotbook-demo/
├── index.html           # Login
├── dashboard.html       
├── floorplan.html       
├── analytics.html       
├── users.html           
├── logs.html            
├── settings.html        
├── manifest.json        
└── assets/
    ├── css/             # Original styles (unchanged)
    ├── js/
    │   ├── mock-data.js  # All demo data
    │   ├── core.js       # Auth/permissions stubs
    │   └── navigation.js # Sidebar builder
    └── icons/           # Original icons
```

No backend, no API calls, no build tools required.
