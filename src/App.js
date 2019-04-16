import React, { Component } from "react";

import MainPage from "./pages/Main/Main";
import Footer from "./components/Footer/Footer";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainPage />
        <Footer />
      </div>
    );
  }
}

export default App;
