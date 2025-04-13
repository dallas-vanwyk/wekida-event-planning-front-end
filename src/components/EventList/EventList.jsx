import { useState, useEffect, useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import * as eventService from '../../services/eventService'

const EventList = () => {
    const { user } = useContext(UserContext)
    const [events, setEvents] = useState([])


    useEffect(() => {
        const fetchAllEvents = async () => {
            const eventsData = await eventService.index()
            setEvents(eventsData)
        }
        if (user) fetchAllEvents()

    }, [user])
    
    const formatDate = (dateString) => new Date(dateString).toLocaleDateString()
    const formatTime = (dateString) =>
      new Date(dateString).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  
    if (!user) return null

    return (
        <div className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-[#3758F9]">Your Events</h2>
        {events.length === 0 ? (
          <p>No events found.</p>
        ) : (
          <ul className="space-y-4">
            {events.map((event) => (
              <li
                key={event._id}
                className="border border-gray-200 p-4 rounded-lg shadow-sm bg-white hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold text-[#3758F9]">{event.event_title}</h3>
                <p className="text-gray-700 mb-2">{event.description}</p>
                <p className="text-sm">
                  <span className="font-medium">Category:</span> {event.category}
                </p>
                <p className="text-sm">
                  <span className="font-medium">Location:</span> {event.location}
                </p>
                <p className="text-sm">
                  <span className="font-medium">Start:</span> {formatDate(event.start_date)} @{' '}
                  {formatTime(event.start_date)}
                </p>
                <p className="text-sm">
                  <span className="font-medium">End:</span> {formatDate(event.end_date)} @{' '}
                  {formatTime(event.end_date)}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    )
}

export default EventList