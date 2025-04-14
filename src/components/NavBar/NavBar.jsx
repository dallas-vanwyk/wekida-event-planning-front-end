// src/components/NavBar/NavBar.jsx

import { Link } from "react-router";

const NavBar = () => {
  const handleSignOut = () => {
    // Logic to handle sign out
    console.log("User signed out");
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

          {/* temporarily added link to sign-in page for testing */}
          <li className="mx-4">
            <Link to="/sign-in">
              Sign In
            </Link>
          </li>

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
