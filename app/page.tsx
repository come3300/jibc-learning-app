import SignupButton from '@/app/components/button/SignupButton'
import HomeSection from '@/app/components/sections/Home'
// import getCurrentUser from '@/app/actions/getCurrentUser'
import React from 'react';

// メインページ
const Home = async () => {
  // const currentUser = await getCurrentUser()

  return<div>
    {/* <div className="text-center">{currentUser ? <div>認証中</div> : <div>未認証</div>}</div> */}

   <HomeSection  />
   {/* <SignupButton /> */}
  </div> 
}

export default Home

