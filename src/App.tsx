import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
        <Header />
        <Main />
        <Footer />
    </div>
  );
}

export default App;
