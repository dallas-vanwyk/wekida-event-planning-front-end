import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import * as userService from '../../services/userService'
import { index as fetchEvents } from '../../services/eventService'
// import { useState } from "react";
import { Link } from "react-router";
// >>>>>>> dc6a2053f797fceb450d3ff18fbc9f9a1c5272fa

const Dashboard = () => {
  
  const [events, setEvents] = useState([]);

  return (
    <div className="mx-8 mt-8">
      <div className="bg-[#E7F6FF] p-6 rounded-2xl">
        <h2 className="text-[#3758F9] text-2xl font-bold"> Hello {user.firstName}, Welcome to Your Ultimate Event Planning Companion</h2>
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
        <div className="border-l-[#3758F9] border-l-[4px] px-4 mt-12">
          <h2 className="font-bold text-xl">Upcoming Events</h2>
          <p>Click on individual events for more information.</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
