import React, { useState } from 'react';

const AutocorrectTextarea = ({ corrections }) => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    const words = value.split(' ');
    const lastWord = words[words.length - 1];

    if (words.length > 1 && lastWord === '') {
      const correctedWords = words.slice(0, -1).map(word => corrections[word] || word);
      setText(correctedWords.join(' ') + ' ');
    } else {
      setText(value);
    }
  };

  return (
    <div className="text-center">
      <textarea
        data-testid="textarea"
        rows={10}
        cols={80}
        className="card"
        value={text}
        onChange={handleChange}
      />
    </div>
  );
};

export default AutocorrectTextarea;
