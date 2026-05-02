import { useState, useEffect } from 'react';

const getBreakpoint = () => {
    if (typeof window === 'undefined') return undefined;
    const width = window.innerWidth;
    if (width >= 1536) return '2xl';
    if (width >= 1280) return 'xl';
    if (width >= 1024) return 'lg';
    if (width >= 768) return 'md';
    return 'sm';
}

export const useBreakpoint = () => {
    const [breakpoint, setBreakpoint] = useState(getBreakpoint);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const onResize = () => setBreakpoint(getBreakpoint());
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    return breakpoint;
}
