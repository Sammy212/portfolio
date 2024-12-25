"use client";

import React, { useState, useEffect } from 'react';
import { BiSolidToTop } from "react-icons/bi";
import './BackToTop.css';

const BackToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <>
            {
                isVisible && 
                    <button onClick={scrollToTop} className="back-to-top back-to-top-button text-lg">
                        <BiSolidToTop
                            className='text-2xl'
                        />
                    </button>
            }
        </>
    );
};

export default BackToTop;