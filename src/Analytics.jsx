import  ReactGA  from 'react-ga4';
import { useEffect } from 'react';

export const Analytics = () => {

    useEffect(() => {
        ReactGA.initialize('G-PVLYFG5WEN'); 
    }, []);
    
    return (

        <div>
            <p>Google Anlytics</p>
        </div>
    )
};