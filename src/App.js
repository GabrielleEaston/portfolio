import React from "react";
import "./App.css";
import { motion } from "framer-motion";
import Header from "./components/Header";
// import Hero from "./components/Hero";
// import Portfolio from "./components/Portfolio";
// import About from "./components/About";
import Footer from "./components/Footer";
// import MyForm from "./components/Contact";
import Main from "./components/Main";

function App() {
  return (
    <motion.div
      className="App"
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      transition={{ duration: 1 }}
    >
      <Header />
      <Main />
      {/* <Header />
      <Hero />
      <About />
      <Portfolio />
      <MyForm />
      <Footer /> */}
      <Footer />
    </motion.div>
  );
}

export default App;
