// src/components/PreviewEvent/PreviewEvent.jsx

import { useState } from "react";
import { Link, useParams } from "react-router"; // Import useParams to get the event ID from the URL
import { useNavigate } from "react-router"; // Import useNavigate for navigation
import { useEffect } from "react";
import * as eventService from "../../services/eventService"; // Import eventService for API calls
import AttendeesList from "../AttendeesList/AttendeesList";

// PreviewEvent component to display event details before sending an invitation
const PreviewEvent = () => {
  const initialState = {
    event_title: "",
    organizer: {
      firstName: "",
      lastName: "",
    },
    description: "",
    attendees: [],
    category: "",
    start_date: "",
    start_time: "",
    end_date: "",
    end_time: "",
    location: "",
  };

  const { id } = useParams(); // Get the event ID from the URL
  const navigate = useNavigate(); // Initialize useNavigate for navigation
  const [event, setEvent] = useState(initialState); // State to store event data
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to manage error state

  useEffect(() => {
    const fetchEvent = async (id) => {
      try {
        const eventData = await eventService.show(id); // Fetch event data using the event ID
        setEvent(eventData); // Set the event data in state
      } catch (err) {
        setError(err); // Set error if fetching fails
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchEvent(id); // Call the fetch function
  }, [id]); // Dependency array to run effect only when ID changes

  return (
    <div className="mx-8 mt-4">
      {/* First Section */}
      <div className="flex justify-between">
        <h2 className="font-bold text-2xl">Preview Event Invite</h2>
        <div>
          <Link to={`/events/edit/${id}`} className="bg-[#D9D9D9] py-2 px-4 rounded mr-4">
            Edit Event
          </Link>
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
            <p>{event.event_title}</p>
          </div>
        </div>
        <div className="">
          <p className="font-bold">Event Timing</p>
          <div className="grid grid-cols-2 mt-4">
            <div>
              <p>Start Date</p>
              <p>{event.start_date}</p>
            </div>
            <div>
              <p>End Date</p>
              <p>{event.end_date}</p>
            </div>
          </div>
        </div>
        <div className="">
          <p className="font-bold">Location</p>
          <div className="mt-4">
            <p>Address</p>
            <p>{event.location}</p>
          </div>
        </div>
        <div className="mt-4">
          <div>
            <p>Category</p>
            <p>{event.category}</p>
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
            <p>
              {event.organizer.firstName} {event.organizer.lastName}
            </p>
          </div>
        </div>
        <div className="mt-4">
          <div>
            <p>Event Description</p>
            <p>{event.description}</p>
          </div>
        </div>
      </div>

      <hr />
      <AttendeesList attendees={event.attendees} />
    </div>
  );
};

export default PreviewEvent;
