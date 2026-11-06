# NSS VIIT — Performance, Accessibility (WCAG 2.2 AA) & SEO Strategy
**Directive Version:** 4.0 | Stage A Deliverable

---

## 1. Core Web Vitals Targets & Strategy
- **Largest Contentful Paint (LCP):** Target < 2.0s (achieved via explicit dimensions, WebP format, and `loading="eager"` on hero stage images).
- **Cumulative Layout Shift (CLS):** Target < 0.05 (achieved by reserving exact `aspect-ratio` containers for all photos and videos).
- **First Input Delay (FID) / INP:** Target < 100ms (achieved via minimal JavaScript blocking and lightweight ESM modules).

---

## 2. WCAG 2.2 Level AA Accessibility Standards
- **Focus Rings & Keyboard Navigation:** All custom buttons and thumbnail scrubbers have distinct `2px solid #F59E0B` focus rings on `:focus-visible`.
- **Keyboard Shortcuts:**
  - `Escape`: Closes both the photo lightbox and the video theater modal.
  - `ArrowLeft` / `ArrowRight`: Steps through preceding and succeeding photos/reels.
- **Alt Text Integrity:** Every photograph possesses descriptive alt text documenting the event and context.
- **Contrast Ratio:** Body copy (`#334155` on `#FFFFFF` or `#F8FAFC`) exceeds the 4.5:1 ratio requirement; headings (`#0B1120`) exceed 7:1.

---

## 3. SEO & Structured Data (JSON-LD)
- Canonical meta tags implemented for all top-level routes.
- Schema markup drafted for:
  - `CollegeOrUniversity` (Vishwakarma Institute of Information Technology)
  - `VolunteeringRole` (National Service Scheme Unit A-70)
  - `Event` (Gram-Setu Residential Camp, Blood Donation Drive, Shaheed Diwas)
