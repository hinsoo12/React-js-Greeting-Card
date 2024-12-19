import React, { useState } from "react";
import "./GreetingCard.css";

function GreetingCard() {
  const [name, setName] = useState("John Doe");
  const [message, setMessage] = useState("How are you doing today?");
  const [greetingType, setGreetingType] = useState("Hello");

  return (
    <div className="card">
      <h1 className="greeting">
        {greetingType}, {name}!
      </h1>
      <h2 className="sub-greeting">{message}</h2>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your message"
        onChange={(e) => setMessage(e.target.value)}
      />
      <select onChange={(e) => setGreetingType(e.target.value)}>
        <option value="Hello">Select Greeting</option>
        <option value="Hello">Hello</option>
        <option value="Hi">Hi</option>
        <option value="Greetings">Greetings</option>
        <option value="Welcome">Welcome</option>
      </select>
    </div>
  );
}

export default GreetingCard;
