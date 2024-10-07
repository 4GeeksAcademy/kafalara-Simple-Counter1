//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";
import "../styles/index.css";
import Home from "./component/home.jsx";

let seconds = 0;
const root = ReactDOM.createRoot(document.getElementById('app'));

setInterval(() => {
    root.render(<Home seconds={seconds} />);
    // Incrementar el contador de segundos
    seconds++;
}, 1000);