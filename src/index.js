import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './output.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function displayTitle(){
  var title="GenerationIntegratedSearchEngine"
  var i = 1;
  var sleep=100;
  var interval = setInterval(function(){    
    if(document.getElementById("title").textContent==="Generation"){
      document.getElementById("title").textContent="G."
    }else if(document.getElementById("title").textContent==="G.Integrated"){
      document.getElementById("title").textContent="G.I."
    }else if(document.getElementById("title").textContent==="G.I.Search"){
      document.getElementById("title").textContent="G.I.S."
    }else if(document.getElementById("title").textContent==="G.I.S.Engine"){
      document.getElementById("title").textContent="GISE"
    }
    document.getElementById("title").textContent += title.charAt(i);
    i++;
    if (i > title.length){
        clearInterval(interval);
    }
  }, sleep);
}

displayTitle();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
