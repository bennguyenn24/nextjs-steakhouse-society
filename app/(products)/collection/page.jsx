'use client'
import Link from "next/link";
// import steak from './public/steak.jpg'
// import pork from "./public/pork.jpg";
// import seafood from "./public/seafood.jpg";

const page = () => {
    // const categories = [
    //     {title: 'Steaks', image: '/steak.jpg', Link: '/steaks'}, 
    //     {title: 'Pork', image: '/pork.jpg', Link: '/pork'}, 
    //     {title: 'Seafood', image: '/.jpg', Link: '/seafood'} 
    // ]

        return (
            
                <div className="flex justify-center">
                  <div className="bg-white p-4 rounded-md shadow-md max-w-xs mx-2">
                    <div className="w-full h-40 bg-gray-200 mb-4 rounded-md"></div>
                    <h2 className="text-xl font-semibold mb-2">Product Title</h2>
                    <p className="text-gray-600 mb-1">Category</p>
                    <p className="text-blue-700 font-bold">Price</p>
                  </div>
                  <div className="bg-white p-4 rounded-md shadow-md max-w-xs mx-2">
                    <div className="w-full h-40 bg-gray-200 mb-4 rounded-md"></div>
                    <h2 className="text-xl font-semibold mb-2">Product Title</h2>
                    <p className="text-gray-600 mb-1">Category</p>
                    <p className="text-blue-700 font-bold">Price</p>
                  </div>
                  <div className="bg-white p-4 rounded-md shadow-md max-w-xs mx-2">
                    <div className="w-full h-40 bg-gray-200 mb-4 rounded-md"></div>
                    <h2 className="text-xl font-semibold mb-2">Product Title</h2>
                    <p className="text-gray-600 mb-1">Category</p>
                    <p className="text-blue-700 font-bold">Price</p>
                  </div>
                </div>
        )
      };

export default page;
