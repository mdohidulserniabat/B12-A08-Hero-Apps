import React from 'react';
import Apps from '../Pages/Apps';
import { Link } from 'react-router';

const Trendingapp = ({ datas }) => {
  const finalData = datas.slice(0, 8);
  return (
    <div className="text-center my-6">
      <h1 className="text-4xl font-bold ">Trending Apps</h1>
      <p className="font-bold opacity-75">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="grid grid-cols-4 gap-5">
        {finalData.map(data => (
          <Apps key={data.id} data={data}></Apps>
        ))}
      </div>
      <Link
        to="/apps"
        className="btn bg-[linear-gradient(125deg,#632EE3,#9F62F2)] text-white mt-4"
      >
        Show All
      </Link>
    </div>
  );
};

export default Trendingapp;
