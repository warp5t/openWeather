import React from 'react';
import './App.css';
import { InputCity } from './logic/inputCity';
import ParentComponent from './logic/runForecast'


const lineText = 'This text came from variable in code'

function App() {
  return (
    <div className='flex flex-col justify-center items-center wrap-main h-full'>
    <InputCity />
    <ParentComponent />
    </div>
  );
}

export default App;


