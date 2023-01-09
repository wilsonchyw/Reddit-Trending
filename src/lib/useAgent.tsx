import { useEffect, useState } from 'react';
const mobileAgents = [/Android/i, /webOS/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i];

/**
 * Custom hook that determines if the user's device is a mobile device.
 * @returns {Boolean} - True if the device is a mobile device, false otherwise.
 */
function useAgent() {
    const [isMobile, setIsMobile] = useState<Boolean>(false);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const result = mobileAgents.some(agent => {
                return navigator.userAgent.match(agent);
            });
            setIsMobile(result);
        }
    }, []);
    return isMobile;
}

export default useAgent;
