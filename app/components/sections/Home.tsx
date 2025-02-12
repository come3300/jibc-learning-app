'use client'

import React from 'react'
import LoginForm from '@/app/components/page-parts/login'

const Home = () => {

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
      <div className="mx-auto flex max-w-screen-lg flex-col items-center text-center">
        <h1 className="mb-8 text-3xl font-bold text-black sm:text-4xl md:mb-12 md:text-5xl">offline</h1>
        <div className="mt-12 w-full">
          <LoginForm />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Home