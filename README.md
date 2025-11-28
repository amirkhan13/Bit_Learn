# DocuMate

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description & Purpose

DocuMate is a full-stack web application designed to provide a comprehensive learning platform for computer science and programming. It offers a curated collection of resources, including video playlists, interactive coding environments, and roadmaps for various technologies like HTML, CSS, JavaScript, Python, Java, C++, and Data Structures and Algorithms (DSA). The platform aims to empower users with the knowledge and tools they need to excel in the tech industry. It offers coding environments, video tutorials, and learning roadmaps. This version of DocuMate also features enhanced data science and analytics resources, catering to aspiring data scientists and analysts.

## Features & Capabilities

- **Video Playlists:** Curated video playlists for various programming languages and concepts.
- **Interactive Coding Environment:** Online compiler for practicing and testing code.
- **Learning Roadmaps:** Structured learning paths for different technologies.
- **Language Support:** Tutorials and resources for HTML, CSS, JavaScript, Python, Java, and C++.
- **DSA Resources:** Dedicated content for Data Structures and Algorithms.
- **User Authentication:** Signup and login functionality to manage user accounts.
- **Search Functionality:** Ability to search for specific resources and content.
- **Responsive Design:** User-friendly interface that adapts to different screen sizes.
- **Data Science & Analytics Resources:** Dedicated section with tutorials, datasets, and tools for data science and analytics, including Python libraries like Pandas, NumPy, Scikit-learn, and visualization tools like Matplotlib and Seaborn.
- **Jupyter Notebook Integration:** Directly access and run Jupyter Notebooks within the platform for interactive data analysis and experimentation.
- **Data Visualization Examples:** Collection of data visualization examples using various tools and techniques.

## Installation & Setup

1.  **Clone the repository:**

    bash
    git clone https://github.com/amirkhan13/Bit_Learn.git
    cd Bit_Learn
    

    *Note: The repository name might still be Bit_Learn.*

2.  **Navigate to the backend directory:**

    bash
    cd backEnd
    

3.  **Install backend dependencies:**

    bash
    npm install  # or yarn install
    

4.  **Configure environment variables:**
    - Create a `.env` file in the `backEnd` directory.
    - Add necessary environment variables (e.g., database connection string, API keys).

5.  **Start the backend server:**

    bash
    node index.js  # or npm start if defined in package.json
    

6.  **Navigate to the frontend directory:**

    bash
    cd ../frontEnd
    

7.  **Install frontend dependencies:**

    bash
    npm install # or yarn install
    

8.  **Start the frontend development server:**

    bash
    npm start # or yarn start if defined in package.json
    

    (Note: ensure the backend is running on its designated port for the frontend to communicate.)


## Dataset Information

This project uses JSON files to store information about video playlists, learning roadmaps, and other resources. These JSON files are located in the `frontEnd/navBar` directory for each language and topic (e.g., `frontEnd/navBar/python/python.json`).  Additionally, the `frontEnd/dataScience` directory contains example datasets and Jupyter notebooks for the data science and analytics section. While primarily utilizing static content, some datasets may be dynamically loaded for demonstration purposes.

## Model Training

This project primarily focuses on providing educational resources and interactive tools. It does not involve training any AI/ML models directly within the core application. However, the platform's data science and analytics section provides resources and examples for users to train their own models using provided datasets and Jupyter Notebooks. Future enhancements may include integrations with cloud-based machine learning platforms.

## Usage Examples

1.  **Browse video playlists:** Navigate to the desired language or topic (e.g., Python, JavaScript, DSA) and explore the curated video playlists.
2.  **Use the online compiler:** Access the compiler interface to write and execute code in various languages.
3.  **Follow learning roadmaps:** Refer to the roadmaps to understand the recommended learning path for specific technologies.
4.  **Search for resources:** Use the search functionality to quickly find specific content within the platform.
5.  **Explore Data Science Resources:** Navigate to the 'Data Science' section to find tutorials, datasets and visualization examples. Run example Jupyter Notebooks for hands-on experience.

## API Documentation

(While there isn't a formal API exposed, the backEnd provides endpoints for data and potentially user authentication.)

(Example: `/api/roadmap` to get learning roadmap data.)

## Evaluation Metrics

Since this project does not involve training AI/ML models directly within the application, traditional evaluation metrics like accuracy, precision, and recall are not applicable. Success will be evaluated through user engagement, content usefulness, and platform reliability. For the data science section, user success will be measured by completion of notebook tutorials and user engagement with provided datasets.

## Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive messages.
4.  Submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.