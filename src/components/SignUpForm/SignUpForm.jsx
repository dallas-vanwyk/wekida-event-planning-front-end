// src/components/SignUpForm/SignUpForm.jsx

import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router";
import { signUp } from "../../services/authService";
import { UserContext } from "../../contexts/UserContext";

const SignUpForm = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { firstName, lastName, username, password, email, confirmPassword } = formData;
  const handleChange = (e) => {
    setMessage("");
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUser = await signUp(formData);
      setUser(newUser);
      navigate("/");
    } catch (err) {
      setMessage(err.message);
    }
  };

  const isFormInvalid = () => {
    return !(firstName && lastName && username && email && password && password === confirmPassword);
  };

  return (
    <main className="flex bg-white justify-items-center max-w-140 mx-auto px-20 pt-5 pb-30 mx-auto rounded-xl shadow-md hover:shadow-lg">
      <section className="w-full">
        <h1 className="text-[#3758F9] text-4xl font-bold justify-self-center my-6">Wekida</h1>
        <h2 className="font-bold text-xl my-7">Sign Up</h2>
        <p>{message}</p>
        <form onSubmit={handleSubmit} className="grid">

          <div>
            <label htmlFor="firstName" className="block">
              First name
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="my-2 border border-gray-200 px-3 py-2 rounded-md w-full"
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block">
              Last name
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="my-2 border border-gray-200 px-3 py-2 rounded-md w-full"
            />
          </div>

          <div>
            <label htmlFor="username" className="block">
              Username
            </label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
              className="my-2 border border-gray-200 px-3 py-2 rounded-md w-full"
            />
          </div>

          <div>
            <label htmlFor="email" className="block">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="my-2 border border-gray-200 px-3 py-2 rounded-md w-full"
            />
          </div>

          <div>
            <label htmlFor="password" className="block">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="my-2 border border-gray-200 px-3 py-2 rounded-md w-full"
            />
          </div>

          <div>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="my-2 border border-gray-200 px-3 py-2 rounded-md w-full"
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={isFormInvalid()}
              className="bg-[#3758F9] text-white py-2 rounded block w-full my-8"
            >
              Sign Up
            </button>
          </div>

        </form>

        <p className="text-[#637381]">
          Already have an account?{" "}
          <Link to="/sign-in" className="text-[#3758F9]">
            Sign In
          </Link>
        </p>
      </section>
    </main>
  );
};

export default SignUpForm;
