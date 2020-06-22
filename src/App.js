import React from "react";
import "./App.css";
import { motion } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
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
      <Footer />
    </motion.div>
  );
}

export default App;
