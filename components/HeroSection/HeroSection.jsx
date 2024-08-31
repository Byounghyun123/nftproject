import React from 'react';
import Image from 'next/image';

// INTERNAL IMPORT
import Style from './HeroSection.module.css';
import images from '../../img';

const HeroSection = () => {
  return (
    <div className={Style.HeroSection}>
      <div className={Style.HeroSection_box}>
          <div className={Style.HeroSection_text}>
            <div className={Style.HeroSection_box_title1}>
              SØCIAL
              <div className={Style.HeroSection_box_title2}>
                ENEMIES.
              </div>
            </div>
          </div>
          <div className={Style.HeroSection_box_img}>
            <Image
              src={images.nft1}
              alt='Hero section image'
              className={Style.HeroSection_box_img_img}
              width={400}
              height={500}
              layout='fixed'
            />
          </div>
      </div>
    </div>
  )
};

export default HeroSection;