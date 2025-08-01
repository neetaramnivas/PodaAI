import React, { useState } from 'react';
import './App.css';
import jagathyGif from './assets/jagathy.gif'; // bot
import userAvatar from './assets/sreenivasan.gif'; // user

function App() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'സുഖമാണോ കണ്മണി?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { sender: 'user', text: input };
    const savageReplies = [
      'പോടാ, അതെന്താ ചോദ്യം?',
      'തലേനി, നീ ഇതുവരെ ഇങ്ങനെയാണ് ഇരുന്നത്!',
      'ഇത് കൂടി നീ അറിയില്ലേ?',
      'പിള്ളേറെ, ഞാൻ ബോട്ടാ പക്ഷെ common sense ഉണ്ട്!',
      'ഇതൊക്കെ പഠിക്കാതെ വന്നോ സ്കൂളിൽ?',
      'ഇത് ചോദിക്കാൻ പോലും എളുപ്പം തോന്നിയേ?',
      'ഒന്ന് തല അടിച്ചു കിടക്കുമോ?',
      'നിനക്ക് Netflix വേണ്ട, പാഠപുസ്തകം വേണ്ട!',
      'ഉള്ളത് ഉള്ളപോലെ പറയാം: അടിപൊളി കേശ!'
    ];
    const botMsg = {
      sender: 'bot',
      text: savageReplies[Math.floor(Math.random() * savageReplies.length)]
    };

    setMessages([...messages, userMsg, botMsg]);
    setInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="chat-container">
      <h1 className="title">Savage Malayalam AI Bot 🤖🔥</h1>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.sender === 'bot' ? 'bot' : 'user'}`}
          >
            {msg.sender === 'bot' && (
              <img src={jagathyGif} alt="Bot" className="character-img" />
            )}
            <span>{msg.text}</span>
            {msg.sender === 'user' && (
              <img src={userAvatar} alt="User" className="character-img" />
            )}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          placeholder="ചോദിക്കടെ..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button onClick={handleSend}>പറയിക്കൂ</button>
      </div>
    </div>
  );
}

export default App;
