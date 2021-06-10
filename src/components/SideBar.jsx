import React from "react";
import { FaTimes } from "react-icons/fa";


const Sidebar = ({ toggleSideBar, isOpen }) => {
  return (
    <aside className={`sidebar ${isOpen ? "show-sidebar" : ""}`}>
      <button className="close-btn" onClick={toggleSideBar}>
        <FaTimes />
      </button>
      <div className="side-container">
        <ul className="sidebar-links">
          <li>
          <a href="#about" onClick={toggleSideBar}>About</a>
            
          </li>
          <li>
          <a href="#projects" onClick={toggleSideBar}>Projects</a>
           
          </li>
          <li>
          <a href="#contact" onClick={toggleSideBar}>Contact</a>
            
          </li>
          <li>
            <a
              href="https://docdro.id/81wrqzw"
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleSideBar}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
