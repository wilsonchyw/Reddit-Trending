import { useEffect, useState } from 'react';
const mobileAgents = [/Android/i, /webOS/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i];

/**
 * Custom hook that determines if the user's device is a mobile device.
 * @returns {Boolean} - True if the device is a mobile device, false otherwise.
 */
function useAgent() {
    if (typeof window !== 'undefined') {
        const [isMobile, setIsMobile] = useState<boolean>(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/.test(navigator.userAgent));

        useEffect(() => {
            const handleResize = () =>
                setIsMobile(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/.test(navigator.userAgent) || window.innerWidth < 768);
            window.addEventListener('resize', handleResize);
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }, []);

        return isMobile;
    }else{
        return false
    }
    
}

export default useAgent;
