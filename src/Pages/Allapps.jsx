import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import Finalapps from '../Component/Finalapps';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import appNotFound from '../assets/App-Error.png';

const Allapps = () => {
  const allData = useLoaderData();
  const [search, setSearch] = useState('');
  const [searchApps, setSearchApps] = useState(allData);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      const searchFilter = search.trim().toLocaleLowerCase();
      const filtered = searchFilter
        ? allData.filter(apps =>
            apps.title.toLocaleLowerCase().includes(searchFilter)
          )
        : allData;

      setSearchApps(filtered);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [search, allData]);

  return (
    <>
      <Navbar></Navbar>
      <div className="my-4 text-center">
        <h1 className="font-semibold text-4xl">Our All Applications</h1>
        <p className="text-[#627382]">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="px-5 flex justify-between items-center">
        <h1 className="text-2xl font-semibold">
          ({searchApps.length}) Apps Found
        </h1>

        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            type="search"
            required
            placeholder="Search"
          />
        </label>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center my-20">
          {/* DaisyUI loading spinner */}
          <span className="loading loading-spinner text-primary text-4xl"></span>
          <p className="mt-3 text-gray-600">Searching apps...</p>
        </div>
      ) : searchApps.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-5">
          {searchApps.map(data => (
            <Finalapps key={data.id} data={data}></Finalapps>
          ))}
        </div>
      ) : (
        <div className="text-center mt-20 mb-10">
          <img
            src={appNotFound}
            alt="No results"
            className="mx-auto w-48 mb-4 opacity-80"
          />
          <h2 className="text-2xl font-medium text-gray-600">
            OPPS!! APP NOT FOUND “{search}”
          </h2>
          <p className="text-gray-500">
            The App you are requesting is not found on our system. please try
            another apps
          </p>
          <Link
            to="/"
            className="btn bg-[linear-gradient(125deg,#632EE3,#9F62F2)] text-white mt-4"
          >
            Go Back
          </Link>
        </div>
      )}
      <Footer></Footer>
    </>
  );
};

export default Allapps;
