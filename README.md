# BitLearn

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

BitLearn is a full-stack web and mobile development project designed to provide a learning platform for various programming languages and data structures and algorithms (DSA). It aims to offer a comprehensive learning experience through video tutorials, coding environments, and interactive content. The application includes both a frontend built with HTML, CSS, and JavaScript, and a backend powered by Node.js. We've recently enhanced the compiler and added more robust user authentication.

## Features

*   **User Authentication:** Secure signup and login functionality for personalized learning experiences. Includes password reset functionality.
*   **Language-Specific Tutorials:** Dedicated sections for HTML, CSS, JavaScript, Python, Java, C++, and DSA with video playlists.
*   **Interactive Code Compiler:**  A browser-based compiler to write and execute code in different languages. Now supports real-time error highlighting.
*   **Responsive Design:**  A user interface that adapts to different screen sizes for optimal viewing on web and mobile devices.
*   **Roadmap Visualizations:** Visual roadmaps to guide users through structured learning paths.
*   **Search functionality:** Allows users to easily find resources and content within the platform.

## Screenshots/Demos

Unfortunately, I cannot provide screenshots or demos, as I lack the ability to access or run the application.  However, you can view the project and its functionality through the provided GitHub repository link.

## Installation

1.  **Clone the repository:**
    bash
    git clone https://github.com/amirkhan13/Bit_Learn.git
    cd Bit_Learn
    

2.  **Install backend dependencies:**
    bash
    cd backEnd
    npm install  # or yarn install
    

3.  **Install frontend dependencies:**
    bash
    cd ../frontEnd
    npm install # or yarn install
    

## Configuration

1.  **Environment Variables:**
    *   Create a `.env` file in the `backEnd` directory based on the provided `.env.example` file.
    *   Configure the following environment variables:
        *   `PORT`: The port for the backend server (e.g., `3000`).
        *   `DATABASE_URL`: The URL for your database (e.g., MongoDB connection string).
        *   `JWT_SECRET`: Secret key for JSON Web Token authentication.
        *   Other necessary configuration for database credentials.

2.  **Database Setup:**
    *   Set up your database (e.g., MongoDB) using the provided `backEnd/db/db.js` file.
    *   Configure the database connection string in the `.env` file.

## Usage

1.  **Start the backend server:**
    bash
    cd backEnd
    npm start # or yarn start
    

2.  **Start the frontend development server:**
    bash
    cd frontEnd
    #Adjust script according to package.json
    #likely npm start
    npm start
    

3.  **Access the application:**
    *   Open your browser and navigate to `http://localhost:<frontend_port>` (e.g., `http://localhost:8080`). The frontend port depends on the setup in your `package.json` in frontend

## API Reference

Detailed API documentation will be provided here. This will include:

*   **Endpoints:** A list of all available API endpoints.
*   **Request Methods:** The HTTP methods used for each endpoint (GET, POST, PUT, DELETE).
*   **Request Parameters:** The parameters required for each request.
*   **Response Format:** The format of the data returned by each endpoint (e.g., JSON).

Example:

*   `POST /signup`: Creates a new user account.
    *   Request Body:
        
        {
            "username": "example",
            "password": "password123"
        }
        
    *   Response:
        
        {
            "success": true,
            "message": "User created successfully"
        }
        

*   `POST /reset-password`: Sends a password reset email.
    *   Request Body:
        
        {
            "email": "user@example.com"
        }
        
    *   Response:
        
        {
            "success": true,
            "message": "Password reset email sent."
        }
        

## Tests

Details on how to run the tests for both frontend and backend components will be provided here. (Likely using Jest or similar testing frameworks.)

bash
cd backEnd
npm test

cd ../frontEnd
npm test


## Deployment

1.  **Docker:**
    *   Build the Docker image using the provided `Dockerfile`.
        bash
        docker build -t bitlearn .
        
    *   Run the Docker container.
        bash
        docker run -p 80:3000 bitlearn
        

2.  **Manual Deployment:**
    *   **Backend:** Deploy the Node.js backend to a hosting platform like Heroku, AWS, or Digital Ocean.
    *   **Frontend:** Deploy the frontend files (HTML, CSS, JavaScript) to a static hosting provider like Netlify, Vercel, or AWS S3.

## Cloud

This section outlines options for deploying BitLearn to cloud platforms for scalability and reliability.

*   **AWS (Amazon Web Services):**
    *   **Backend:** Deploy the Node.js backend using AWS Elastic Beanstalk, EC2, or Lambda functions with API Gateway. Consider using AWS RDS (Relational Database Service) for your database.
    *   **Frontend:** Host the frontend files on AWS S3 and serve them via AWS CloudFront CDN for improved performance and global availability.
    *   **Database:** AWS RDS (PostgreSQL, MySQL) or AWS DynamoDB (NoSQL) are suitable choices.

*   **Google Cloud Platform (GCP):**
    *   **Backend:** Deploy the backend using Google App Engine, Google Compute Engine, or Cloud Functions with Cloud Run. Use Cloud SQL for your database.
    *   **Frontend:** Host the frontend files on Google Cloud Storage and serve them via Cloud CDN.
    *   **Database:** Google Cloud SQL (PostgreSQL, MySQL) or Cloud Datastore (NoSQL) are good options.

*   **Microsoft Azure:**
    *   **Backend:** Deploy the backend using Azure App Service, Azure Virtual Machines, or Azure Functions. Use Azure SQL Database.
    *   **Frontend:** Host the frontend files on Azure Blob Storage and serve them via Azure CDN.
    *   **Database:** Azure SQL Database (SQL Server, PostgreSQL, MySQL) or Azure Cosmos DB (NoSQL) are viable options.

* **Considerations for Cloud Deployment:**
    * **Scalability:** Design the application to scale horizontally across multiple instances.
    * **Load Balancing:** Utilize load balancers (e.g., AWS ELB, GCP Load Balancing, Azure Load Balancer) to distribute traffic.
    * **Monitoring:** Implement monitoring and logging using cloud-specific tools (e.g., AWS CloudWatch, Google Cloud Monitoring, Azure Monitor) to track application health and performance.
    * **Cost Optimization:** Choose appropriate instance sizes and storage classes to minimize cloud costs.

## Contributing

Contributions are welcome! To contribute to BitLearn:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them.
4.  Push your changes to your fork.
5.  Submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.