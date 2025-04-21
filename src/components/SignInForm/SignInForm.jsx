// src/components/SignInForm/SignInForm.jsx

import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router";
import { signIn } from "../../services/authService";
import { UserContext } from "../../contexts/UserContext";

const SignInForm = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setMessage("");
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    console.log("handleSubmit triggered");
    e.preventDefault();
    try {
      const signedInUser = await signIn(formData);

      setUser(signedInUser);
      navigate("/");
    } catch (err) {
      setMessage(err.message);
    };
  };

  return (
    <main className="flex bg-white justify-items-center max-w-140 mx-auto px-20 pt-5 pb-30 mx-auto rounded-xl shadow-md hover:shadow-lg">
      <section className="w-full">
        <h1 className="text-[#3758F9] text-4xl font-bold justify-self-center my-6">Wekida</h1>
        <h2 className="font-bold text-xl my-7">Sign In</h2>
        <p>{message}</p>
        <form onSubmit={handleSubmit} className="grid">

          <div>
            <label htmlFor="username" className="block">
              Username
            </label>
            <input
              type="text"
              autoComplete="off"
              id="username"
              value={formData.username}
              name="username"
              placeholder="Username"
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
              autoComplete="off"
              id="password"
              value={formData.password}
              placeholder="Password"
              name="password"
              onChange={handleChange}
              required
              className="my-2 border border-gray-200 px-3 py-2 rounded-md w-full"
            />
          </div>

          <div>
            <button
              type="submit"
              className="bg-[#3758F9] text-white py-2 rounded block w-full my-8"
            >
              Sign In
            </button>
          </div>

        </form>

        <p className="text-[#637381]">
          Don't have an account?{" "}
          <Link to="/sign-up" className="text-[#3758F9]">
            Sign Up
          </Link>
        </p>
      </section>
    </main>
  );
};

export default SignInForm;
