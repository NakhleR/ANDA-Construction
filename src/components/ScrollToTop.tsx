import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop is a component that scrolls the window to the top
 * whenever the route changes. It should be placed inside the Router component
 * in the component tree.
 */
export function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // Scroll to top on route change
        window.scrollTo(0, 0);
    }, [pathname]);

    return null; // This component doesn't render anything
}

export default ScrollToTop; 