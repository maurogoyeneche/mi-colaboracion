"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaMapMarkedAlt } from "react-icons/fa"; // Importa el ícono de mapa

const LazyIframe = ({
  src,
  title,
  ...props
}: {
  src: string;
  title: string;
}) => {
  const iframeRef = useRef<HTMLDivElement | null>(null);
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
        rootMargin: "100px", // Load the iframe 100px before it enters the viewport
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
      {isLoaded ? (
        <iframe
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full border-0 rounded-lg"
          referrerPolicy="no-referrer-when-downgrade"
          src={src}
          title={title}
          {...props}
        />
      ) : (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-200 animate-pulse rounded-lg">
          <FaMapMarkedAlt className="text-gray-400 text-6xl" />
        </div>
      )}
    </div>
  );
};

export default LazyIframe;
