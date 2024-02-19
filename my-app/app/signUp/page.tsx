
"use client"; // This is a client component
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';


const SignUp = () => {
  const [user, setUser] = useState({ fullname: '', username: '', password: '' });
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log('test2');
    e.preventDefault();
    try {
      const response = await fetch('/api/signUpfun', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      if (response.ok) {
        // Handle successful signup
        console.log('User signed up successfully!');
      } else {
        // Handle error
        console.error('Signup failed');
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <h1>Registration Form</h1>
      <main className="main">
        <div className="logo-container">
        <Image src="/../assets/logo.png" alt="Should You Buy?" className="logo" width={20} height={20} />
          <h1 className="title">SHOULD YOU BUY?</h1>
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              placeholder="Full Name"
              value={user.fullname}
              onChange={handleChange}
              required
            />
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={user.username}
              onChange={handleChange}
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={user.password}
              onChange={handleChange}
              required
            />
            <div className="button-container">
              <button type="button">Cancel</button>
              <button type="submit">Next</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default SignUp;
