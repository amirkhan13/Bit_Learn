# BitLearn

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

BitLearn is a full-stack web application designed to provide users with a comprehensive platform for learning programming concepts and data structures. It offers video tutorials, interactive coding environments (supporting multiple languages), a personalized learning roadmap, and community features. The application leverages Node.js with Express for the backend, React for the frontend, and MongoDB for persistent data storage. We've moved away from mobile application focus, concentrating efforts on an exceptional web-based experience first.

## Features

*   **User Authentication:** Secure signup, login, and password management.
*   **Video Tutorials:** Integration of embedded video content to explain concepts, now with enhanced search and filtering.
*   **Interactive Compiler:** Online compiler to practice coding skills with support for multiple programming languages (see Language Support).
*   **Learning Roadmap:** A structured, personalized path to guide users through different topics. Roadmaps are dynamically generated based on user skill level and selected languages.
*   **Responsive Design:** Adaptable user interface optimized for web browsers.
*   **Language-Specific Content:** Curated content for various programming languages (HTML, CSS, JavaScript, Python, C++, Java, PHP, DSA).
*   **Community Forum:** Users can now interact with each other, ask questions, and share their learning experiences.
*   **Progress Tracking:** Users can track their progress on the learning roadmap and see which lessons they have completed.
*   **Code Challenges:** Test your knowledge with coding challenges at the end of each lesson.

## Screenshots/Demos

*Add screenshots or links to demo videos here to showcase the application's interface and functionality.*

## Installation

1.  Clone the repository:

    bash
    git clone https://github.com/amirkhan13/Bit_Learn.git
    cd Bit_Learn
    

2.  Install dependencies for both the backend and frontend. It is assumed `npm` is used, but `yarn` can be substituted.

    bash
    # Backend
    cd backEnd
    npm install
    cd ..

    # Frontend
    cd frontEnd
    npm install
    cd ..
    

## Configuration

1.  Create a `.env` file in the root directory. Refer to the `.env.example` file in the repository for the required environment variables. The following variables are *required*:

    
    PORT=3000
    DATABASE_URL=mongodb://user:password@host:port/database
    SESSION_SECRET=your_session_secret
    JWT_SECRET=your_jwt_secret
    

2.  Configure the database connection in `backEnd/db/db.js` with the appropriate MongoDB connection string, matching the `DATABASE_URL` in the `.env` file.

## Usage

1.  Start the backend server:

    bash
    cd backEnd
    npm start
    cd ..
    

2.  Open a new terminal and start the frontend development server:

    bash
    cd frontEnd
    npm start
    cd ..
    

3.  Access the application in your browser at `http://localhost:3000` (or the specified port in your `.env` file).

## Docker

This project includes Dockerfiles for both the backend and frontend, allowing for containerized deployment.

To build and run the application using Docker:

1.  Navigate to the project root directory.
2.  Build the Docker images:

    bash
    docker-compose build
    

3.  Run the Docker containers:

    bash
    docker-compose up
    

This will start the backend and frontend services in separate containers.  Ensure Docker and Docker Compose are installed on your system. The `docker-compose.yml` file defines the services, networks, and volumes needed to run the application. You may need to adjust environment variables within the `docker-compose.yml` to match your configuration, particularly the `DATABASE_URL` to point to a containerized MongoDB instance or an external MongoDB database.

## API Reference

*Details about the backend API endpoints should be documented here. Specify endpoints, request methods, parameters, and response formats.*

Example:

*   `POST /api/auth/signup`: Creates a new user account.
    *   Request body:

        
        {
          "username": "string",
          "email": "string",
          "password": "string"
        }
        

    *   Response:

        
        {
          "message": "User created successfully",
          "userId": "string"
        }
        

*   `POST /api/auth/login`: Logs in an existing user.
    *   Request body:

        
        {
          "email": "string",
          "password": "string"
        }
        

    *   Response:

        
        {
          "message": "Login successful",
          "token": "string",
          "userId": "string"
        }
        

## Tests

*Information about running tests, if implemented, should be included here.* Unit tests are performed with Jest, integration tests with Cypress.

To run the tests:

bash
# Backend
cd backEnd
npm test
cd ..

# Frontend
cd frontEnd
npm test:unit
npm test:e2e
cd ..


## Deployment

1.  **Backend:** Deploy the Node.js backend to a platform like Heroku, AWS, Google Cloud Platform, or Digital Ocean. Ensure the `NODE_ENV` environment variable is set to `production`.
2.  **Frontend:** Deploy the static frontend files (HTML, CSS, JavaScript) to a CDN or a web server like Nginx or Netlify. Configure the frontend to point to the deployed backend API.
3.  Set up a CI/CD pipeline for automated deployments.

## Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive messages. Follow the established code style.
4.  Submit a pull request.

## GitHub

We use GitHub for version control and issue tracking.  Please feel free to open issues for bug reports, feature requests, or general questions.  You can also contribute by submitting pull requests as described in the Contributing section.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.