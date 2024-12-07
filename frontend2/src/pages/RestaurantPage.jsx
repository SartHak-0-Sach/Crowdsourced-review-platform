// src/pages/RestaurantPage.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ReviewForm from "../components/ReviewForm";
import ReviewList from "../components/ReviewList";

const restaurants = [
  { id: 1, name: "Pizza Paradise", description: "Best pizza in town!" },
  { id: 2, name: "Burger Haven", description: "Juicy burgers and fries." },
  { id: 3, name: "Sushi World", description: "Authentic sushi experience." },
];

const RestaurantPage = () => {
  const { id } = useParams();
  const restaurant = restaurants.find((r) => r.id === parseInt(id));

  const [reviews, setReviews] = useState([]);

  const addReview = (newReview) => {
    setReviews([...reviews, newReview]);
  };

  if (!restaurant) {
    return <p>Restaurant not found</p>;
  }

  return (
    <div style={styles.container}>
      {/* Restaurant Info */}
      <div style={styles.header}>
        <h1 style={styles.restaurantName}>{restaurant.name}</h1>
        <p style={styles.description}>{restaurant.description}</p>
      </div>

      {/* Review Section */}
      <div style={styles.reviewSection}>
        <h2 style={styles.sectionTitle}>Add Your Review</h2>
        <ReviewForm onSubmit={addReview} />
      </div>

      {/* Review List */}
      <div style={styles.reviewList}>
        <h2 style={styles.sectionTitle}>User Reviews</h2>
        <ReviewList reviews={reviews} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Roboto', sans-serif",
    maxWidth: "900px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  header: {
    textAlign: "center",
    marginBottom: "40px",
    padding: "20px",
    backgroundColor: "#007BFF",
    color: "#fff",
    borderRadius: "10px",
  },
  restaurantName: {
    fontSize: "2.5rem",
    marginBottom: "10px",
  },
  description: {
    fontSize: "1.2rem",
  },
  reviewSection: {
    marginBottom: "40px",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  reviewList: {
    marginBottom: "20px",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  sectionTitle: {
    fontSize: "1.8rem",
    marginBottom: "20px",
    color: "#333",
    borderBottom: "2px solid #ddd",
    paddingBottom: "10px",
  },
};

export default RestaurantPage;
