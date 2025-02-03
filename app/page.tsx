import SignupButton from '@/app/components/button/SignupButton'
import HomeSection from '@/app/components/sections/Home'
import getCurrentUser from '@/app/actions/getCurrentUser'
import React from 'react';

// メインページ
const Home = async () => {
  const currentUser = await getCurrentUser()

  return<div>
    <div className="text-center">{currentUser ? <div>ログイン中</div> : <div>ログアウト</div>}</div>

   <HomeSection  />
   <SignupButton />
  </div> 
}

export default Home

