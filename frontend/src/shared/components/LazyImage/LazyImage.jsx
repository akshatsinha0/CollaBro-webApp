import React, { useState, useRef, useEffect, memo } from "react";
import PropTypes from "prop-types";
import { classNames } from "../../utils";
import styles from "./LazyImage.module.css";
const LazyImage = memo(({ src, alt, className, placeholder, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }
    return () => observer.disconnect();
  }, []);
  const handleLoad = () => {
    setIsLoaded(true);
  };
  const imageClasses = classNames(
    styles.image,
    isLoaded && styles.loaded,
    className,
  );
  return (
    <div ref={imgRef} className={styles.container}>
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={imageClasses}
          onLoad={handleLoad}
          {...props}
        />
      )}
      {!isLoaded && (
        <div className={styles.placeholder}>
          {placeholder || <div className={styles.defaultPlaceholder} />}
        </div>
      )}
    </div>
  );
});
LazyImage.displayName = "LazyImage";
LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.node,
};
export default LazyImage;
