import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


window.addEventListener('load', () => {
    console.log("fully loaded")


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
)

})
