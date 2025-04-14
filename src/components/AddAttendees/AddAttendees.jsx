// src/components/AddAttendees/AddAttendees.jsx

import { useState } from "react";
import Attendee from "../Attendee/Attendee";

// this component is used in CreateEvent

const Attendees = () => {
  const [attendees, setAttendees] = useState([]);
  const [attendee, setAttendee] = useState("");

  const handleAddAttendee = () => {
    if (attendee.trim() !== "") {
      setAttendees([...attendees, attendee]);
      setAttendee("");
    }
  };

  const handleDelete = (index) => {
    const newAttendees = attendees.filter((_, i) => i !== index);
    setAttendees(newAttendees);
  };

  const handleClearAllAttendees = () => {
    setAttendees([]);
  };

  return (
    <>
      <div className="my-8">
        <p className="font-bold">Attendees</p>
      </div>
      <div>
        <label className="block">Name of Attendee</label>
        <input
          type="text"
          className="my-2 border border-gray-200 px-3 py-2 rounded-md w-75"
          placeholder="Enter attendee name e.g. John Doe"
          value={attendee}
          onChange={(e) => setAttendee(e.target.value)}
        />
        <button onClick={() => handleAddAttendee()} className="bg-[#3758F9] text-white py-2 px-4 rounded ml-4">
          Add Attendee
        </button>
      </div>
      {attendees.length > 0 && (
        <div className="my-4">
          <div className="flex justify-between items-center mb-4">
            <p className="font-bold">List of Attendees</p>
            {/* Clear All Attendees Button is missing the backend API call - it will need to be implemented */}
            <button
              onClick={() => handleClearAllAttendees()}
              className="bg-[#D9D9D9] py-2 px-4 rounded mr-4 cursor-pointer"
            >
              Clear All Attendees
            </button>
          </div>
          <div className="my-2">
            {attendees.map((attendee, i) => (
              <Attendee key={i} attendee={attendee} index={i} handleDelete={handleDelete} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Attendees;
