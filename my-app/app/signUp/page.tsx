'use client'

import { useState } from 'react';
import {useRouter } from 'next/navigation';
import Link from 'next/link';


export default function SignUp() {

    const router = useRouter();

    const onSubmit = async (data) => {
        try {
            const response = await fetch("/api/createuser", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
              
                router.push("/login");
                reset();
            } else {
              
                console.error("Registration failed");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

  return (
    <div className="container">
      <h1>Registration Form</h1>
      <main className="main">
        <div className="logo-container">
          <img src='' alt="Should You Buy?" className="logo" />
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


