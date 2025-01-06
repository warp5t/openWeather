import React, { useState } from 'react';
import '../tailwind.css';
type MessageInput = { message?: string };

export let cityCertain: string = '';

export function InputCity({ message }: MessageInput) {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    cityCertain = newValue;
  };

  return (
    <div className='flex flex-col items-center'>
      <div>
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </div>
      <div>
        If a name of the city has several location you should add abbreviation throught comma.
      </div>
    </div>
  );
}