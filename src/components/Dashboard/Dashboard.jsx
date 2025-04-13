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
          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="border border-gray-600 rounded-md p-4">
              <p className="font-bold text-xl">Baby Shower</p>
            </div>
            <div className="border border-gray-600 rounded-md p-4">
              <p className="font-bold text-xl">Baby Shower</p>
            </div>
            <div className="border border-gray-600 rounded-md p-4">
              <p className="font-bold text-xl">Baby Shower</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
