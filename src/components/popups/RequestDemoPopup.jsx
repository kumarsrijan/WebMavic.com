"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const RequestDemoPopup = ({ 
    delay = 5000,                // Delay in ms before showing popup
    storageKey = 'demoPopupDismissed', // Key for storing popup state
    cooldownPeriod = 7,          // Days before showing popup again after dismissal
    disabled = false             // Option to disable popup completely
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const router = useRouter();

    useEffect(() => {
        // Check if popup is disabled
        if (disabled) return;

        // Check if user has previously dismissed the popup
        const checkPopupDismissed = () => {
            if (typeof window === 'undefined') return true;
            
            const dismissedData = window.sessionStorage.getItem(storageKey);
            if (!dismissedData) return false;
            
            try {
                const { timestamp, dismissed } = JSON.parse(dismissedData);
                if (!dismissed) return false;
                
                // If cooldown period is set, check if it's expired
                if (cooldownPeriod > 0) {
                    const cooldownMs = cooldownPeriod * 24 * 60 * 60 * 1000;
                    if (Date.now() - timestamp > cooldownMs) {
                        return false; // Cooldown expired, show popup again
                    }
                }
                
                return true; // Popup was dismissed and still in cooldown
            } catch (e) {
                return false;
            }
        };

        // Only show popup if not previously dismissed
        if (!checkPopupDismissed()) {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, delay);

            return () => clearTimeout(timer);
        }
    }, [delay, disabled, storageKey, cooldownPeriod]);

    const closePopup = () => {
        setIsVisible(false);
        
        // Save dismissal to session storage
        if (typeof window !== 'undefined') {
            window.sessionStorage.setItem(storageKey, JSON.stringify({
                dismissed: true,
                timestamp: Date.now()
            }));
        }
    };

    const redirectToContact = () => {
        setIsVisible(false);
        
        // Mark as dismissed when user takes positive action
        if (typeof window !== 'undefined') {
            window.sessionStorage.setItem(storageKey, JSON.stringify({
                dismissed: true,
                timestamp: Date.now()
            }));
        }
        
        router.push('/contact');
    };

    // Don't render anything if not visible
    if (!isVisible) return null;

    return (
        <div className="popup-overlay" style={inlineStyles.popup_overlay} onClick={closePopup}>
            <div className="popup-content" style={inlineStyles.popup_content} onClick={(e) => e.stopPropagation()}>
                <div className="popup-close" style={inlineStyles.popup_close} onClick={closePopup}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 1L1 13M1 1L13 13" stroke="#06D889" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <h2 style={inlineStyles.title}>Request a Demo</h2>
                <p style={inlineStyles.description}>Interested in our services? Schedule a personalized demo with our team to see how we can help your business grow.</p>
                <div style={inlineStyles.buttonContainer}>
                    <button style={inlineStyles.primaryButton} onClick={redirectToContact}>Schedule Demo</button>
                    <button style={inlineStyles.secondaryButton} onClick={closePopup}>Maybe Later</button>
                </div>
            </div>
        </div>
    );
};

export default RequestDemoPopup;

const inlineStyles = {
    popup_overlay: {
        position: 'fixed',
        inset : 0,
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    },
    popup_content: {
        backgroundColor: '#1d1d1d',
        padding: '40px 35px',
        borderRadius: '5px',
        boxShadow: '0 4px 25px rgba(0, 0, 0, 0.3)',
        textAlign: 'center',
        maxWidth: '480px',
        width: '90%',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        position: 'relative',
    },
    popup_close: {
        position: 'absolute',
        top: '15px',
        right: '15px',
        cursor: 'pointer',
        height: '32px',
        width: '32px',
        borderRadius: '50%',
        background: 'rgba(255, 255, 255, 0.05)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: '0.5s',
    },
    title: {
        fontFamily: 'var(--font-saira)',
        fontWeight: '600',
        fontSize: '30px',
        color: '#ffffff',
        marginBottom: '20px',
        textTransform: 'capitalize',
    },
    description: {
        fontFamily: 'var(--font-saira)',
        fontWeight: '300',
        fontSize: '15px',
        lineHeight: '28px',
        letterSpacing: '0.03em',
        color: '#b5b5b5',
        marginBottom: '30px',
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        alignItems: 'center',
    },
    primaryButton: {
        fontFamily: 'var(--font-saira)',
        fontWeight: '600',
        fontSize: '15px',
        letterSpacing: '0.03em',
        color: '#000',
        backgroundColor: '#06D889',
        border: 'none',
        borderRadius: '5px',
        padding: '14px 32px',
        cursor: 'pointer',
        transition: '0.5s',
        width: '100%',
    },
    secondaryButton: {
        fontFamily: 'var(--font-saira)',
        fontSize: '15px',
        letterSpacing: '0.03em',
        color: '#06D889',
        backgroundColor: 'transparent',
        border: '1px solid rgba(6, 216, 137, 0.3)',
        borderRadius: '5px',
        padding: '13px 32px',
        cursor: 'pointer',
        transition: '0.5s',
        width: '100%',
    },
};