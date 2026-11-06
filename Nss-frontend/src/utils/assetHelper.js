/**
 * Resolves a public asset path against Vite's base URL across environments
 * (localhost, GitHub Pages subpaths, custom domains, and Vercel/Netlify).
 *
 * @param {string} path - Absolute or relative asset path (e.g. '/videos/core_team_reveal.mp4')
 * @returns {string} Fully qualified or base-prefixed URL
 */
export const toAssetUrl = (path) => {
  if (!path) return '';
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('data:') ||
    path.startsWith('blob:')
  ) {
    return path;
  }

  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${cleanBase}${cleanPath}`;
};

export default toAssetUrl;
