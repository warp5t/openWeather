import React from 'react';
import ReactDOM from 'react-dom/client';
import './tailwind.css';
import './styles/root.css'
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLDivElement
);
const rootDom = document.getElementById('root') as HTMLDivElement
window.addEventListener('DOMContentLoaded',() => {
  rootDom.classList.add('root')
})

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
