import { useState, useEffect } from "react";

export const CookieConsent = () => {
    const [showConsent, setShowConsent] = useState();


    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");

        if (consent === "accepted") {
            setShowConsent(false);
        } else if (consent === "declined") {
            setShowConsent(false);
        } else {
            setShowConsent(true);
        }
    } , []);

    const handleAccept = () => {

        localStorage.setItem("cookie-consent", "accepted");
        setShowConsent(false);
    }

    const handleDecline = () => {
        localStorage.setItem("cookie-consent", "declined");
        setShowConsent(false);
    }

    if (!showConsent) return;

    return (
        <div className="cookie-consent">
            <p>We use cookies to enhance your experience. Do you accept?</p>
            <p>Purpose, gather information from google analytics</p>
            <button onClick={handleAccept}>Accept</button>
            <button onClick={handleDecline}>Decline</button>
        </div>
    )
};