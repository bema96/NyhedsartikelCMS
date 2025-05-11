import  ReactGA  from 'react-ga4';
import { useEffect } from 'react';

export const Analytics = () => {

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        // Check if the user has given consent for cookies

        if ( consent === "accepted" ) {

            ReactGA.initialize('G-PVLYFG5WEN'); 
            ReactGA.send({
                hitType: "pageview",})

        }
    }, []);
    
    return null;
};