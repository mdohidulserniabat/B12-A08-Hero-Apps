import React from 'react';
import Logo from '../assets/logo.png';
import { Link } from 'react-router';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
      <aside>
        <img src={Logo} alt="" className="h-10" />
        <p>
          HERO.IO.
          <br />
          Copyright © 2025 - All right reserved
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Pages</h6>
        <Link className="link link-hover">Home</Link>
        <Link className="link link-hover">Apps</Link>
        <Link className="link link-hover">Installation</Link>
      </nav>
      {/* <nav>
        <h6 className="footer-title">Company</h6>
        <Link className="link link-hover">About us</Link>
        <Link className="link link-hover">Contact</Link>
        <Link clLinkssName="link link-hover">Jobs</Link>
        <Link className="link link-hover">Press kit</Link>
      </nav> */}
      <nav>
        <h6 className="footer-title">Social Links</h6>
        <div className="flex gap-4 text-2xl text-blue-600 justify-center mt-4">
          <Link
            to="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </Link>
          <Link
            to="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </Link>
          <Link
            to="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </Link>
          <Link
            to="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </Link>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
