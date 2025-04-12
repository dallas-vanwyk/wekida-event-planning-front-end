import { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import SignInForm from "./components/SignInForm/SignInForm";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import Landing from "./components/Landing/Landing.jsx";
import EventList from "./components/EventList/EventList.jsx";
// import * as eventService from './services/eventService.js'
import { UserContext } from "./contexts/UserContext.jsx";

import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import CreateEvent from "./components/CreateEvent/CreateEvent.jsx";

function App() {
  //  const [user, setUser] = useState(null);
   const {user} = useContext(UserContext)

  //  useEffect(() => {
  //   const fetchAllEvents = async () => {
  //     const eventsData = await eventService.index()
  //     console.log('eventsData:', eventsData)
  //   }
  //   if (user) fetchAllEvents()
  //  }, [user])

  return (
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={user ? <Dashboard /> : <Landing />} />
          {user ? (
            <>
            <Route path='/events' element={<EventList />} />
            <Route path="/events/create" element={<CreateEvent />} />
            </>
          ) : (
            <>
            <Route path="/sign-up" element={<SignUpForm />} />
            <Route path="/sign-in" element={<SignInForm />} />
            </>
          )}
        </Routes>
      </div>
  );
}

export default App;
