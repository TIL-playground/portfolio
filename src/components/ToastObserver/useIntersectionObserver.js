import { useState, useEffect, useCallback } from 'react';
import { OBSERVER_OPTIONS, DATA_ATTRIBUTE } from './constants';

export const useIntersectionObserver = () => {
  const [showToast, setShowToast] = useState(false);

  const handleIntersect = useCallback((entries) => {
    const [entry] = entries;
    setShowToast(entry.isIntersecting);
  }, []);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;

    const targetElement = document.querySelector(`[${DATA_ATTRIBUTE}]`);
    if (!targetElement) return;

    const observerInstance = new IntersectionObserver(handleIntersect, OBSERVER_OPTIONS);
    observerInstance.observe(targetElement);

    return () => observerInstance?.disconnect();
  }, [handleIntersect]);

  return showToast;
};
