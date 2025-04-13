import React, { useContext, useState } from "react";
import Attendees from "../Attendees/Attendees";
import { UserContext } from "../../contexts/UserContext";

{ /* Set up useState and review it */}

  //  const formatDate = (dateString) => new Date(dateString).toLocaleDateString()
  //   const formatTime = (dateString) =>
  //     new Date(dateString).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

    
const initialFormState = {
  event_title: "",
  description: "",
  category: "",
  start_date: "",
  end_date: "",
  location: "",
  organizer: "",
  attendees: []
};

const CreateEvent = () => {
  const {user} = useContext(UserContext)
  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleClear = () => {
    setFormData(initialFormState);
  };

  return (
    <div className="mx-8 mt-4">
      {/* First Section */}
      <div className="flex justify-between">
        <p className="font-bold text-2xl">Create an Event</p>
        <div>
          <button onClick={handleClear} className="bg-[#D9D9D9] py-2 px-4 rounded mr-4">Clear All Information</button>
          <button className="bg-[#3758F9] text-white py-2 px-4 rounded">Preview Event Invite</button>
        </div>
      </div>

      {/* Banner Image Background */}
      <div className="h-36 bg-[#E7F6FF] mt-8 flex justify-center items-center rounded-2xl">
        <i className="fa-solid fa-image"></i>
      </div>

      {/* Form Section */}
      <div className="grid grid-cols-3 gap-4 my-8">
        <div className="">
          <p className="font-bold">General Info</p>
          <div className="mt-4">
            <label htmlFor="event-title" className="block">
              Event Title
            </label>
            <input
              type="text"
              id="event_title"
              value={formData.event_title}
              onChange={handleChange}
              className="my-2 border border-gray-200 px-3 py-2 rounded-md w-75"
              placeholder="Enter event title"
            />
          </div>
        </div>
        <div className="">
          <p className="font-bold">Event Timing</p>
          <div className="grid grid-cols-2 mt-4">
            <div>
              <label htmlFor="event-start-date" className="block">
                Start Date
              </label>
              <input
                type="date"
                id="start_date"
                value={formData.start_date}
                onChange={handleChange}
                className="my-2 border border-gray-200 px-3 py-2 rounded-md"
                placeholder="MM/DD/YYYY"
              />
            </div>
            <div>
              <label htmlFor="event-end-date" className="block">
                End Date
              </label>
              <input
                type="date"
                id="end_date"
                value={formData.end_date}
                onChange={handleChange}
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
              id="location"
              value={formData.location}
              onChange={handleChange}
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
             id="category"
             value={formData.category}
             onChange={handleChange}
             className="my-2 border border-gray-200 px-3 py-2 rounded-md w-75">
              <option value=""  disabled>
                Select Category
              </option>
              <option value="weddings">Wedding</option>
              <option value="baby shower">Baby Shower</option>
              <option value="graduation party">Graduation Party</option>
              <option value="conference">Conference</option>
              <option value="arts & entertainment">Arts & Entertainment</option>
              <option value="sports">Sports</option>
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
                type="time"
                id="start_date"
                className="my-2 border border-gray-200 px-3 py-2 rounded-md"
                placeholder="HH:MM AM/PM"
              />
            </div>
            <div>
              <label htmlFor="event-end-time" className="block">
                End Time
              </label>
              <input
                type="time"
                id="end_date"
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
              {user.firstName} {user.lastName}
            {/* <input
              type="text"
              id="hosted-by"
              className="my-2 border border-gray-200 px-3 py-2 rounded-md w-75"
              placeholder="Enter organizer's name"
            /> */}
          </div>
        </div>
        <div className="mt-4">
          <div>
            <label htmlFor="description" className="block">
              Event Description
            </label>
            <textarea
              id="description"
              value={formData.description}
              onChange={handleChange}
              className="my-2 border border-gray-200 px-3 py-2 rounded-md w-75"
              placeholder="Write your event description here..."
            ></textarea>
          </div>
        </div>
      </div>

      {/* Recipients Button */}
      <hr />
      {/* <Attendees /> */}
    </div>
  );
};

export default CreateEvent;
