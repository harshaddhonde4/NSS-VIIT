# NSS VIIT — Quality Assurance & Acceptance Testing Plan
**Directive Version:** 4.0 | Stage A Deliverable

---

## 1. Acceptance Criteria Checklist (10/10 Benchmark)
- [x] All 13 verified initiatives from 2025–26 tenure accurately represented with dates, venues, and descriptions.
- [x] Strict Whole-Frame Visibility (`object-fit: contain`) with zero image or video cropping.
- [x] Ambient studio backdrops behind all stage photos to prevent harsh letterboxing.
- [x] Official Instagram page `@nss.a_70` synchronized across Navbar, Footer, Contact, and Gram-Setu.
- [x] All 6 daily Instagram reels playable directly on-page with responsive video theater modal.
- [x] Unverified individual selfies completely expunged from all records.
- [x] Zero ESLint warnings (`--max-warnings 0`).
- [x] Production build passes cleanly with no missing assets or broken imports.

---

## 2. Test Execution Matrix
| Device / Viewport | Operating Systems Tested | Resolution Tested | Status |
| :--- | :--- | :--- | :--- |
| **Desktop High-Res** | Windows 11 / macOS | 1920x1080, 2560x1440 | Verified Clean Layout |
| **Laptop Standard** | Windows 11 / macOS | 1440x900, 1366x768 | Verified Responsive Scaling |
| **Tablet Portrait/Landscape**| iPadOS / Android | 768x1024, 1024x768 | Verified Touch Scrubber & Drawer |
| **Mobile Standard** | iOS Safari / Android Chrome | 390x844 (iPhone), 412x915 (Pixel) | Verified Single Column Flow & 9:16 Reels |
| **Compact Mobile** | Mobile Small | 360x640 | Verified Legible Fonts & Stacked Actions |
