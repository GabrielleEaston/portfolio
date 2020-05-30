import React from "react";
import "./App.css";
import { motion } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Footer from "./components/Footer";
import MyForm from "./components/Contact";

function App() {
  return (
    <motion.div
      className="App"
      initial={{
        opacity: 0,
        x: 100}}
      animate={{
        opacity: 1,
        x: 0}}
      transition={{ duration: 1 }}
    >
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <MyForm />
      <Footer />
    </motion.div>
  );
}

export default App;
