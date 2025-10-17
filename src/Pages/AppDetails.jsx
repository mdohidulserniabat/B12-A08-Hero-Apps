import React from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import detailsImg from '../assets/image 5.png';
import downloadImg from '../assets/icon-downloads.png';
import reviewImg from '../assets/icon-review.png';
import ratingImg from '../assets/icon-ratings.png';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: '5 star', value: 11500 },
  { name: '4 star', value: 7000 },
  { name: '3 star', value: 3500 },
  { name: '2 star', value: 2200 },
  { name: '1 star', value: 1200 },
];

const AppDetails = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="grid grid-cols-12 gap-4 items-center">
        <div className="col-span-3">
          <img src={detailsImg} alt="" />
        </div>
        <div className="col-span-9">
          <h1 className=" text-3xl font-bold">
            SmPlan:ToDo List with Reminder
          </h1>
          <p className="pb-6">
            Developed by <span className="text-[#844bec]">productive.io</span>
          </p>
          <hr className="text-gray-300" />
          <div className="flex items-center gap-4 mt-3">
            <div>
              <img src={downloadImg} alt="" />
              <p>Downloads</p>
              <h1 className="text-3xl font-bold">80M</h1>
            </div>
            <div>
              <img src={ratingImg} alt="" />
              <p>Average Ratings</p>
              <h1 className="text-3xl font-bold">4.9</h1>
            </div>
            <div>
              <img src={reviewImg} alt="" />
              <p>Total Reviews</p>
              <h1 className="text-3xl font-bold">54K</h1>
            </div>
          </div>
          <button className="btn btn-wide mt-3 bg-[#00D390]">
            Install Now (291 MB)
          </button>
        </div>
      </div>
      <div>
        <hr className="text-gray-300" />
        <h1 className="font-semibold">Rating</h1>

        <ResponsiveContainer width="100%" height={250}>
          <BarChart
            data={data}
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
        <p>
          This focus app takes the proven Pomodoro technique and makes it even
          more practical for modern lifestyles. Instead of just setting a timer,
          it builds a complete environment for deep work, minimizing
          distractions and maximizing concentration. Users can create custom
          work and break intervals, track how many sessions they complete each
          day, and review detailed statistics about their focus habits over
          time. The design is minimal and calming, reducing cognitive load so
          you can focus entirely on the task at hand. Notifications gently let
          you know when to pause and when to resume, helping you maintain a
          healthy rhythm between work and rest. A unique feature of this app is
          the integration of task lists with timers. You can assign each task to
          a specific Pomodoro session, making your schedule more structured. The
          built-in analytics show not only how much time you’ve worked but also
          which tasks consumed the most energy. This allows you to reflect on
          your efficiency and adjust your workflow accordingly. The app also
          includes optional background sounds such as white noise, nature
          sounds, or instrumental music to create a distraction-free atmosphere.
          For people who struggle with procrastination, the app provides
          motivational streaks and achievements. Completing multiple Pomodoro
          sessions unlocks milestones, giving a sense of accomplishment. This
          gamified approach makes focusing more engaging and less like a chore.
          Whether you’re studying for exams, coding, writing, or handling office
          work, the app adapts to your routine. By combining focus tracking,
          task management, and motivational tools, this Pomodoro app ensures
          that you not only work harder but also smarter. It is a personal
          trainer for your brain, keeping you disciplined, refreshed, and
          productive throughout the day.
        </p>
      </div>
      <Footer></Footer>
    </>
  );
};

export default AppDetails;
