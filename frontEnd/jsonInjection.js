// script.js

document.addEventListener("DOMContentLoaded", async () => {
    // Define the path to the JSON folder
    const jsonFolder = "./json/";

    // List all JSON files in the folder (add all file names here)
    const jsonFiles = ["HTML.json", "CSS.json", "javascript.json", "DSA.json", "Cplusplus.json", "JAVA.json", "PHP.json", "python.json"]; // Add file names
    // Fetch and process each JSON file
    for (const file of jsonFiles) {
        try {
            const response = await fetch(jsonFolder + file);
            if (!response.ok) {
                throw new Error(`Could not fetch ${file}`);
            }
            const data = await response.json();
            injectData(file, data);
        } catch (error) {
            console.error("Error fetching JSON:", error);
        }
    }
});

// Function to inject data into the HTML page
function injectData(fileName, data) {
    // Create a container for the content dynamically
    const section = document.createElement("section");
    section.className = "content-section";

    // Set a title based on the JSON file name
    const title = document.createElement("h2");
    title.textContent = fileName.replace('.json', '').toUpperCase();
    section.appendChild(title);

    // Recursive function to handle nested JSON data
    function createListFromData(data) {
        const list = document.createElement("ul");

        for (const key in data) {
            const listItem = document.createElement("li");

            if (typeof data[key] === "object" && !Array.isArray(data[key])) {
                // Handle nested objects
                listItem.textContent = key;
                listItem.appendChild(createListFromData(data[key]));
            } else if (Array.isArray(data[key])) {
                // Handle arrays
                listItem.textContent = key;
                const subList = document.createElement("ul");
                data[key].forEach(item => {
                    const subListItem = document.createElement("li");
                    subListItem.textContent = item;
                    subList.appendChild(subListItem);
                });
                listItem.appendChild(subList);
            } else {
                // Handle key-value pairs
                listItem.textContent = `${key}: ${data[key]}`;
            }

            list.appendChild(listItem);
        }

        return list;
    }

    // Populate the section with the processed data
    const contentList = createListFromData(data);
    section.appendChild(contentList);

    // Append the section to the main section of the page
    document.querySelector(".main-section").appendChild(section);
}
// ["HTML.json", "CSS.json", "javascript.json", "DSA.json", "Cplusplus.json", "JAVA.json", "PHP.json", "python.json"]; // Add file names
