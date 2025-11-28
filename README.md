# bitLearn

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

bitLearn is a full-stack web application designed to provide a comprehensive learning platform for programming and computer science topics. It offers video tutorials, coding playgrounds (compilers), roadmaps, and a supportive community to help users learn and improve their skills.  A key feature addition is BitAssistant, an AI powered learning assistant.

## Description

bitLearn aims to be a one-stop destination for anyone looking to learn programming. It covers a range of topics, from basic HTML, CSS, and JavaScript to more advanced concepts in data structures and algorithms. The platform includes:

*   **Video Tutorials:** Curated playlists of educational videos covering various programming languages and concepts.
*   **Interactive Compiler:** An online code editor that allows users to write and run code in multiple languages directly in their browser.
*   **Learning Roadmaps:** Structured learning paths to guide users through different topics and skill sets.
*   **User Authentication:** Secure signup and login functionality to track progress and personalize the learning experience.
*   **BitAssistant:** An AI-powered learning assistant to answer questions, debug code, and provide personalized guidance.

The application is built using a NodeJS backend and a dynamic frontend, allowing for a responsive and engaging user experience. Data is stored in a database connected through a NodeJS server to handle requests for resources.

## Features

*   **Video Playlists:** Organized video content for various programming languages (HTML, CSS, JavaScript, Python, Java, C++, DSA).
*   **Online Compiler:** Supports multiple languages, enabling users to practice coding directly on the platform.
*   **Learning Roadmaps:** Pre-defined learning paths to guide users through different programming topics.
*   **User Authentication:** Secure user registration and login system.
*   **Responsive Design:** Adapts to different screen sizes for optimal viewing on web and mobile devices.
*   **Search Functionality:**  Allows users to search for specific videos or concepts.
*   **BitAssistant:** An AI-powered assistant that helps users learn by answering questions, debugging code, and offering personalized learning guidance. Access it through the frontend UI.

## Screenshots/Demos

*Unfortunately, providing dynamic screenshots is not possible. However, refer to the GitHub repository for potential visual aids.* 

## Installation

To set up the bitLearn project locally, follow these steps:

1.  **Clone the repository:**
    bash
    git clone https://github.com/amirkhan13/Bit_Learn.git
    cd Bit_Learn
    

2.  **Install dependencies:**
    *   **Backend:**
        bash
        cd backEnd
        npm install  # or yarn install
        cd ..
        
    *   **Frontend:**
        bash
        cd frontEnd
        npm install  # or yarn install
        cd ..
        


## Configuration

1.  **Environment Variables:**
    *   Create a `.env` file in the root directory.
    *   Define the following environment variables:

        
        PORT=3000 # Or any other port you prefer
        DATABASE_URL=YOUR_DATABASE_URL # connection string for database
        # Add other environment variables as needed, such as API keys for BitAssistant
        

2.  **Database Setup:**
    *   Set up your database (e.g., MongoDB, PostgreSQL) and configure the `DATABASE_URL` in the `.env` file.

## Usage

1.  **Start the Backend Server:**
    bash
    cd backEnd
    npm start # or yarn start
    cd ..
    

2.  **Start the Frontend Application:**
    bash
    cd frontEnd
    npm start # or yarn start
    cd ..
    

3.  **Open the Application:**
    Open your web browser and navigate to `http://localhost:3000` (or the port you specified in the `.env` file).

## API Reference

API endpoints are defined in the `backEnd/index.js` file. (Unfortunately, without further inspection of the backend code I can only give generalized advice)

Example API endpoints:

*   `GET /api/videos`:  Retrieves a list of video tutorials.
*   `POST /api/signup`:  Creates a new user account.
*   `POST /api/login`:  Authenticates a user and returns a token (if applicable).

## Tests

*Testing functionalities not outlined in available documentation. Please look to the project files for further insight.* 

## Deployment

1.  **Docker (Recommended):**
    *   Build the Docker image:
        bash
        docker build -t bitlearn .
        
    *   Run the Docker container:
        bash
        docker run -d -p 3000:3000 -e PORT=3000 -e DATABASE_URL=YOUR_DATABASE_URL bitlearn
        

2.  **Manual Deployment:**
    *   Deploy the backend to a Node.js hosting provider (e.g., Heroku, AWS).
    *   Deploy the frontend to a static website hosting provider (e.g., Netlify, Vercel).
    *   Ensure that the frontend is configured to communicate with the deployed backend API.

## Contributing

Contributions are welcome! To contribute to the bitLearn project, follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive commit messages.
4.  Push your branch to your forked repository.
5.  Submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
