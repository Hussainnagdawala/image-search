import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Category from "./components/Category";
import Navbardb from "./components/Navbardb";
import SingleCategory from "./components/SingleCategory";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <React.StrictMode>
      <Router>
        <Navbardb/>
        <Routes>
          <Route path="/" element={<App/>} />
          <Route path="/cat" element={<Category/>} />
          <Route path="/singleCategory/:data" element={<SingleCategory/>} />
        </Routes>
      </Router>
    </React.StrictMode>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
