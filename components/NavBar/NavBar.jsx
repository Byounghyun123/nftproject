import React from 'react';
import Style from './NavBar.module.css';
import { useRouter } from 'next/router';

const NavBar = () => {
    const router = useRouter();
    return (
        <div className={Style.NavBar}>
            <div className={Style.NavBar_box}>
                <p onClick={() => router.push('/about')}>About Us</p>
                <p onClick={() => router.push('/collections')}>Collections</p>
                <p onClick={() => router.push('/contactus')}>Contact Us</p>
            </div>
        </div>
    )
};

export default NavBar;