import React from 'react';
import downloadIcon from '../assets/icon-downloads.png';
import rattingsIcon from '../assets/icon-ratings.png';
const Apps = ({ data }) => {
  const { image, title, downloads, ratingAvg } = data;
  return (
    <div className="card bg-base-100  shadow-sm ml-4">
      <figure>
        <img
          src={image}
          alt="Shoes"
          className="h-50 w-full object-cover m-4 p-3 rounded-2xl"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="flex justify-between items-center">
          <h1 className="flex items-center text-[#00D390] font-bold bg-[#F1F5E8] px-3 py-1">
            <img src={downloadIcon} alt="" className="h-5" />
            {new Intl.NumberFormat('en', { notation: 'compact' }).format(
              downloads
            )}
          </h1>
          <h1 className="flex items-center text-[#FF8811] font-bold bg-[#FFF0E1] px-3 py-1">
            <img src={rattingsIcon} alt="" className="h-5" />
            {ratingAvg}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Apps;
