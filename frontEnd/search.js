const elem = document.getElementById('searchInput');


function Search(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        performSearch();
    }
}


function performSearch() {
    const query = elem.value.trim();
    if (!query) {
        alert("Please enter a search query!");
        return;
    }
    

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const windowWidth = 800; 
    const windowHeight = 1000; 
    
  
    const left = (screenWidth / 2) - (windowWidth / 2);
    const top = (screenHeight / 2) - (windowHeight / 2);
    
  
    const searchUrl = 'https://www.google.com/search?q=' + encodeURIComponent(query);
    const searchWindow = window.open(searchUrl, '_blank', `width=${windowWidth},height=${windowHeight},top=${top},left=${left}`);
    
 
    if (searchWindow) {
        searchWindow.focus();
    } 
}


elem.addEventListener("keyup", Search);


document.querySelector('.search-bar button').addEventListener('click', performSearch);
