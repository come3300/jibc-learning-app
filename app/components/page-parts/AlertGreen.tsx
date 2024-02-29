import React from 'react';

const AlertGreen = () => {
  return (
//     <div>
//     <div className="border border-sky-400 border-2 rounded p-3 pt-6 bg-sky-200 relative my-2">
//      <div className="absolute left-0 top-0 px-2 bg-sky-400 font-semibold text-gray-800 rounded-br text-sm">INFO:</div>
//      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, rerum atque. Placeat totam unde quam voluptates facere neque, nam sint doloribus, eum error doloremque assumenda. Sint deserunt quidem quisquam nam?
//  </div>
//  <div className="border border-yellow-400 border-2 rounded p-3 pt-6 bg-yellow-100 relative my-2">
//     <div className="absolute left-0 top-0 px-2 bg-yellow-400 font-semibold text-gray-800 rounded-br text-sm">WARNING:</div>
//     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, rerum atque. Placeat totam unde quam voluptates facere neque, nam sint doloribus, eum error doloremque assumenda. Sint deserunt quidem quisquam nam?
// </div>
// <div className="border border-red-400 border-2 rounded p-3 pt-6 bg-red-100 relative my-2">
//     <div className="absolute left-0 top-0 px-2 bg-red-400 font-semibold text-gray-800 rounded-br text-sm">OOPS:</div>
//     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, rerum atque. Placeat totam unde quam voluptates facere neque, nam sint doloribus, eum error doloremque assumenda. Sint deserunt quidem quisquam nam?
// </div>
// </div>


    <div role="alert" className="rounded-xl border border-gray-100 bg-white p-4">
    <div className="flex items-start gap-4">
      <span className="text-green-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </span>
  
      <div className="flex-1">
        <strong className="block font-medium text-gray-900"> Changes saved </strong>
  
        <p className="mt-1 text-sm text-gray-700">Your product changes have been saved.</p>
      </div>
  
      <button className="text-gray-500 transition hover:text-gray-600">
        <span className="sr-only">Dismiss popup</span>
  
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </div>
  );
};

export default AlertGreen;

