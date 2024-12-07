// Store the API URL in a variable
const apiUrl = './textJson/css.json';

// Define an asynchronous function to fetch JSON
async function fetchJsonData(url) {
  try {
    // Make the HTTP request
    const response = await fetch(url);

    // Check if the response is ok (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error!`);
    }

    // Parse the JSON from the response
    const data = await response.json();

    // Log the data or process it
    console.log(data);

    return data; // Return the JSON data
  } catch (error) {
    // Handle errors (e.g., network errors)
    console.error('Error fetching data:', error);
    return null; // Return null in case of an error
  }
}

// Fetch the JSON data and use it to create DOM elements
fetchJsonData(apiUrl).then((data) => {
  if (data) {
    // Create an h1 element
    let h4 = document.createElement('h4');
    h4.innerHTML = data.introduction.what_is_css; // Accessing the JSON content
    document.body.appendChild(h4);

    let h3 = document.createElement("h3");
    h3.innerHTML =data.basics.syntax.description;
    document.body.appendChild(h3);
  }
});
