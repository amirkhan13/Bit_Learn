# BitLearn

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

BitLearn is a full-stack web and mobile development project built with Node.js, designed to provide a comprehensive learning platform for aspiring developers. The platform offers resources, roadmaps, and a built-in compiler to facilitate hands-on coding practice. It aims to make learning programming languages and data structures accessible and engaging.

The application features a user-friendly interface with a navigation bar for easy access to different learning modules. These modules cover topics such as HTML, CSS, JavaScript, Python, C++, Java, Data Structures and Algorithms (DSA), and now includes modules for React and TypeScript.

## Features

*   **Interactive Learning Modules:** Dedicated sections for HTML, CSS, JavaScript, Python, C++, Java, DSA, React and TypeScript with integrated resources.
*   **Code Compiler:** A built-in compiler for multiple languages, allowing users to write and execute code directly within the platform.
*   **Learning Roadmaps:** Structured learning paths to guide users through different programming languages and concepts.
*   **Video Tutorials:** Integration of video playlists (e.g., YouTube) to supplement learning materials.
*   **User Authentication:** Signup and login functionality to track user progress and personalize learning experiences.
*   **Responsive Design:** Optimized user interface for both web and mobile devices.
*   **Search Functionality:** Efficient search for learning materials.
*   **Bit Assistant:** Integrated assistant to provide guidance (functionality details not available).
*   **React Module:** Dedicated module for learning React with interactive examples.
*   **TypeScript Module:** Dedicated module for learning TypeScript with interactive examples.

## Screenshots/Demos

*(Include screenshots or GIFs of the application's UI here. This section is critical to showcasing the project's look and feel.)*

For Example:

![Home Page](link_to_screenshot_of_home_page.png)
![Compiler Page](link_to_screenshot_of_compiler_page.png)

## Installation

1.  **Clone the repository:**
    bash
    git clone https://github.com/amirkhan13/Bit_Learn.git
    cd Bit_Learn
    

2.  **Install dependencies:**

    *   **Frontend:**
        bash
        # Navigate to the frontend directory
        cd frontEnd
        # Install dependencies
        npm install  # or yarn install
        #Navigate back to main directory
        cd ..
        

    *   **Backend:**
        bash
        # Navigate to the backend directory
        cd backEnd
        # Install dependencies
        npm install # or yarn install
        #Navigate back to main directory
        cd ..
        


## Configuration

1.  **Environment Variables:**

    *   Create a `.env` file in the root directory of the project.
    *   Add the following environment variables (modify as needed):

        
        PORT=3000
        DATABASE_URL=mongodb://localhost:27017/bitlearn
        # Add other relevant environment variables, such as API keys, if needed.
        

## Usage

1.  **Start the backend server:**
    bash
    cd backEnd
    npm start # or yarn start or node index.js
    

2.  **Start the frontend development server:**
    bash
    cd frontEnd
    # Assuming you are using a bundler like webpack, parcel or similar.
    # The below command depends on your setup.  If using static files directly, simply open index.html in a browser
    # Example: npm run dev or yarn run dev (if a build script is configured in package.json)
    #If no build script exists just open `frontEnd/index.html` directly in your browser
    #open frontEnd/index.html in browser to view
    

3.  **Access the application:**
    *   Open your web browser and navigate to `http://localhost:<PORT>` (e.g., `http://localhost:3000`) where `<PORT>` is the port configured in your `.env` file.

## API Reference

*(Document the API endpoints exposed by the backend. This includes request methods, parameters, and response formats.)*

For Example:

*   **`POST /api/signup`**:  Registers a new user.
    *   **Request Body:**

        
        {
            "username": "string",
            "password": "string",
            "email": "string"
        }
        

    *   **Response:**
        *   **Success (201 Created):**

            
            { "message": "User created successfully" }
            

        *   **Error (400 Bad Request):**

            
            { "error": "Invalid input" }
            

*   **`POST /api/login`**: Logs in existing user.
    *   **Request Body:**

        
        {
            "username": "string",
            "password": "string"
        }
        

    *   **Response:**
        *   **Success (200 OK):**

            
            { "message": "Login successful", "token": "JWT_TOKEN" }
            

        *   **Error (401 Unauthorized):**

            
            { "error": "Invalid credentials" }
            


## Tests

*(Describe how to run the project's tests. If there are no automated tests currently, mention that and suggest adding them.)*

To run tests:

1. `cd backEnd`
2. `npm test` or `yarn test`

(Note: Currently no automated tests exist but should be implemented. This is important to improve code maintainability and prevent regressions).

## Docker

1.  **Building the Docker Image:**

    Navigate to the root directory of your project (the one containing the `Dockerfile`). If you don't have a Dockerfile, you'll need to create one.  A basic Dockerfile might look like this:

    dockerfile
    # Use an official Node.js runtime as a parent image
    FROM node:16

    # Set the working directory in the container
    WORKDIR /app

    # Copy the package.json and package-lock.json files
    COPY package*.json ./

    # Install application dependencies
    RUN npm install

    # Copy the application source code
    COPY . .

    # Expose the port the app runs on
    EXPOSE 3000

    # Define the command to run the app using pm2 to maintain uptime.
    CMD ["npm", "start"]
    
    Then, build the Docker image:

    bash
    docker build -t bitlearn .
    

2.  **Running the Docker Container:**

    Run the Docker container, mapping port 3000 on the host to port 3000 in the container.  Also set environment variables using the `-e` flag.

    bash
    docker run -p 3000:3000 -e PORT=3000 -e DATABASE_URL=mongodb://localhost:27017/bitlearn bitlearn
    
    *Note: Replace `mongodb://localhost:27017/bitlearn` with the correct database URL if your database is not running locally.*  Consider using Docker Compose for more complex setups with databases in containers.

## Deployment

1.  **Docker:**
    *   Build the Docker image:
        bash
        docker build -t bitlearn .
        

    *   Run the Docker container:
        bash
        docker run -p 3000:3000 bitlearn
        

2.  **Manual Deployment:**
    *   Deploy the backend to a Node.js hosting platform (e.g., Heroku, AWS, Digital Ocean).
    *   Configure the environment variables on the hosting platform.
    *   Deploy the frontend files to a static hosting service (e.g., Netlify, Vercel, AWS S3).

## Contributing

Contributions are welcome!  Please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes.
4.  Write tests for your changes.
5.  Submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.