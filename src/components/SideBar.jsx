import React from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = ({ toggleSideBar, isOpen }) => {
  return (
    <aside className={`sidebar ${isOpen ? "show-sidebar" : ""}`}>
      <button className="close-btn" onClick={toggleSideBar}>
        <FaTimes />
      </button>
      <div className="side-container">
        <ul className="sidebar-links">
          <li>
            <Link to="/about" onClick={toggleSideBar}>
              About
            </Link>
          </li>
          <li>
            <Link to="/portfolio" onClick={toggleSideBar}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleSideBar}>
              Contact
            </Link>
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
