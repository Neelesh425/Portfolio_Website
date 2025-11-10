import { useState, useEffect } from 'react';
import './index.scss';

const PageLoader = ({ children, duration = 2000 }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Prevent scrolling while loading
        document.body.style.overflow = 'hidden';
        
        const timer = setTimeout(() => {
            setIsLoading(false);
            // Re-enable scrolling
            document.body.style.overflow = 'unset';
        }, duration);

        return () => {
            clearTimeout(timer);
            // Clean up: ensure scrolling is re-enabled
            document.body.style.overflow = 'unset';
        };
    }, [duration]);

    return (
        <>
            {isLoading && (
                <div className="page-loader-wrapper">
                    <div className="loader-content">
                        <div className="custom-loader">
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                        </div>
                        <div className="loader-text"></div>
                    </div>
                </div>
            )}
            <div className={`page-content ${!isLoading ? 'fade-in' : ''}`}>
                {children}
            </div>
        </>
    );
};

export default PageLoader;