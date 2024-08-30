import React from 'react';
import Head from 'next/head';

// INTERNAL IMPORT
import Style from '../styles/index.module.css';
import {
  HeroSection,
} from '../components/componentsindex';

const Home = () => {
  return (
    <div className={Style.HomePage}>
      <Head>
        <title>SØCIAL ENEMIES.</title>
        <link rel="icon" href="/nft1.png" />
      </Head>
      <HeroSection />
    </div>
  );
};

export default Home;