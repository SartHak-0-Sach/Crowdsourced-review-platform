# Crowdsourced-Review-Platform 🍽️

## Welcome! 👋

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Key Features](#features)
  - [File Structure](#file-structure)
  - [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Future Improvements](#future-improvements)
  - [Useful Resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview
This project is a crowdsourced review platform where users can leave reviews for their favorite restaurants, rate them out of 5, and share their experiences. The platform is built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js) and allows users to browse, add, and interact with restaurant reviews.

### The challenge
The goal of this project was to create a web application where users can:
- **Add restaurant reviews** by providing a rating and a detailed review.
- **View restaurant reviews** submitted by other users.
- **Search and filter reviews** by restaurant name or rating.
- **User authentication** to allow users to submit and manage their own reviews.

### Features
- **Restaurant Reviews:** Users can rate restaurants on a scale of 1 to 5 and write detailed reviews.
- **Authentication:** Login and register functionality to manage user accounts and reviews.
- **Search & Filter:** Users can search for restaurants by name and filter reviews by ratings.
- **Responsive UI:** Built with React.js to ensure a user-friendly and responsive interface.
- **RESTful API:** Backend built with Node.js and Express.js for handling API requests.
- **MongoDB Database:** Used to store user data, restaurant reviews, and ratings.

### File Structure
```
/root-directory
|-- client/                       # Frontend React.js application
|-- server/                       # Backend Node.js/Express.js application
|-- .gitignore                    # Files to be ignored by Git
|-- LICENSE                       # Project license
|-- README.md                     # Project description and instructions
|-- package.json                  # Frontend dependencies
|-- server/package.json           # Backend dependencies
```

### Technologies Used
- **MongoDB** for database management
- **Express.js** for building the backend API
- **React.js** for building the frontend UI
- **Node.js** for running the server
- **JWT** for user authentication
- **Material-UI** for UI components

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm (or Yarn)
- Basic knowledge of JavaScript and web development

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/crowdsourced-review-platform.git
   ```
2. Navigate to the project directory:
   ```bash
   cd crowdsourced-review-platform
   ```
3. Install the frontend dependencies:
   ```bash
   cd client
   npm install
   ```
4. Install the backend dependencies:
   ```bash
   cd ../server
   npm install
   ```
5. Configure the backend:
   - Create a `.env` file in the `server` directory and add your environment variables like MongoDB URI and JWT secret.
   
6. Run the backend:
   ```bash
   npm start
   ```
7. Run the frontend:
   ```bash
   cd ../client
   npm start
   ```

### Usage
1. **Frontend Usage:** The frontend allows users to sign up, log in, view restaurant reviews, and submit their own reviews.
2. **Backend Usage:** The backend handles API requests for retrieving and submitting reviews, as well as managing user authentication.

### Future Improvements
- Implement **user profiles** where users can view and edit their reviews.
- Add **restaurant filtering** by categories (e.g., cuisine type, location).
- Enhance **security** with rate limiting and additional user validation.
- Implement **real-time review updates** with WebSockets.

### Useful resources

- [React Documentation](https://reactjs.org/docs/getting-started.html) - Official documentation for learning React.js.
- [Node.js Documentation](https://nodejs.org/en/docs/) - Official documentation for Node.js.
- [Express.js Documentation](https://expressjs.com/) - Official documentation for Express.js.
- [MongoDB Documentation](https://docs.mongodb.com/) - Official MongoDB documentation for database management.
- [JWT Authentication Tutorial](https://jwt.io/introduction/) - A guide on using JWT for authentication.

## Author

<b><strong>Sarthak Sachdev</strong></b>
- Website - [Sarthak Sachdev](https://itsmesarthak.netlify.app/)
- LinkedIn - [Sarthak Sachdev](https://www.linkedin.com/in/sarthak2004/)
- Twitter - [@sarthak_sach69](https://www.twitter.com/sarthak_sach69)

## Acknowledgments

I’d like to acknowledge the open-source communities for their tools and libraries like MongoDB, Express, React, and Node.js, which were instrumental in building this project. Additionally, a big thanks to the developers of Material-UI for their excellent library that helped in building a great user interface.

## Got feedback for me?

Feel free to reach out via email at johndoe[at]gmail[dot]com with any feedback or suggestions!

## Contributing
Contributions are welcome! Fork the repository, make changes, and submit a pull request.

## License📃
This project is licensed under the MIT License.

Copyright (c) 2024, John Doe

**Happy coding!** 😊🚀
