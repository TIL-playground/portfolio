import React, { useMemo, memo } from 'react';
import { Toast } from '../../style';
import { useIntersectionObserver } from './useIntersectionObserver';
import { DATA_ATTRIBUTE } from './constants';

const ToastObserver = ({ children, message }) => {
  const showToast = useIntersectionObserver();
  const memoizedChildren = useMemo(() => children, [children]);

  return (
    <div {...{ [DATA_ATTRIBUTE]: '' }}>
      {memoizedChildren}
      {showToast && <Toast>{message}</Toast>}
    </div>
  );
};

export default memo(ToastObserver);
