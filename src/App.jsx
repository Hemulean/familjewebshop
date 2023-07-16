import "./App.css";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/StartPage";
import NavBar from "./components/NavBar";
import StartPage from "./components/StartPage";

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <StartPage />

      <Footer />
    </>
  );
}

export default App;
