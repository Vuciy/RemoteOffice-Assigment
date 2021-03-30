import React from "react";
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Header from "./Shared/Header";
import Routes from "./Routes";

function App() {
  return (
    <section>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes />
        </div>
      </BrowserRouter>
    </section>
  );
}

export default App;
