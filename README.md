# BitLearn

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

BitLearn is a full-stack web and mobile application designed to provide users with a platform for learning various programming languages, data structures and algorithms. It features a user-friendly interface, interactive coding environment (compiler), video tutorials, and roadmaps to guide learners through their programming journey.

The frontend is built with HTML, CSS, and JavaScript, offering a dynamic user experience. The backend, powered by Node.js, manages user authentication, data storage, and API endpoints. The application uses a database to store user data and course information.

## Features

*   **Interactive Code Compiler:** Allows users to write and execute code directly in the browser for multiple languages.
*   **Video Tutorials:** Integrates with a YouTube playlist to provide video-based learning content.
*   **Learning Roadmaps:** Offers structured learning paths for different technologies (e.g., HTML, CSS, JavaScript, Python, C++, Java, DSA).
*   **User Authentication:** Secure signup and login functionality to personalize the learning experience.
*   **Responsive Design:** Adapts to different screen sizes, ensuring a seamless experience on both web and mobile devices.
*   **Search functionality:** Allows users to search learning resources

## Screenshots/Demos

*Unfortunately, I don't have the ability to access external websites or local files so I can't embed any images. You can add screenshots here.*  Example:

![Homepage](link/to/homepage_screenshot.png)

![Compiler](link/to/compiler_screenshot.png)

## Installation

1.  Clone the repository:

    bash
    git clone https://github.com/amirkhan13/Bit_Learn.git
    cd Bit_Learn
    

2.  Install backend dependencies:

    bash
    cd backEnd
    npm install  # or yarn install
    cd ..
    

3.  Install frontend dependencies (if applicable and needed, this may just use CDN):

    bash
    cd frontEnd
    # Potentially npm install or yarn install if you have a package.json in frontend
    cd ..
    

## Configuration

1.  Create a `.env` file in the root directory.
2.  Add the following environment variables:

    
    PORT=3000  # Example port for the backend
    DATABASE_URL=your_database_connection_string
    JWT_SECRET=your_jwt_secret # Secret key for JWT
    # Add any other necessary environment variables
    

    Make sure to replace `your_database_connection_string` with the actual database connection string and `your_jwt_secret` with a secure secret key.

## Usage

1.  Start the backend server:

    bash
    cd backEnd
    npm start  # or yarn start
    cd ..
    

2.  Open the `frontEnd/index.html` file in your web browser to access the application, or if the frontend has a server start it as well.

## API Reference

*Assuming API routes are defined in `backEnd/index.js`*.

*   **`GET /`**:  Returns the homepage/index page.
*   **`POST /signup`**: Registers a new user.
*   **`POST /login`**: Logs in an existing user.
*   **`GET /roadmap`**: Fetches learning roadmaps.
*   **`GET /courses`**: Fetches a list of available courses.
*   **`GET /courses/:id`**: Fetches details of a specific course.
*   *Add any other specific API endpoints here. Specify request types, parameters, and response formats.* The specific routes should be found in the backend code, most likely `backEnd/index.js`.

## Tests

*Testing is not evident based on the project information. Add testing instructions if tests exist.* Example:

To run tests, use the following command:

bash
cd backEnd
npm test # Or yarn test, depending on the testing framework



## Deployment

### Using Docker:

1.  Build the Docker image:

    bash
    docker build -t bit_learn .
    

2.  Run the Docker container:

    bash
    docker run -p 3000:3000 bit_learn
    

### Other deployment options:

*   **Heroku:** Deploy the Node.js backend to Heroku.
*   **Netlify/Vercel:** Deploy the frontend to Netlify or Vercel (if it's a static site or uses a frontend framework with serverless functions).
*   **AWS/GCP/Azure:**  Deploy both frontend and backend to cloud providers like AWS, GCP, or Azure using services like EC2, App Engine, or Azure App Service.

## Contributing

Contributions are welcome! To contribute to BitLearn, please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes.
4.  Submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.