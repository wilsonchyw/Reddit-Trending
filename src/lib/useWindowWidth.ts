import { useState, useEffect } from 'react';
export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

function useWindowWidth(): Breakpoint {
    const [breakpoint, setBreakpoint] = useState<Breakpoint>('lg');

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            //if (width < 576) {
            //    setBreakpoint('xs');
            if (width < 768) {
                setBreakpoint('sm');
            } else if (width < 992) {
                setBreakpoint('md');
            } else if (width < 1200) {
                setBreakpoint('lg');
            } else {
                setBreakpoint('xl');
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return breakpoint;
}

export default useWindowWidth;
