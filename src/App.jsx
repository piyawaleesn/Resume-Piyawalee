import "./App.css";
import * as React from "react";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import Content from "./components/Content.jsx";
import Project from "./components/Project.jsx";
import Footer from "./components/Footer.jsx";
function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Content />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
