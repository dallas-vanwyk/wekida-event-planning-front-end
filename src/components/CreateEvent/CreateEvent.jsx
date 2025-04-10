import React from "react";

const CreateEvent = () => {
  return (
    <div className="mx-8 mt-4">
      <div className="flex justify-between">
        <h2 className="font-bold">Create an Event</h2>
        <div>
          <button className="bg-[#D9D9D9] py-2 px-4 rounded mr-4">Clear All Information</button>
          <button className="bg-[#3758F9] text-white py-2 px-4 rounded">Preview Event Invite</button>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
