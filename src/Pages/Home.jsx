import React from 'react';
import Hero from '../Component/Hero';
import Trusted from '../Component/Trusted';
import Trendingapp from '../Component/Trendingapp';
import { useLoaderData } from 'react-router';

const Home = () => {
  const datas = useLoaderData();

  return (
    <>
      <Hero></Hero>
      <Trusted></Trusted>
      <Trendingapp datas={datas}></Trendingapp>
    </>
  );
};

export default Home;
