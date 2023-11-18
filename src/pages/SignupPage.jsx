// SignupPage.js

import React, { useState } from "react";

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    // Implement signup logic here
    console.log("Signing up with:", username, password);
    // You can send a request to your server to handle the signup process
  };

  return (
    <div className="form">
      <h2>Signup</h2>
      <form>
        <div className="input-container">
          <label>Username </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="button-container">
          <button type="button" onClick={handleSignup}>
            Signup
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
