import React, { useEffect, useRef, useState } from 'react';

const getInitialTransform = (animation, direction, distance) => {
  switch (animation) {
    case 'slide':
    case 'fade': {
      const x = direction === 'left' ? -distance : direction === 'right' ? distance : 0;
      const y = direction === 'up' ? distance : direction === 'down' ? -distance : 0;
      return `translate3d(${x}px, ${y}px, 0)`;
    }
    case 'scale':
      return 'scale(0.85)';
    case 'rotate':
      return `rotate(${direction === 'left' ? -10 : 10}deg)`;
    case 'flip': {
      const axis = direction === 'up' || direction === 'down' ? 'X' : 'Y';
      const deg = direction === 'down' || direction === 'right' ? 90 : -90;
      return `rotate${axis}(${deg}deg)`;
    }
    default:
      return 'translate3d(0, 20px, 0)';
  }
};

const ScrollReveal = ({
  children,
  animation = 'fade',
  direction = 'up',
  duration = 0.7,
  delay = 0,
  distance = 40,
  threshold = 0.15,
  once = true,
  className = '',
}) => {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Fallback: if IntersectionObserver unavailable, just show immediately
    if (typeof IntersectionObserver === 'undefined') {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setRevealed(false);
          }
        });
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  const initialTransform = getInitialTransform(animation, direction, distance);

  const style = {
    opacity: revealed ? 1 : 0,
    transform: revealed ? 'translate3d(0,0,0) scale(1) rotate(0)' : initialTransform,
    transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`,
    willChange: 'opacity, transform',
  };

  return (
    <div ref={ref} className={`scroll-reveal ${className}`} style={style}>
      {children}
    </div>
  );
};

export default ScrollReveal;
