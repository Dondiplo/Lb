import React, { useEffect, useRef } from 'react';

const RevealHeading = ({ children }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0.5s';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <h1 ref={textRef} className="text-white overflow-hidden text-[14px] absolute  text-xl font-light">
      {children}
    </h1>
  );
};

export default RevealHeading;
