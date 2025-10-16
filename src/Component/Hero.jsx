import React from 'react';
import playLogo from '../assets/fi_16076057.png';
import appStoreLogo from '../assets/fi_5977575.png';
import heroImage from '../assets/hero.png';
import { Link } from 'react-router';

const Hero = () => {
  return (
    <div>
      <h2 className="text-5xl font-bold text-center">
        We Build <br /> <span className="text-[#6a6af0]">Productive</span> Apps
      </h2>
      <p className="text-center mt-3">
        AtHERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting <br />
        .Our goal is to turn your ideas into digital experiences that truly make
        an impact.
      </p>
      <div className="flex gap-4 items-center justify-center mt-5">
        <Link
          to="/about"
          className="border border-gray-200 px-4 py-2 flex rounded-lg"
        >
          <img src={playLogo} alt="" />
          Google Play
        </Link>
        <Link
          to="/about"
          className="border border-gray-200 px-4 py-2 flex rounded-lg"
        >
          <img src={appStoreLogo} alt="" />
          App Store
        </Link>
      </div>
      {/* Hero Image section */}
      <div className="flex justify-center mt-4">
        <img src={heroImage} alt="" />
      </div>
    </div>
  );
};

export default Hero;
