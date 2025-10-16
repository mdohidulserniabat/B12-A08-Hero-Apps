import React from 'react';
import errorImg from '../assets/error-404.png';
import { Link } from 'react-router';
const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center h-screen">
      <img src={errorImg} alt="" />
      <h1 className="text-5xl font-semibold">Oops, page not found!</h1>
      <p className="mt-2">The page you are looking for is not available.</p>
      <Link
        to="/"
        className="btn bg-[linear-gradient(125deg,#632EE3,#9F62F2)] text-white mt-4"
      >
        Go Back
      </Link>
    </div>
  );
};

export default Error;
