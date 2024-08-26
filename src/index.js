import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './output.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

function displayTitle(){
  var title="GenerationIntegratedSearchEngine"
  var i = 0;
  var interval = setInterval(function(){
    if(document.getElementById("title").textContent==="Generation"){
      document.getElementById("title").textContent="G."
    }
    if(document.getElementById("title").textContent==="G.Integrated"){
      document.getElementById("title").textContent="G.I."
    }
    if(document.getElementById("title").textContent==="G.I.Search"){
      document.getElementById("title").textContent="G.I.S."
    }
    if(document.getElementById("title").textContent==="G.I.S.Engine"){
      document.getElementById("title").textContent="G.I.S.E."
    }
    document.getElementById("title").textContent += title.charAt(i);
    i++;
    if (i > title.length){
        clearInterval(interval);
    }
  }, 150);
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

displayTitle();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
