class SearchApi {
  static getAllMovies() {
    return fetch('https://api.vimeo.com/videos?filter=trending&access_token=c4c2445bca6c749082024e5d26c9385f').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default SearchApi;
