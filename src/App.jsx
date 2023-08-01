import "./App.css";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import StartPage from "./components/StartPage";
import Banner from "./components/Banner";

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Banner />
      <StartPage />

      <Footer />
    </>
  );
}

export default App;
