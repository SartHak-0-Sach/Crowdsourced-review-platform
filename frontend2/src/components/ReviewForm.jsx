// src/components/ReviewForm.jsx
import React, { useState } from "react";

const ReviewForm = ({ onSubmit }) => {
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (reviewText.trim() === "" || rating === 0) {
      alert("Please provide both a review and a rating.");
      return;
    }
    onSubmit({ reviewText, rating });
    setReviewText("");
    setRating(0);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.ratingContainer}>
        <p style={styles.label}>Rate this restaurant:</p>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            style={{
              ...styles.star,
              color: star <= rating ? "#FFD700" : "#ccc",
            }}
            onClick={() => setRating(star)}
          >
            ★
          </span>
        ))}
      </div>
      <textarea
        style={styles.textarea}
        placeholder="Write your review here..."
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
      />
      <button type="submit" style={styles.button}>
        Submit Review
      </button>
    </form>
  );
};

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px",
  },
  label: {
    fontWeight: "bold",
    marginBottom: "5px",
  },
  ratingContainer: {
    marginBottom: "15px",
  },
  star: {
    fontSize: "30px",
    cursor: "pointer",
    margin: "0 5px",
  },
  textarea: {
    width: "100%",
    height: "100px",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    resize: "none",
    boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#007BFF",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};

export default ReviewForm;
