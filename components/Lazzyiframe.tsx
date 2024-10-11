"use client";
import React, { useEffect, useRef, useState } from "react";

const LazyIframe = ({
  src,
  title,
  ...props
}: {
  src: string;
  title: string;
}) => {
  const iframeRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsLoaded(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "100px", // Load the iframe 200px before it enters the viewport
      },
    );

    if (iframeRef.current) {
      observer.observe(iframeRef.current);
    }

    return () => {
      if (iframeRef.current) {
        observer.unobserve(iframeRef.current);
      }
    };
  }, []);

  return (
    <div ref={iframeRef} className="relative w-full h-0 pb-[56.25%]">
      {/* Aspect ratio 16:9 */}
      {isLoaded && (
        <iframe
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full border-0 rounded-lg"
          referrerPolicy="no-referrer-when-downgrade"
          src={src}
          title={title}
          {...props}
        />
      )}
    </div>
  );
};

export default LazyIframe;
