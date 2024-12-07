
import React from "react";

const ReviewList = ({ reviews }) => {
  const averageRating =
    reviews.length > 0
      ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
      : 0;

  return (
    <div>
      {reviews.length > 0 && (
        <div style={styles.averageRating}>
          <h3>Average Rating: {averageRating.toFixed(1)} ★</h3>
        </div>
      )}
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div key={index} style={styles.review}>
            <div style={styles.rating}>
              {"★".repeat(review.rating)}
              {"☆".repeat(5 - review.rating)}
            </div>
            <p style={styles.reviewText}>{review.reviewText}</p>
          </div>
        ))
      ) : (
        <p style={styles.noReviews}>No reviews yet. Be the first to review!</p>
      )}
    </div>
  );
};

const styles = {
  averageRating: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
  },
  review: {
    textAlign: "left",
    padding: "15px",
    marginBottom: "10px",
    borderRadius: "10px",
    backgroundColor: "#f7f7f7",
    border: "1px solid #ddd",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  rating: {
    color: "#FFD700",
    fontSize: "18px",
    marginBottom: "5px",
  },
  reviewText: {
    fontSize: "16px",
    color: "#333",
  },
  noReviews: {
    textAlign: "center",
    color: "#999",
    fontStyle: "italic",
  },
};

export default ReviewList;
