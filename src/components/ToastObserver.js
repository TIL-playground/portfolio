import React, { useRef, useState, useCallback, useEffect } from 'react';
import Toast from '../style/Styled';

const useSingleIntersectionObserver = (callback, options) => {
  const observerRef = useRef(null);
  const elementRef = useRef(null);

  useEffect(() => {
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(callback, options);
    }

    const currentElement = elementRef.current;
    if (currentElement && observerRef.current) {
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
  }, [callback, options]);

  const observeElement = useCallback((element) => {
    if (element) {
      elementRef.current = element;
    }
  }, []);

  return { observeElement };
};

const ToastObserver = ({ children, message }) => {
  const [showToast, setShowToast] = useState(false);
  
  const { observeElement } = useSingleIntersectionObserver(
    useCallback(([entry]) => {
      if (entry.isIntersecting) {
        setShowToast(true);
      }
    }, []),
    { threshold: 0.1 }
  );

  return (
    <div ref={observeElement}>
      {children}
      {showToast && <Toast>{message}</Toast>}
    </div>
  );
};

export default React.memo(ToastObserver);