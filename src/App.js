import { StrictMode } from "react/cjs/react.production.min";
import React from "react";
import ReactDOM from "react-dom";
import SearchParam from "./SearchParam";
import Details from "./Details";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import About from "./About";

const App = () => {
  return (
    <div>
      <Router>
        <header>
          <Link to="/">
            <h1> Hello World</h1>
          </Link>
        </header>

        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/details/" element={<About />} />
          <Route path="/" element={<SearchParam />} />
        </Routes>
      </Router>
    </div>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
