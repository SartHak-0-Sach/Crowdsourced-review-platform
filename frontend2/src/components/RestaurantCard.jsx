// src/components/RestaurantCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const RestaurantCard = ({ restaurant }) => {
  return (
    <div style={styles.card}>
      <h2>{restaurant.name}</h2>
      <p>{restaurant.description}</p>
      <Link to={`/restaurant/${restaurant.id}`} style={styles.link}>
        View Details
      </Link>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "20px",
    marginBottom: "20px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  link: {
    color: "#007BFF",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default RestaurantCard;
