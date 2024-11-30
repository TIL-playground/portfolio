import React, { useRef, useState, useCallback, useEffect, memo } from 'react';
import Toast from '../style/Styled';

const ToastObserver = ({ children, message }) => {
  const [showToast, setShowToast] = useState(false);
  const intersectionCountRef = useRef(0);
  const observerRef = useRef(null);
  const elementRef = useRef(null);

  const handleIntersection = useCallback(([entry]) => {
    if (entry.isIntersecting) {
      intersectionCountRef.current += 1;
      
      if (intersectionCountRef.current > 0) {
        setShowToast(true);
      }
    } else {
      setShowToast(false);
    }
  }, []);

  useEffect(() => {
    const options = {
      threshold: 0.1
    };

    observerRef.current = new IntersectionObserver(handleIntersection, options);

    const currentElement = elementRef.current;
    if (currentElement) {
      observerRef.current.observe(currentElement);
    }

    return () => {
      if (observerRef.current) {
        if (currentElement) {
          observerRef.current.unobserve(currentElement);
        }
        observerRef.current.disconnect();
      }
    };
  }, [handleIntersection]);

  const observeElement = useCallback((element) => {
    if (element) {
      elementRef.current = element;
    }
  }, []);

  return (
    <div ref={observeElement}>
      {children}
      {showToast && <Toast>{message}</Toast>}
    </div>
  );
};

export default memo(ToastObserver, (prevProps, nextProps) => {
  return (
    prevProps.children === nextProps.children && 
    prevProps.message === nextProps.message
  );
});