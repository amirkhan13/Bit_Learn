document.addEventListener('DOMContentLoaded', async () => {
    try {
        
        const response = await fetch('./youtubeplaylist.json');
        const data = await response.json();


        const playlists = data.playlists;

        const videoGrid = document.querySelector('.video-grid');

   
        playlists.forEach((playlist, index) => {
            const cardClass = `video-card-${index + 1}`;
            const cardHTML = `
                <div class="video-card ${cardClass}" onclick="window.location.href='https://www.youtube.com/playlist?list=${playlist.playlistId}'">
                    <img src="${playlist.imageUrl}" alt="${playlist.title}" width="${playlist.width}" height="${playlist.height}">
                    <div class="card-content">
                        <h3>${playlist.title}</h3>
                        <p>${playlist.description}</p>
                        <span>${playlist.lessons} Videos</span>
                    </div>
                </div>
            `;
            videoGrid.innerHTML += cardHTML;
        });
    } catch (error) {
        console.error('Error loading playlists:', error);
    }
});