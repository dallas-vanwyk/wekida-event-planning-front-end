// src/components/SignUpForm/SignUpForm.jsx

import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router";
import { signUp } from "../../services/authService";
import styles from './SignUpForm.module.css';
import { UserContext } from "../../contexts/UserContext";

const SignUpForm = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { firstName, lastName, username, password, email, confirmPassword } = formData;
  const handleChange = (e) => {
    setMessage('');
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUser = await signUp(formData);
      setUser(newUser);
      navigate('/');
    } catch (err) {
      setMessage(err.message);
    };

  };

  const isFormInvalid = () => {
    return !(firstName && lastName && username && email && password && password === confirmPassword);
  };

  return (
    <main className={styles.container}>
      <section>
        <h1>Wekida</h1>
        <h2>Sign Up</h2>
        <p>{message}</p>
        <form onSubmit={handleSubmit} className={styles.container}>
          <div>
            <label htmlFor='firstName'>First name</label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor='lastName'>Last name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor='username'>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor='email'>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
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
            />
          </div>
          <div>
            <button disabled={isFormInvalid()}>Sign Up</button>
            <button type='button' onClick={() => navigate('/')} >Cancel</button>
          </div>
        </form>
        <h3>
          Already have an account? <Link to="/sign-in" className=" ">
            Sign In <i className=" "></i>
          </Link>
        </h3>
      </section>
    </main>
  );
};

export default SignUpForm;
