import React, { useState, useEffect } from 'react';
import Style from './NavBar.module.css';
import { useRouter } from 'next/router';

const NavBar = () => {
    const router = useRouter();

    const links = [
        { text: 'ABØUT', hoverText: '0xb0ut', path: '/about' },
        { text: 'CØLLECTIØNS', hoverText: '0c01x13cte4', path: '/collections' },
        { text: 'CØNTACT US', hoverText: '0xc0nt4ct2', path: '/contactus' },
    ];

    const [displayTexts, setDisplayTexts] = useState(links.map(link => link.text));
    const [isAnimating, setIsAnimating] = useState(false);

    const handleMouseEnter = (index) => {
        if (!isAnimating) {
            setIsAnimating(true);
            animateText(links[index].text, links[index].hoverText, (newText) => {
                setDisplayTexts(prev => {
                    const updatedTexts = [...prev];
                    updatedTexts[index] = newText;
                    return updatedTexts;
                });
            }, () => {
                animateText(links[index].hoverText, links[index].text, (newText) => {
                    setDisplayTexts(prev => {
                        const updatedTexts = [...prev];
                        updatedTexts[index] = newText;
                        return updatedTexts;
                    });
                    setIsAnimating(false);
                });
            });
        }
    };

    const animateText = (fromText, toText, setText, callback) => {
        let currentText = fromText.split('');
        const interval = setInterval(() => {
            let hasChanged = false;
            currentText = currentText.map((char, i) => {
                if (char !== toText[i]) {
                    hasChanged = true;
                    return Math.random() > 0.5 || char === ' ' ? toText[i] : char;
                }
                return char;
            });

            setText(currentText.join(''));

            if (!hasChanged) {
                clearInterval(interval);
                if (callback) callback();
            }
        }, 30);

        return () => clearInterval(interval);
    };

    return (
        <div className={Style.NavBar}>
            <div className={Style.NavBar_box}>
                {links.map((link, index) => (
                    <p
                        key={link.path}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onClick={() => router.push(link.path)}
                    >
                        {displayTexts[index]}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default NavBar;
