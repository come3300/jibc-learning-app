import SignupButton from '@/app/components/button/SignupButton';
import HomeSection from '@/app/components/sections/Home';
import React from 'react';

const Home = async () => {
  return (
    <div>
      <div className="text-center"></div>
      <HomeSection />
      <SignupButton />
    </div>
  );
};

export default Home;
