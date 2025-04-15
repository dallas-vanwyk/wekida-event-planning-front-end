// src/components/CreateEvent/CreateEvent.jsx

import React, { useState } from "react";
import Attendees from "../AddAttendees/AddAttendees";
import axios from "axios"; // Import axios for API calls

const initialFormState = {
  title: "",
  startDate: "",
  endDate: "",
  startTime: "",
  endTime: "",
  category: "",
  address: "",
  hostedBy: "",
  description: "",
};

const CreateEvent = () => {
  const [formData, setFormData] = useState(initialFormState); // useState hook to store form data

  const handleClear = () => {
    setFormData(initialFormState); // resets the form to initial empty values
  };

  const handleAddEvent = async () => {
    console.log("Event Data:", formData);

    try {
      const apiUrl = import.meta.env.VITE_BACK_END_SERVER_URL;
      const response = await axios.post(`${apiUrl}/events`, formData); // POST request to create event
      console.log("Event created successfully:", response.data);
    } catch (error) {
      console.error("Error creating event:", error);
    };
  };

  return (
    <div className="mx-8 mt-4">
      {/* Page header and action buttons */}
      <div className="flex justify-between">
        <p className="font-bold text-2xl">Create an Event</p>
        <div>
          <button onClick={() => handleClear()} className="bg-[#D9D9D9] py-2 px-4 rounded mr-4">
            Clear All Information
          </button>
          <button onClick={() => handleAddEvent()} className="bg-[#3758F9] text-white py-2 px-4 rounded">
            Save & Preview Event
          </button>
        </div>
      </div>

      {/* Banner image background */}
      <div className="h-36 bg-[#E7F6FF] mt-8 flex justify-center items-center rounded-2xl">
        <i class="fa-solid fa-image"></i>
      </div>

      {/* Form section divided into three columns */}
      <div className="grid grid-cols-3 gap-4 my-8">
        {/* Event title input */}

        <div className="">
          <p className="font-bold">General Info</p>
          <div className="mt-4">
            <label htmlFor="event-title" className="block">
              Event Title
            </label>
            <input
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              type="text"
              id="event-title"
              className="my-2 border border-gray-200 px-3 py-2 rounded-md w-75"
              placeholder="Enter event title"
            />
          </div>
        </div>

        {/* Start and end date time */}
        <div className="">
          <p className="font-bold">Event Timing</p>
          <div className="grid grid-cols-2 mt-4">
            <div>
              <label htmlFor="event-start-date" className="block">
                Start Date
              </label>
              <input
                value={formData.startDate}
                onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                type="text"
                id="event-start-date"
                className="my-2 border border-gray-200 px-3 py-2 rounded-md"
                placeholder="MM/DD/YYYY"
              />
            </div>
            <div>
              <label htmlFor="event-end-date" className="block">
                End Date
              </label>
              <input
                value={formData.endDate}
                onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                type="text"
                id="event-end-date"
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
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              type="text"
              id="address"
              className="my-2 border border-gray-200 px-3 py-2 rounded-md w-75"
              placeholder="Address"
            />
          </div>
        </div>

        <div className="mt-4">
          <div>
            <label htmlFor="category" className="block">
              Category
            </label>
            <select
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              id="category"
              className="my-2 border border-gray-200 px-3 py-2 rounded-md w-75"
            >
              <option value="" selected disabled>
                Select Category
              </option>
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
              <label htmlFor="event-start-time" className="block">
                Start Time
              </label>
              <input
                value={formData.startTime}
                onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
                type="text"
                id="event-start-time"
                className="my-2 border border-gray-200 px-3 py-2 rounded-md"
                placeholder="HH:MM AM/PM"
              />
            </div>
            <div>
              <label htmlFor="event-end-time" className="block">
                End Time
              </label>
              <input
                value={formData.endTime}
                onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
                type="text"
                id="event-end-time"
                className="my-2 border border-gray-200 px-3 py-2 rounded-md"
                placeholder="HH:MM AM/PM"
              />
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div>
            <label htmlFor="hosted-by" className="block">
              Hosted By
            </label>
            <input
              value={formData.hostedBy}
              onChange={(e) => setFormData({ ...formData, hostedBy: e.target.value })}
              type="text"
              id="hosted-by"
              className="my-2 border border-gray-200 px-3 py-2 rounded-md w-75"
              placeholder="Enter organizer's name"
            />
          </div>
        </div>

        <div className="mt-4">
          <div>
            <label htmlFor="description" className="block">
              Event Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              id="description"
              className="my-2 border border-gray-200 px-3 py-2 rounded-md w-75"
              placeholder="Write your event description here..."
            ></textarea>
          </div>
        </div>
      </div>

      {/* Recipients Button */}
      <hr />
      <Attendees />
    </div>
  );
};

export default CreateEvent;
