// src/components/EventConfirmation/EventConfirmation.jsx

import React from "react";
import { Link } from "react-router";

const EventConfirmation = () => {
  return (
    <div className="relative" style={{ height: "95vh" }}>

      {/* Banner Image Background */}
      <div className="absolute inset-0 bg-center bg-cover opacity-10 background-banner"></div>
      
      {/* Content Section */}
      <div className="relative p-8">

        <p className="font-bold text-4xl">Welcome Event Name</p>

        <div className="" style={{ height: "50vh" }}>
          <div className="flex flex-col items-center justify-center h-full">
            <i class="fa-regular fa-circle-check text-6xl text-green-600"></i>
            <p className="font-bold text-3xl mt-8">All set for a memorable event!</p>
            <p className="mt-4">Your invitation has been sent to n guests!</p>
            <div className="mt-8">
              <button className="bg-[#D9D9D9] py-2 px-4 rounded mr-4">See Event Overview</button>
              <Link to="/" className="bg-[#3758F9] text-white py-2 px-4 rounded">
                Return to Dashboard
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <button className="bg-[#D9D9D9] py-2 px-4 rounded mr-4">Cancel The Event</button>
        </div>

      </div>
    </div>
  );
};

export default EventConfirmation;
