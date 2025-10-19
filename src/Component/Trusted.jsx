import React from 'react';

const Trusted = () => {
  return (
    <div className="bg-[#6a34e5] text-white text-center py-8">
      <h1 className="text-4xl mb-3">Trusted by Millions, Built for You</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center text-center">
        <div>
          <p className="opacity-75">Total Downloads</p>
          <h1 className="text-6xl font-bold">29.6M</h1>
          <p className="opacity-75">21% more than last month</p>
        </div>
        <div>
          <p className="opacity-75"> Total Reviews</p>
          <h1 className="text-6xl font-bold">906K</h1>
          <p className="opacity-75">46% more than last month</p>
        </div>
        <div>
          <p className="opacity-75">Active Apps</p>
          <h1 className="text-6xl font-bold">132+</h1>
          <p className="opacity-75">31 more will Launch</p>
        </div>
      </div>
    </div>
  );
};

export default Trusted;
