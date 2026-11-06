# NSS VIIT — Risk, Assumption & Dependency Register
**Directive Version:** 4.0 | Stage A Deliverable

---

## 1. Risk Register & Mitigation Controls

| Risk ID | Category | Description | Severity | Probability | Mitigation Strategy |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **R-01** | Technical | High bandwidth consumption from local HD MP4 videos | Medium | High | Configured `preload="metadata"` so videos only stream chunks upon explicit user interaction. |
| **R-02** | Content | Misattribution of village camp photos to campus events | High | Low | Established strict separation: all Jamgaon photos remain exclusive to Gram-Setu 2026. |
| **R-03** | Third-Party | Instagram account username or link alteration | Medium | Low | Centralized social constants so updates require modifying a single configuration file. |
| **R-04** | Layout | Letterboxing visual dissonance on portrait photos | Low | Medium | Engineered `.singleevent-stage-bg` frosted ambient blur to turn letterboxing into an aesthetic asset. |
| **R-05** | Browser Lock | Windows file watcher collision during massive asset generation | Medium | Medium | Automated script handles write pauses and background daemon monitoring. |
