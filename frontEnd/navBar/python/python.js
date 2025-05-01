const apiUrl = 'python.json';

// Define an asynchronous function to fetch JSON
async function fetchJsonData(url) {
  try {
    // Make the HTTP request
    const response = await fetch(url);

    // Check if the response is ok (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the JSON from the response
    const data = await response.json();

    return data; // Return the JSON data
  } catch (error) {
    // Handle errors (e.g., network errors)
    console.error('Error fetching data:', error);
    return null; // Return null in case of an error
  }
}

// Recursively display JSON data in a structured format
function displayJsonData(data, parentElement) {
  for (const key in data) {
    if (typeof data[key] === 'object' && !Array.isArray(data[key])) {
      // Create a title for the nested object
      const title = document.createElement('h2');
      title.textContent = formatTitle(key);
      title.style.color = '#FFB200';
      parentElement.appendChild(title);

      // Create a new container for the nested data
      const container = document.createElement('div');
      container.style.marginLeft = '50px';
      container.style.maxWidth = '75%';
      parentElement.appendChild(container);

      // Recursively display nested data
      displayJsonData(data[key], container);
    } else if (key === "Code") {
      // If the key is "Code", display it in a terminal-like format
      const codeTitle = document.createElement('h4');
      codeTitle.textContent = "Code:";
      parentElement.appendChild(codeTitle);

      const codeContainer = document.createElement('pre');
      codeContainer.style.maxWidth = "60%";
      codeContainer.style.backgroundColor = "#0B192C";
      codeContainer.style.color = "#ebfc00";
      codeContainer.style.padding = "15px";
      codeContainer.style.borderRadius = "5px";
      codeContainer.style.fontFamily = "'Courier New', Courier, monospace";
      codeContainer.style.whiteSpace = "pre-wrap";
      codeContainer.style.wordWrap = "break-word";
      codeContainer.textContent = data[key]; // Display the code inside the pre tag
      parentElement.appendChild(codeContainer);
    } else {
      // Display key-value pairs
      const subtitle = document.createElement('h4');
      subtitle.textContent = formatTitle(key);
      parentElement.appendChild(subtitle);

      const content = document.createElement('p');
      content.textContent = data[key];
      parentElement.appendChild(content);
    }
  }
}

// Format keys into human-readable titles
function formatTitle(key) {
  return key
    .replace(/_/g, ' ') // Replace underscores with spaces
    .replace(/\b\w/g, char => char.toUpperCase()); // Capitalize first letters
}

// Fetch and display the JSON data
fetchJsonData(apiUrl).then(data => {
  if (data) {
    const container = document.createElement('div');
    document.body.appendChild(container);

    displayJsonData(data, container);
  }
});

let lastScrollPosition = 0;
const footer = document.getElementById('footer');

window.addEventListener('scroll', () => {
  const currentScrollPosition = window.scrollY;

  if (currentScrollPosition > lastScrollPosition) {
    // Scrolling down - hide footer
    footer.classList.add('hidden');
  } else {
    // Scrolling up - show footer
    footer.classList.remove('hidden');
  }

  // Update the last scroll position
  lastScrollPosition = currentScrollPosition;
});
