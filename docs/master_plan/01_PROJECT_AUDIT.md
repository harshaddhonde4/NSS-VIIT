# NSS VIIT — Project Audit & Current State Assessment
**Directive Version:** 4.0 | Stage A Deliverable
**Unit Identification:** National Service Scheme, Unit A-70, Vishwakarma Institute of Information Technology (VIIT), Pune
**Affiliation:** Savitribai Phule Pune University (SPPU) | **Motto:** *Not Me But You*

---

## 1. Executive Project Summary
NSS VIIT represents an active institutional student volunteering unit with over 200+ registered volunteers and decades of grassroots impact in urban Pune and rural Mulshi (adopted village Jamgaon since 2008). 

The existing codebase (`Nss-frontend`) is a modern React application powered by Vite, React Router DOM, Bootstrap 5, and AOS (Animate on Scroll). While the project has a functional foundation and significant content, our technical and design audit identified several critical areas requiring transformation to achieve institutional excellence.

---

## 2. Technical Stack & Dependencies Audit
| Layer | Existing Technology | Version / State | Assessment | Recommendation |
| :--- | :--- | :--- | :--- | :--- |
| **Runtime & Build** | Node.js / Vite | `vite v5.4.21` | High-speed ESM bundling | Retain. Stable and high-performing |
| **Frontend Framework** | React / React DOM | `v18.3.1` | Modern functional component model | Retain. Strict hooks compliance |
| **Routing** | `react-router-dom` | `v6.26.1` | Client-side routing with query params | Standardize semantic clean routes |
| **CSS Architecture** | Plain CSS / Bootstrap | Mixed global & component styles | Inconsistent naming & specificity leaks | Unify into designated Design System |
| **Icons** | `react-icons` (Fa, Io, Md) | `v5.3.0` | Comprehensive icon coverage | Tree-shaken and lightweight |
| **Animations** | AOS (`aos`) | `v2.3.4` | Scroll-triggered transitions | Respect `prefers-reduced-motion` |
| **Media Delivery** | Local `/public` + Cloudinary | Mixed static assets | High fidelity; needs compression audit | Utilize WebP/AVIF with srcset |

---

## 3. Directory Structure Analysis
```
NSS-VIIT/
├── .github/              # CI/CD Workflows & configurations
├── .vercel/              # Deployment target configs
├── docs/master_plan/     # Dedicated Master Strategic Transformation Plan
└── Nss-frontend/
    ├── public/
    │   ├── images/       # Static assets, reports, featured highlights, Gram-Setu
    │   └── videos/       # Official Instagram Reels, core team reveals, trailers
    └── src/
        ├── components/   # Navbar, Footer, EventCard, CoreTeamReel, ScrollToTop
        ├── data/         # eventsData.js, camp_photos_manifest.json
        └── pages/        # Home, About, Events, SingleEvent, GramSetu, Contact, Team
```

---

## 4. Current State: What Works Well vs. What Needs Transformation

### 4.1 What Is Already Working Well
1. **Rich Asset Library:** 364 verified high-resolution residential camp photos, 17 high-priority original featured cover photographs, and 12 official academic PDF reports.
2. **Official Instagram Reels Hub:** Direct integration of Days 1–6 vertical reels downloaded from `@nss.a_70` with responsive video players and modal theater.
3. **Whole-Frame Photo Presentation:** Removal of rigid `object-fit: cover` and replacement with `object-fit: contain` and ambient frosted backdrops.
4. **Single Source of Truth:** `SingleEvent.jsx` dynamically resolves event metadata directly from `eventsData.js` via semantic query parameters.
5. **Clean Linting & Production Build:** Strict zero-warning ESLint policy (`--max-warnings 0`) and clean Vite compilation.

### 4.2 What Needs Improvement & Redesign
1. **Homepage Narrative Hierarchy:** The current homepage relies on disparate sections without a unified storytelling arc bridging student induction, campus blood donation, police support, and rural camp immersion.
2. **Typography Consistency:** Multiple font declarations across `home.css`, `Event.css`, and `GramSetu.css` without centralized CSS variables.
3. **Accessibility (WCAG 2.2 AA):** Focus outlines on custom interactive buttons, explicit `aria-live` regions for carousels, and complete contrast compliance across muted text colors.
4. **SEO & Structured Data:** Missing OpenGraph metadata, JSON-LD Schema (`CollegeOrUniversity`, `VolunteeringRole`, `Event`), and dynamic canonical tags.
5. **Forms & Interactive Engagement:** Contact form needs client-side validation schema, accessible error messaging, and secure backend submission handlers.

---

## 5. Technical Risk Matrix
- **Risk 1 (Asset Weight):** Large high-definition MP4 files in `/public/videos/reels/` can impact initial page load if not lazy-loaded or preloaded with `preload="none"` or `preload="metadata"`.
- **Risk 2 (Route Desynchronization):** Deep links with serialized URLs can break if data keys change; clean ID-based routing is strictly enforced.
- **Risk 3 (Third-Party Embed Reliance):** Relying solely on Instagram iframe embeds leads to cookie consent popups and login walls; solved by primary local HTML5 playback with Instagram deep links.
