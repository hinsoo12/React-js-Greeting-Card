# React JS Greeting Card

A simple and dynamic greeting card application built with React JS. This project allows users to customize the greeting message, name, and background color of the card.

## Features

•  Dynamic greeting message

•  Customizable name input

•  Selectable greeting type

•  Changeable background color

•  Interactive and responsive design


## Installation

1. [**Clone the repository:**](https://www.bing.com/search?form=SKPBOT&q=Clone%20the%20repository%3A)

```bash
git clone https://github.com/your-username/react-greeting-card.git
cd react-greeting-card

1. 
Install dependencies:

npm install

1. 
Start the development server:

npm start

Usage
1. 
Open your browser and navigate to http://localhost:3000.
2. 
Enter your name in the input field.
3. 
Type a custom message.
4. 
Select a greeting type from the dropdown menu.
5. 
Choose a background color using the color picker.

Code Overview
GreetingCard.js
This file contains the main React component for the greeting card.

import React, { useState } from 'react';
import './GreetingCard.css';

function GreetingCard() {
const [name, setName] = useState('John Doe');
const [message, setMessage] = useState('How are you doing today?');
const [greetingType, setGreetingType] = useState('Hello');
const [bgColor, setBgColor] = useState('#f0f8ff');

return (
<div className="card" style={{ backgroundColor: bgColor }}>
<h1 className="greeting">{greetingType}, {name}!</h1>
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
<option value="Hello">Hello</option>
<option value="Hi">Hi</option>
<option value="Greetings">Greetings</option>
<option value="Welcome">Welcome</option>
</select>
<input 
type="color" 
onChange={(e) => setBgColor(e.target.value)} 
value={bgColor}
/>
</div>
);
}

export default GreetingCard;

GreetingCard.css
This file contains the styles for the greeting card component.

.card {
padding: 30px;
border-radius: 15px;
margin: 20px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
text-align: center;
font-family: 'Arial, sans-serif';
transition: transform 0.2s;
}

.card:hover {
transform: scale(1.05);
}

.greeting {
color: #333;
font-size: 2em;
margin-bottom: 10px;
}

.sub-greeting {
color: #666;
font-size: 1.5em;
}

input, select {
margin: 10px 0;
padding: 10px;
border-radius: 5px;
border: 1px solid #ccc;
font-size: 1em;
}

Contributing
Feel free to submit issues or pull requests if you have any suggestions or improvements.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgements
•  React documentation: React Docs

•  CSS Tricks: CSS-Tricks


Enjoy building and customizing your greeting card! blush


Feel free to modify the content to better suit your project. Let me know if you need any more help!