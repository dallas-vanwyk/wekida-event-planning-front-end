// src/components/NavBar/NavBar.jsx

import { Link } from "react-router";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext.jsx";

const NavBar = () => {
  const handleSignOut = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <nav className="p-6">
      <ul className="ml-8 flex justify-between items-center">
        <div className="flex items-center">
          <li className="flex items-center">
            <a className="text-[#3758F9] text-2xl font-bold">Wekida</a>
          </li>
          <li className="mx-4 ml-12">
            <Link to="/">Dashboard</Link>
          </li>
          <li className="mx-4">
            <Link to="/">User Profile</Link>
          </li>
        </div>
        <div>
          <li className="mx-4">
            <Link to="/" onClick={handleSignOut}>
              Sign Out
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
