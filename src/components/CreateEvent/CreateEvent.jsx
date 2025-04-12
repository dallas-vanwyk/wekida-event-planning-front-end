import React from "react";

const CreateEvent = () => {
  return (
    <div className="mx-8 mt-4">
      {/* First Section */}
      <div className="flex justify-between">
        <h2 className="font-bold">Create an Event</h2>
        <div>
          <button className="bg-[#D9D9D9] py-2 px-4 rounded mr-4">Clear All Information</button>
          <button className="bg-[#3758F9] text-white py-2 px-4 rounded">Preview Event Invite</button>
        </div>
      </div>

      {/* Category Image Background Section */}
      <div className="h-36 bg-[#E7F6FF] mt-8 flex justify-center items-center rounded-2xl">
        <span className="material-symbols-outlined text-[#3758F9]">photo</span>
      </div>

      {/* Form Section */}
      <div className="grid grid-cols-3 gap-4 mt-8">
        <div className="">
          <p className="font-bold">General Info</p>
          <div className="mt-4">
            <label htmlFor="" className="block">
              Event Title
            </label>
            <input
              type="text"
              name="event-title"
              id=""
              className="my-2 border border-gray-200 px-3 py-2 rounded-md w-50"
              placeholder="Enter event title"
            />
          </div>
        </div>
        <div className="">
          <p className="font-bold">Event Timing</p>
          <div className="grid grid-cols-2 mt-4">
            <div>
              <label htmlFor="event-timing" className="block">
                Start Date
              </label>
              <input
                type="text"
                name="event-timing"
                id="event-timing"
                className="my-2 border border-gray-200 px-3 py-2 rounded-md"
                placeholder="MM/DD/YYYY"
              />
            </div>
            <div>
              <label htmlFor="event-timing">End Date</label>
              <input
                type="text"
                name="event-timing"
                id="event-timing"
                className="my-2 border border-gray-200 px-3 py-2 rounded-md"
                placeholder="MM/DD/YYYY"
              />
            </div>
          </div>
        </div>
        <div className="">
          <p className="font-bold">Location</p>
          <div className="mt-4">
            <label htmlFor="address" className="block">
              Address
            </label>
            <input
              type="text"
              name="event-address"
              id="address"
              className="my-2 border border-gray-200 px-3 py-2 rounded-md"
              placeholder="Address"
            />
          </div>
        </div>
        <div className="mt-4">
          <div>
            <label htmlFor="category" className="block">
              Category
            </label>
            <select name="" id="category" className="my-2 border border-gray-200 px-3 py-2 rounded-md">
              <option value="">Wedding</option>
              <option value="">Baby Shower</option>
              <option value="">Graduation Party</option>
              <option value="">Conference</option>
              <option value="">Arts & Entertainment</option>
              <option value="">Sports</option>
            </select>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 mt-4">
            <div>
              <label htmlFor="event-timing" className="block">
                Start Time
              </label>
              <input
                type="text"
                name="event-timing"
                id="event-timing"
                className="my-2 border border-gray-200 px-3 py-2 rounded-md"
                placeholder="HH:MM AM/PM"
              />
            </div>
            <div>
              <label htmlFor="event-timing">End Time</label>
              <input
                type="text"
                name="event-timing"
                id="event-timing"
                className="my-2 border border-gray-200 px-3 py-2 rounded-md"
                placeholder="HH:MM AM/PM"
              />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div>
            <label htmlFor="address" className="block">
              Hosted By
            </label>
            <input
              type="text"
              name="event-address"
              id="address"
              className="my-2 border border-gray-200 px-3 py-2 rounded-md"
              placeholder="Enter organizer's name"
            />
          </div>
        </div>
        <div className="mt-4">
          <div>
            <label htmlFor="" className="block">
              Event Description
            </label>
            <textarea
              name="event-description"
              id="description"
              className="my-2 border border-gray-200 px-3 py-2 rounded-md"
              placeholder="Write your event description here..."
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
