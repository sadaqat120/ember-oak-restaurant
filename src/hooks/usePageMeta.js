import { useEffect } from 'react';

export default function usePageMeta(title, description) {
  useEffect(() => {
    const fullTitle = title ? `${title} | Ember & Oak` : 'Ember & Oak — Wood-Fired American Kitchen';
    document.title = fullTitle;

    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', 'description');
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', description);
    }
  }, [title, description]);
}
