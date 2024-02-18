import React from 'react'

const signUp = () => {
  return (
    <div className="container">
      <h1>
        <title>Registration Form</title>
        <meta name="description" content="Sign up for our service" />
        <link rel="icon" href="/favicon.ico" />
      </h1>

      <main className="main">
        <div className="logo-container">
          <img src="/logo.png" alt="Should You Buy?" className="logo" />
          <h1 className="title">SHOULD YOU BUY?</h1>
        </div>
        
        <div className="form-container">
          <form>
            <label htmlFor="fullname">Full Name</label>
            <input type="text" id="fullname" name="fullname" placeholder="Full Name" required />

            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" placeholder="Username" required />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Password" required />

            <div className="button-container">
              <button type="button">Cancel</button>
              <button type="submit">Next</button>
            </div>
          </form>
        </div>
      </main>
      </div>
  )
}

export default signUp