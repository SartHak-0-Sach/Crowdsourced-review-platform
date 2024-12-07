// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.title}>Restaurant Reviews</h1>
      <Link to="/" style={styles.link}>
        Home
      </Link>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
    backgroundColor: "#007BFF",
    color: "#fff",
  },
  title: {
    fontSize: "24px",
  },
  link: {
    fontSize: "18px",
    color: "#fff",
    textDecoration: "none",
  },
};

export default Navbar;
