const searchInput = document.getElementById('music');
const searchButton = document.getElementById('search');

const createTrack = (track) => {
    const audio = new Audio(track)
    audio.controls = true
    return audio;
}

const searchMusic = async (music) => {
    const apiUrl = `https://itunes.apple.com/search?entity=musicTrack&term=${music}`
    const response = await fetch(apiUrl);
    const { results } = await response.json();
    console.log(results);
    
    const searchResults = results.map(
      ({ artistName, collectionName, previewUrl, trackName }) => {
        const p = document.createElement('p');
        p.innerText = `Artista: ${artistName}
Álbum: ${collectionName}
Música: ${trackName}`
        const searchResults = document.getElementById('results');
        searchResults.appendChild(p);
        searchResults.appendChild(createTrack(previewUrl));
      })
    return searchResults;
}

searchButton.addEventListener('click', async () => await searchMusic(searchInput.value));