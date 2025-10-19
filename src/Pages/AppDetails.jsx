import React from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import downloadImg from '../assets/icon-downloads.png';
import reviewImg from '../assets/icon-review.png';
import ratingImg from '../assets/icon-ratings.png';
import { useLoaderData, useParams } from 'react-router';
import Swal from 'sweetalert2';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const AppDetails = () => {
  const { id } = useParams();
  const datas = useLoaderData();
  const data = datas.find(p => String(p.id) === id);
  console.log(data.id);

  const installHandeler = () => {
    const existingList = JSON.parse(localStorage.getItem('installed')) || [];
    const isDuplicate = existingList.some(p => p.id === data.id);

    if (isDuplicate) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Already Installed!',
        footer: '<a href="#">Why do I have this issue?</a>',
      });
      return;
    }

    const updatedList = [...existingList, data];
    localStorage.setItem('installed', JSON.stringify(updatedList));

    Swal.fire({
      title: 'Good job!',
      text: 'Installed Successfully !',
      icon: 'success',
    });
  };

  const {
    image,
    title,
    companyName,
    description,
    downloads,
    ratingAvg,
    reviews,
    size,
    ratings,
  } = data;

  const chartData = ratings.map(item => ({
    name: item.name,
    value: item.count,
  }));
  return (
    <>
      <Navbar></Navbar>
      <div className="grid grid-cols-12 gap-4 items-center">
        <div className="col-span-3">
          <img src={image} alt="" />
        </div>
        <div className="col-span-9">
          <h1 className=" text-3xl font-bold">{title}</h1>
          <p className="pb-6">
            Developed by <span className="text-[#844bec]">{companyName}</span>
          </p>
          <hr className="text-gray-300" />
          <div className="flex items-center gap-4 mt-3">
            <div>
              <img src={downloadImg} alt="" />
              <p>Downloads</p>
              <h1 className="text-3xl font-bold">
                {new Intl.NumberFormat('en', { notation: 'compact' }).format(
                  downloads
                )}
              </h1>
            </div>
            <div>
              <img src={ratingImg} alt="" />
              <p>Average Ratings</p>
              <h1 className="text-3xl font-bold">{ratingAvg}</h1>
            </div>
            <div>
              <img src={reviewImg} alt="" />
              <p>Total Reviews</p>
              <h1 className="text-3xl font-bold">
                {new Intl.NumberFormat('en', { notation: 'compact' }).format(
                  reviews
                )}
              </h1>
            </div>
          </div>
          <button
            onClick={installHandeler}
            className="btn btn-wide mt-3 bg-[#00D390] mb-4"
          >
            Install Now ({size})
          </button>
        </div>
      </div>
      <div>
        <hr className="text-gray-300" />
        <h1 className="font-semibold">Rating</h1>

        <ResponsiveContainer width="100%" height={250}>
          <BarChart
            data={chartData}
            layout="vertical"
            margin={{ top: 0, right: 30, left: 60, bottom: 0 }}
          >
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Bar
              dataKey="value"
              fill="#FF9800"
              barSize={25}
              radius={[4, 4, 4, 4]}
            />
          </BarChart>
        </ResponsiveContainer>
        <hr className="text-gray-300" />
      </div>

      <div>
        <h1 className="font-semibold">Description</h1>
        <p>{description}</p>
      </div>
      <Footer></Footer>
    </>
  );
};

export default AppDetails;
