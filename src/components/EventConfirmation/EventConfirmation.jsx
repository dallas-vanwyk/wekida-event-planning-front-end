// src/components/EventConfirmation/EventConfirmation.jsx

import React from "react";
import { Link, useParams } from "react-router";

const EventConfirmation = () => {
  const { id } = useParams(); // Get the event ID from the URL

  return (
    <div className="relative" style={{ height: "95vh" }}>
      {/* Banner Image Background */}
      <div
        aria-label="Background image of baby toys, clothes, with opacity applied"
        className="absolute inset-0 bg-center bg-cover opacity-10 background-banner"
      ></div>

      {/* Content Section */}
      <div className="relative p-8">
        <p className="font-bold text-4xl">Welcome Event Name</p>

        <div className="" style={{ height: "50vh" }}>
          <div className="flex flex-col items-center justify-center h-full">
            <i class="fa-regular fa-circle-check text-6xl text-green-600"></i>
            <p className="font-bold text-3xl mt-8">All set for a memorable event!</p>
            <p className="mt-4">Your invitation has been sent to n guests!</p>
            <div className="mt-8">
              <Link to={`/events/preview/${id}`} className="bg-[#D9D9D9] py-2 px-4 rounded mr-4">
                See Event Overview
              </Link>
              <Link to="/" className="bg-[#3758F9] text-white py-2 px-4 rounded">
                Return to Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventConfirmation;
