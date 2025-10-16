import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Finalapps from '../Component/Finalapps';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';

const Allapps = () => {
  const allData = useLoaderData();
  const [search, setSearch] = useState('');
  const searchFilter = search.trim().toLocaleLowerCase();
  const searchApps = searchFilter
    ? allData.filter(apps =>
        apps.title.toLocaleLowerCase().includes(searchFilter)
      )
    : allData;
  console.log(searchApps);
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
      <div className="grid grid-cols-4 gap-4 my-5">
        {searchApps.map(data => (
          <Finalapps key={data.id} data={data}></Finalapps>
        ))}
      </div>
      <Footer></Footer>
    </>
  );
};

export default Allapps;
