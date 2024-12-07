import React, { useState } from "react";
import RestaurantCard from "../components/RestaurantCard";

const restaurants = [
  { id: 1, name: "Pizza Paradise", description: "Best pizza in town!" },
  { id: 2, name: "Burger Haven", description: "Juicy burgers and fries." },
  { id: 3, name: "Sushi World", description: "Authentic sushi experience." },
];

const Home = () => {
  const [filter, setFilter] = useState("");
  
  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Restaurants</h1>

      <div style={styles.filterContainer}>
        <input
          type="text"
          placeholder="Filter by name..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={styles.filterInput}
        />
      </div>

      {filteredRestaurants.length > 0 ? (
        filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))
      ) : (
        <p style={styles.noResults}>No restaurants match your search.</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
  },
  header: {
    textAlign: "center",
    marginBottom: "30px",
  },
  filterContainer: {
    textAlign: "center",
    marginBottom: "20px",
  },
  filterInput: {
    width: "80%",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  noResults: {
    textAlign: "center",
    color: "#999",
    fontStyle: "italic",
  },
};

export default Home;
