// src/components/Attendee/Attendee.jsx

import { useState } from "react";

// this component is used in AddAttendees, in CreateEvent
const Attendee = ({ attendee, index, handleDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [attendeeName, setAttendeeName] = useState(attendee);

  return (
    <div className="flex justify-between items-center border border-gray-200 rounded-md my-2">
      {isEditing ? (
        <input
          type="text"
          className="my-2 border border-gray-200 px-3 py-2 rounded-md w-75"
          placeholder="Enter attendee name e.g. John Doe"
          value={attendeeName}
          onChange={(e) => setAttendeeName(e.target.value)}
        />
      ) : (
        <p className="my-2 px-3 py-2">{attendee}</p>
      )}

      <div className="mx-4">
        {isEditing ? (
          <i className="fa-solid fa-floppy-disk mr-4 cursor-pointer text-xl" onClick={() => setIsEditing(false)}></i>
        ) : (
          <i className="fa-solid fa-pencil mr-4 cursor-pointer text-xl" onClick={() => setIsEditing(true)}></i>
        )}

        {isEditing ? (
          <i className="fa-solid fa-xmark cursor-pointer text-xl" onClick={() => setIsEditing(false)}></i>
        ) : (
          <i className="fa-solid fa-trash cursor-pointer text-xl" onClick={() => handleDelete(index)}></i>
        )}
      </div>
    </div>
  );
};

export default Attendee;
