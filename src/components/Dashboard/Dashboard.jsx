// src/components/Dashboard/Dashboard.jsx

import { useState } from "react";
import { Link } from "react-router";

const Dashboard = () => {
  const [events, setEvents] = useState([1]);

  return (
    <div className="mx-8 mt-8">
      <div className="bg-[#E7F6FF] p-6 rounded-2xl">
        <h2 className="text-[#3758F9] text-2xl font-bold">Your Ultimate Event Planning Companion</h2>
        <p className="font-bold mt-8">Create and Manage</p>
        <p className="mt-4 mb-8">
          Whether you're organizing a small gathering or a grand celebration, Wekida is here to make your planning
          process seamless and enjoyable.
        </p>
        <Link to="/events/create" className="px-6 py-2 bg-[#3758F9] rounded text-white">
          Add an Event
        </Link>
      </div>

      {/* (dallas note) turn the 'upcoming events' section into an array */}
      {/* 'event card' is another React component to make */}
      {events.length === 0 ? (
        <div className="border-l-[#3758F9] border-l-[4px] px-4 mt-12">
          <h2 className="font-bold text-xl">No Events</h2>
          <p>Your event calendar is a blank canvas.</p>
        </div>
      ) : (
        <>
          <div className="border-l-[#3758F9] border-l-[4px] px-4 mt-12">
            <h2 className="font-bold text-xl">Upcoming Events</h2>
            <p>Click on individual events for more information.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">

            {/* event card 1 */}
            <div className="shadow-md hover:shadow-lg rounded-md p-4">
              <p className="font-bold text-xl">Baby Shower</p>
              <p className="text-gray-700 mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quae minima praesentium iste soluta
                sed dolore nam ad adipisci sapiente.
              </p>
              <Link to="/" className="mt-8 block">
                See Event Overview <i className="fa-solid fa-circle-arrow-right text-lg ml-2"></i>
              </Link>
              <Link to="/" className="text-gray-500 mt-6 block">
                Cancel Event <i className="fa-solid fa-trash text-lg ml-2"></i>
              </Link>
            </div>

            {/* event card 2 */}
            <div className="shadow-md hover:shadow-lg rounded-md p-4">
              <p className="font-bold text-xl">Baby Shower</p>
              <p className="text-gray-700 mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quae minima praesentium iste soluta
                sed dolore nam ad adipisci sapiente.
              </p>
              <Link to="/" className="mt-8 block">
                See Event Overview <i className="fa-solid fa-circle-arrow-right text-lg ml-2"></i>
              </Link>
              <Link to="/" className="text-gray-500 mt-6 block">
                Cancel Event <i className="fa-solid fa-trash text-lg ml-2"></i>
              </Link>
            </div>

            {/* event card 3 */}
            <div className="shadow-md hover:shadow-lg rounded-md p-4">
              <p className="font-bold text-xl">Baby Shower</p>
              <p className="text-gray-700 mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quae minima praesentium iste soluta
                sed dolore nam ad adipisci sapiente.
              </p>
              <Link to="/" className="mt-8 block">
                See Event Overview <i className="fa-solid fa-circle-arrow-right text-lg ml-2"></i>
              </Link>
              <Link to="/" className="text-gray-500 mt-6 block">
                Cancel Event <i className="fa-solid fa-trash text-lg ml-2"></i>
              </Link>
            </div>

          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
