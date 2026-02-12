import { useState, useEffect } from 'react';

const ImageWithFallback = ({ src, alt, className, style, ...props }) => {
    const [imgSrc, setImgSrc] = useState(src);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        setImgSrc(src);
        setHasError(false);
    }, [src]);

    const onError = () => {
        if (!hasError) {
            setHasError(true);
            // Fallback to a reliable placeholder service with a dark theme style
            setImgSrc(`https://placehold.co/1200x800/101827/eab308?text=${encodeURIComponent(alt || 'Image Unavailable')}`);
        }
    };

    return (
        <img
            src={imgSrc}
            alt={alt || "Image"}
            className={className}
            style={style}
            onError={onError}
            {...props}
        />
    );
};

export default ImageWithFallback;
