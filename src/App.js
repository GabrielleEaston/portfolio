import React from "react";
import "./App.css";
import { useState } from "react";
import { motion } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Sidebar from "./components/SideBar";
import "mailgo/dist/mailgo.min.js";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };
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
      <Header toggleSideBar={toggleSideBar} />
      <Sidebar toggleSideBar={toggleSideBar} isOpen={isOpen} />
      <Main />
      <Footer />
    </motion.div>
  );
};

export default App;
