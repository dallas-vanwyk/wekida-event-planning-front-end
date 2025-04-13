import React from "react";

const PreviewEvent = () => {
  return (
    <div className="mx-8 mt-4">
      {/* First Section */}
      <div className="flex justify-between">
        <h2 className="font-bold text-2xl">Preview Event Invite</h2>
        <div>
          <button className="bg-[#D9D9D9] py-2 px-4 rounded mr-4">Edit Event</button>
          <button className="bg-[#3758F9] text-white py-2 px-4 rounded">Send Invitation</button>
        </div>
      </div>

      {/* Category Image Background Section */}
      <div className="h-36 bg-[#E7F6FF] mt-8 flex justify-center items-center rounded-2xl">
        <i class="fa-solid fa-image"></i>
      </div>

      {/* Form Section */}
      <div className="grid grid-cols-3 gap-4 my-8">
        <div className="">
          <p className="font-bold">General Info</p>
          <div className="mt-4">
            <p>Event Title</p>
            <p>Welcome Baby Smith!</p>
          </div>
        </div>
        <div className="">
          <p className="font-bold">Event Timing</p>
          <div className="grid grid-cols-2 mt-4">
            <div>
              <p>Start Date</p>
              <p>04/09/2024</p>
            </div>
            <div>
              <p>End Date</p>
              <p>04/09/2024</p>
            </div>
          </div>
        </div>
        <div className="">
          <p className="font-bold">Location</p>
          <div className="mt-4">
            <p>Address</p>
            <p>Lorem Epsum</p>
          </div>
        </div>
        <div className="mt-4">
          <div>
            <p>Category</p>
            <p>Baby Shower</p>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 mt-4">
            <div>
              <p htmlFor="event-start-time" className="block">
                Start Time
              </p>
              <p>1:00 PM</p>
            </div>
            <div>
              <p>End Time</p>
              <p>4:00 PM</p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div>
            <p>Hosted By</p>
            <p>John Doe</p>
          </div>
        </div>
        <div className="mt-4">
          <div>
            <p>Event Description</p>
            <p>
              Join us for a joyous celebration as we welcome the newest member of the Smith family! Enjoy food, fun, and
              festivities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewEvent;
