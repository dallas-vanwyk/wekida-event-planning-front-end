// src/components/CreateEvent/CreateEvent.jsx

import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext"; // Import UserContext to get user data
import AddAttendees from "../AddAttendees/AddAttendees";
import * as eventService from "../../services/eventService"; // Import eventService for API calls
import { useNavigate, useParams } from "react-router";
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

const EditEvent = () => {
  const { id } = useParams(); // Get the event ID from the URL

  const [formData, setFormData] = useState(initialFormState); // useState hook to store form data
  const [attendees, setAttendees] = useState([]); // useState hook to store attendees list

  useEffect(() => {
    const fetchEvent = async (id) => {
      try {
        const eventData = await eventService.show(id); // Fetch event data using the event ID
        console.log("eventData:", eventData);

        // Transitioning the date from 2025-08-01T00:00:00.000Z to 2025-08-01
        const formattedStartDate = new Date(eventData.start_date).toISOString().split("T")[0];
        const formattedEndDate = new Date(eventData.end_date).toISOString().split("T")[0];
        setFormData({
          title: eventData.event_title,
          startDate: formattedStartDate,
          endDate: formattedEndDate,
          startTime: eventData.start_time,
          endTime: eventData.end_time,
          category: eventData.category,
          address: eventData.location,
          description: eventData.description,
        });

        setAttendees(eventData.attendees.map((attendee) => attendee.name)); // Set the attendees list
      } catch (err) {
        console.error(err); // Handle error if fetching fails
      }
    };

    fetchEvent(id); // Call the fetch function
  }, []);

  const { user } = useContext(UserContext); // Assuming you have a UserContext to get user data
  const userId = user ? user._id : null; // Get the user ID from context
  // console.log("User ID:", userId);

  const navigate = useNavigate(); // useNavigate hook to programmatically navigate

  const handleClear = () => {
    setFormData(initialFormState); // resets the form to initial empty values
  };

  const handleUpdateEvent = async () => {
    try {
      const formAttendees = attendees.map((name) => ({ name }));

      const updatedEvent = {
        event_title: formData.title,
        organizer: userId,
        description: formData.description,
        attendees: formAttendees,
        category: formData.category,
        start_date: formData.startDate,
        start_time: formData.startTime,
        end_date: formData.endDate,
        end_time: formData.endTime,
        location: formData.address,
      };

      const response = await eventService.update(id, updatedEvent); //
      //Call the update function from eventService
      console.log("response:", response);

      // setFormData(initialFormState); // Reset the form after creating the event
      // setAttendees([]); // Clear the attendees list after creating the event
      const eventId = response._id; // Get the event ID from the response

      navigate(`/events/preview/${eventId}`); // Navigate to the preview page with the event ID
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  return (
    <div className="mx-8 mt-4">
      {/* Page header and action buttons */}
      <div className="flex justify-between">
        <p className="font-bold text-2xl">Update Event Details</p>
        <div>
          <button onClick={() => handleClear()} className="bg-[#D9D9D9] py-2 px-4 rounded mr-4">
            Clear All Information
          </button>
          <button onClick={() => handleUpdateEvent()} className="bg-[#3758F9] text-white py-2 px-4 rounded">
            Save Changes
          </button>
        </div>
      </div>

      {/* Banner image background */}
      <div className="h-36 bg-[#E7F6FF] mt-8 flex justify-center items-center rounded-2xl">
        <i className="fa-solid fa-image"></i>
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
                type="date"
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
                type="date"
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
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              id="category"
              className="my-2 border border-gray-200 px-3 py-2 rounded-md w-75"
            >
              <option value="" disabled hidden>
                Select Category
              </option>
              <option value="Wedding">Wedding</option>
              <option value="Sports">Sports</option>
              <option value="Graduation Party">Graduation Party</option>
              <option value="Baby Shower">Baby Shower</option>
              <option value="Conference">Conference</option>
              <option value="Arts & Entertainment">Arts & Entertainment</option>
            </select>
          </div>
        </div>

        {/* <div>
          <div className="grid grid-cols-2 mt-4">
            <div>
              <label htmlFor="event-start-time" className="block">
                Start Time
              </label>
              <input
                value={formData.startTime}
                onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
                type="time"
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
                type="time"
                id="event-end-time"
                className="my-2 border border-gray-200 px-3 py-2 rounded-md"
                placeholder="HH:MM AM/PM"
              />
            </div>
          </div>
        </div> */}

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

      <hr />
      <AddAttendees attendees={attendees} setAttendees={setAttendees} />
    </div>
  );
};

export default EditEvent;
