import React from 'react';
import Logo from '../assets/logo.png';
import { Link } from 'react-router';
// import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
      <aside>
        <img src={Logo} alt="" className="h-10" />
        <p>
          HERO.IO.
          <br />
          Providing reliable tech since 1992
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Pages</h6>
        <Link className="link link-hover">Home</Link>
        <Link className="link link-hover">Apps</Link>
        <Link className="link link-hover">Installation</Link>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <Link className="link link-hover">About us</Link>
        <Link className="link link-hover">Contact</Link>
        <Link clLinkssName="link link-hover">Jobs</Link>
        <Link className="link link-hover">Press kit</Link>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <Link className="link link-hover">Terms of use</Link>
        <Link className="link link-hover">Privacy policy</Link>
        <Link clLinkssName="link link-hover">Cookie policy</Link>
      </nav>
    </footer>
  );
};

export default Footer;
