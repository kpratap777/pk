
import React, { useState } from 'react';
import Love from './Love.png';
import sad from './sad.png';
import like from './like.png';

function Emojishow() {
  const [input, setInput] = useState('');
  const [emoji, setEmoji] = useState(null);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInput(value);

    if (value === 'happy') {
      setEmoji(Love);
    } else if (value === 'sad') {
      setEmoji(sad);
    } else if (value === 'like') {
      setEmoji(like);
    } else {
      setEmoji(null);
    }
  };

  return (
    <div className="App">
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Type Happy, Sad or Like"
      />
      {emoji && <img src={emoji} alt="emoji" />}
    </div>
  );
}

export default Emojishow;