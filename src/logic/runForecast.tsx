import React, {useState} from 'react';
import FetchData from './fetch';
import {cityCertain} from './inputCity'

let location: string = 'Minsk,by';
const unitsMetric = 'metric'; // standard, imperial, metric
// const latitude = 53.909323;
// const longitude = 27.596722;
const apiKey = '2f6b794a850c0cf7bf82e5148229615d';

let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=${unitsMetric}`;

const ParentComponent: React.FC = () => {

  const [key, setKey] = useState(0);

  const handleReset = () => {
    setKey(key + 1);
    location = cityCertain;
    url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=${unitsMetric}`;
  };

  return (
    <>
      <button className="checkWeather spacingBlock" onClick={handleReset}>Check Weather</button>
      { <FetchData url={url} key={key} /> }
    </>

  );
};

export default ParentComponent;


