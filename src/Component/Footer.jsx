import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="flex justify-between">
      <div className="flex items-center">
        <img src={logo} alt="" className="h-12" />
        <h4>HERO.IO</h4>
      </div>
      <div>
        <h1>Social Links</h1>
        <Link to="/about">Dashboard</Link>;
      </div>
    </footer>
  );
};

export default Footer;
