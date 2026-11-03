import { useEffect } from 'react';

const setMetaTag = (attrName, attrVal, content) => {
  if (!content) return;
  let element = document.querySelector(`meta[${attrName}="${attrVal}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attrName, attrVal);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

const setLinkCanonical = (href) => {
  if (!href) return;
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
};

export const useSEO = ({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  ogType = 'website',
}) => {
  useEffect(() => {
    if (title) {
      document.title = title;
      setMetaTag('property', 'og:title', title);
      setMetaTag('name', 'twitter:title', title);
    }

    if (description) {
      setMetaTag('name', 'description', description);
      setMetaTag('property', 'og:description', description);
      setMetaTag('name', 'twitter:description', description);
    }

    if (keywords) {
      setMetaTag('name', 'keywords', keywords);
    }

    const currentUrl = canonical || (typeof window !== 'undefined' ? window.location.href : '');
    if (currentUrl) {
      setLinkCanonical(currentUrl);
      setMetaTag('property', 'og:url', currentUrl);
    }

    const finalImage = ogImage || 'https://nss-viit.vercel.app/images/img/nss-logo.png';
    setMetaTag('property', 'og:image', finalImage);
    setMetaTag('name', 'twitter:image', finalImage);

    setMetaTag('property', 'og:type', ogType);
    setMetaTag('name', 'twitter:card', 'summary_large_image');
  }, [title, description, keywords, canonical, ogImage, ogType]);
};

export default useSEO;

