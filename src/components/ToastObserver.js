import React, { useState, useEffect, memo, useCallback, useMemo } from 'react';
import Toast from '../style/Styled';

const ToastObserver = ({ children, message }) => {
  const [showToast, setShowToast] = useState(false);

  const handleIntersect = useCallback((entries) => {
    const [entry] = entries;
    setShowToast(entry.isIntersecting);
  }, []);

  const memoizedChildren = useMemo(() => children, [children]);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;

    const targetElement = document.querySelector('[data-toast-target]');
    if (!targetElement) return;

    const observerOptions = {
      threshold: 0.1, 
      rootMargin: '0px'
    };

    const observerInstance = new IntersectionObserver(handleIntersect, observerOptions);
    observerInstance.observe(targetElement);

    return () => {
      if (observerInstance) {
        observerInstance.disconnect();
      }
    };
  }, [handleIntersect]);

  return (
    <div data-toast-target>
      {memoizedChildren}
      {showToast && <Toast>{message}</Toast>}
    </div>
  );
};

export default memo(ToastObserver);