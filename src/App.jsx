import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import SignInForm from "./components/SignInForm/SignInForm";
import Dashboard from "./components/Dashboard/Dashboard.jsx";

import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import CreateEvent from "./components/CreateEvent/CreateEvent.jsx";
import PreviewEvent from "./components/PreviewEvent/PreviewEvent.jsx";

function App() {
  //  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/sign-up" element={<SignUpForm />} />
          <Route path="/sign-in" element={<SignInForm />} />
          <Route path="/events/create" element={<CreateEvent />} />
          <Route path="/events/preview" element={<PreviewEvent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
