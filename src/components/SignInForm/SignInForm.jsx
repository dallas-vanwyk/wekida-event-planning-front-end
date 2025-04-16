// src/components/SignInForm/SignInForm.jsx

import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router";
import { signIn } from "../../services/authService";
import styles from './SignInForm.module.css';
import { UserContext } from "../../contexts/UserContext";

const SignInForm = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setMessage('');
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const signedInUser = await signIn(formData);

      setUser(signedInUser);
      navigate('/');
    } catch (err) {
      setMessage(err.message);
    };
  };

  return (
    <main className={styles.container}>
      <section>
        <h1>Wekida</h1>
        <h2>Sign In</h2>
        <p>{message}</p>
        <form autoComplete='off' onSubmit={handleSubmit} className={styles.container}>
          <div>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              autoComplete='off'
              id='username'
              value={formData.username}
              name='username'
              placeholder='Username'
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              autoComplete='off'
              id='password'
              value={formData.password}
              placeholder='Password'
              name='password'
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <button>Sign In</button>
            <button onClick={() => navigate('/')}>Cancel</button>
          </div>
        </form>
        <h3>
          Don't have an account? <Link to="/sign-up" className=" ">
            Sign Up <i className=" "></i>
          </Link>
        </h3>
      </section>
    </main>
  );
};

export default SignInForm;
