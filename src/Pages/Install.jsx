import React, { useEffect, useState } from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import randomImg from '../assets/demo-app (1).webp';
import { Link } from 'react-router';
import downloadImg from '../assets/icon-downloads.png';
import ratingAvgImg from '../assets/icon-ratings.png';
import Swal from 'sweetalert2';

const Install = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState('none');

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('installed')) || [];
    setInstalledApps(data);
  }, []);

  const handleUninstall = id => {
    const updated = installedApps.filter(app => app.id !== id);
    setInstalledApps(updated);
    localStorage.setItem('installed', JSON.stringify(updated));

    Swal.fire({
      title: 'Good job!',
      text: 'Uninstall Successfully !',
      icon: 'success',
    });
  };

  const sortedItem = () => {
    if (sortOrder === 'download-desc') {
      return [...installedApps].sort((a, b) => b.downloads - a.downloads);
    } else if (sortOrder === 'download-asc') {
      return [...installedApps].sort((a, b) => a.downloads - b.downloads);
    } else {
      return installedApps;
    }
  };

  return (
    <>
      <Navbar></Navbar>
      <div>
        <h1 className="text-center text-3xl font-semibold mt-5">
          Your Installed Apps
        </h1>
        <p className="text-center">
          Explore All Trending Apps on the Market developed by us
        </p>
        <div className="flex justify-between items-center mb-4">
          <h1 className="font-semibold">1 Apps Found</h1>

          <label className="form-control w-full max-w-xs">
            <select
              value={sortOrder}
              onChange={e => setSortOrder(e.target.value)}
              className="select select-bordered"
            >
              <option value="none">Sort By Size</option>
              <option value="download-desc">High-Low</option>
              <option value="download-asc">Low-High</option>
            </select>
          </label>
        </div>
        {sortedItem().map(app => (
          <div
            key={app.id}
            className="flex justify-between items-center shadow-lg p-2 my-3 border border-gray-200"
          >
            <div className="flex items-center gap-4">
              <img src={app.image} alt="" className="h-20" />
              <div>
                <h1>{app.title}</h1>
                <div className="flex gap-4">
                  <div className="flex items-center gap-1">
                    <img src={downloadImg} alt="" className="h-6" />
                    <h1>
                      {new Intl.NumberFormat('en', {
                        notation: 'compact',
                      }).format(app.downloads)}
                    </h1>
                  </div>
                  <div className="flex items-center gap-1">
                    <img src={ratingAvgImg} alt="" className="h-6" />
                    <h1 className="text-[#ff8811]">{app.ratingAvg}</h1>
                  </div>
                  <div className="flex items-center gap-1">
                    <h1>
                      {app.size}
                      <span>MB</span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button
                onClick={() => handleUninstall(app.id)}
                className="btn bg-[linear-gradient(125deg,#632EE3,#9F62F2)] text-white mt-4"
              >
                Uninstall
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer></Footer>
    </>
  );
};

export default Install;
