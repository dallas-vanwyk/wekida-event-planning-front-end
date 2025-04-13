import React from "react";

const AttendeesList = ({ attendees }) => {
  return (
    <>
      <div className="my-8">
        <p className="font-bold">Attendees</p>
      </div>
      <div>
        {attendees.length > 0 ? (
          <div className="my-2">
            {attendees.map((attendee, i) => (
              <div key={i} className="flex justify-between items-center mb-2">
                <p>{attendee}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No attendees added yet.</p>
        )}
      </div>
    </>
  );
};

export default AttendeesList;
