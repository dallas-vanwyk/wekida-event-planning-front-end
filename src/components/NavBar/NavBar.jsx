import { useContext } from "react";
import { Link } from "react-router";
import { UserContext } from "../../contexts/UserContext";

const NavBar = () => {
  const { user, setUser } = useContext(UserContext)

  const handleSignOut = () => {
    // Logic to handle sign out
    localStorage.removeItem('token')
    setUser(null)
    console.log("User signed out");
  };

  return (
    <nav className="p-6">
      {user ? (
      <ul className="ml-8 flex justify-between items-center">
          <li className="flex items-center">
            <span className="text-[#3758F9] text-2xl font-bold">Welcome to Wekida, {user.firstName}</span>
          </li>
          <li className="mx-4 ml-12">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-4">
            <Link to="/events">Events</Link>
          </li>
          <li className="mx-4">
            <Link to="/" onClick={handleSignOut}>
              Sign Out
            </Link>
          </li>
      </ul>
          ) : (
            <ul>
              <li className='mx-4'>
                <Link to='/'>Home</Link>
                </li>
              <li className='mx-4'>
                <Link to='/sign-in'>Sign In</Link>
                </li>
              <li className='mx-4'>
                <Link to='/sign-up'>Sign Up</Link>
                </li>
            </ul>
          )}
    </nav>
  );
};

export default NavBar;
