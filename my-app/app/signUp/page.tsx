
import Image from 'next/image';
import { useState } from 'react';
import {signUpfunc} from '../api/signUpfun/route';
import Link from 'next/link'


export default function SignUp() {
  
  return (
    
    <div className="container">
      <h1>Registration Form</h1>
      <main className="main">
        <div className="logo-container">
          <Image src= "/logo.png" width = {250} height = {250} className="logo" alt = "Should You Buy? Logo" />
        </div>
        <div className="form-container">
        <form action = {signUpfunc} >
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              placeholder="Full Name"

              required
            />
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"

              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"

              required
            />
            <div className="button-container">
              <Link href = "/" >Cancel</Link>
              <button type="submit">Next</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};


