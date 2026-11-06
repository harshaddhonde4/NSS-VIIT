# NSS VIIT — Technical Architecture & Engineering Specifications
**Directive Version:** 4.0 | Stage A Deliverable

---

## 1. Frontend Architectural Blueprint
```
React 18 SPA (Vite ESM Bundling)
│
├── Routing Layer (react-router-dom v6)
│   ├── Clean URL Dispatching (/events/singleevent?name=...)
│   └── ScrollToTop restoration on route transition
│
├── State & Data Management
│   ├── Master Event Catalog (eventsData.js) — Single Source of Truth
│   ├── Camp Photo Manifest (camp_photos_manifest.json) — 364 Photos
│   └── Local State (Active Lightbox Index, Theater Modal, Filter Category)
│
├── Component Hierarchy
│   ├── Core Navigation & Chrome (Navbar, Footer, ScrollToTop)
│   ├── Event Catalog & Showcase (Events, EventCard, SingleEvent)
│   ├── Flagship Camp Module (GramSetu, ReelsSection, ReelTheaterModal)
│   └── Student Leadership Hub (Team_25-26, CoreTeamReel)
│
└── Performance & Asset Pipeline
    ├── Responsive Image Strategy (object-fit: contain with ambient frosted blur)
    ├── Local Video Delivery (/videos/reels/ with preload="metadata")
    └── Dynamic Code Splitting via React Lazy & Suspense
```

---

## 2. Media Delivery & Video Playback Architecture
- **Dual-Mode Reel Playback:**
  - *Native Mode:* Ultra-fast HTML5 `<video controls playsInline preload="metadata">` streaming locally from `public/videos/reels/`. Zero third-party tracker latency, zero cookie walls.
  - *Instagram Embed Mode:* Clean fallback iframe linking directly to `@nss.a_70` for users wishing to engage natively on Instagram.
