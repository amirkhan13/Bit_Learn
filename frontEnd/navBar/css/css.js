
const apiUrl = 'css.json';

async function fetchJsonData(url) {
  try {
  
    const response = await fetch(url);

 
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }


    const data = await response.json();

    return data; 
  } catch (error) {

    console.error('Error fetching data:', error);
    return null; 
  }
}

function displayJsonData(data, parentElement) {
  for (const key in data) {
    if (typeof data[key] === 'object' && !Array.isArray(data[key])) {
  
      const title = document.createElement('h2');
      title.textContent = formatTitle(key);
      title.style.color = '#FFB200';
      parentElement.appendChild(title);


      const container = document.createElement('div');
      container.style.marginLeft = '50px';
      container.style.maxWidth = '75%';
      parentElement.appendChild(container);

      displayJsonData(data[key], container);
    } else if (key === "code") {
   
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
      codeContainer.textContent = data[key]; 
      parentElement.appendChild(codeContainer);
    } else {
 
      const subtitle = document.createElement('h3');
      subtitle.textContent = formatTitle(key);
      parentElement.appendChild(subtitle);

      const content = document.createElement('p');
      content.textContent = data[key];
      content.style.paddingLeft = '30px';
      parentElement.appendChild(content);
    }
  }
}


function formatTitle(key) {
  return key
    .replace(/_/g, ' ') 
    .replace(/\b\w/g, char => char.toUpperCase()); 
}


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

    footer.classList.add('hidden');
  } else {
    
    footer.classList.remove('hidden');
  }


  lastScrollPosition = currentScrollPosition;
});
