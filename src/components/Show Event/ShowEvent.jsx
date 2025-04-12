import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { show as fetchEvent } from "../../services/eventService";

const ShowEvent = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const getEvent = async () => {
      try {
        const data = await fetchEvent(eventId);
        setEvent(data);
      } catch (err) {
        console.error("Failed to fetch event:", err);
      }
    };

    getEvent();
}, [eventId]);


  if (!event) return <p>Loading event details...</p>;
console.log(event)
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{event.title}</h1>
      <p className="text-gray-600">{event.category}</p>
      <p className="text-gray-600">{event.description}</p>
      {event.attendees.map((attendee, idx) => (
  <li key={attendee._id || idx}>
    <span className="font-medium">{attendee.name}</span>
    {attendee.email && (
      <span className="text-sm text-gray-500"> – {attendee.email}</span>
    )}
  </li>
))}
      <p className="text-gray-600">{event.location}</p>
      <p className="text-sm text-gray-500">{new Date(event.start_date).toLocaleString()}</p>
    </div>
  );
};

export default ShowEvent;