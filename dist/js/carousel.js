const API_KEY = '6531a386ed2068e9261ec3fa0001cba6';
const URL = 'https://api.themoviedb.org/3';

async function searchMovies(query) {
  const response = await fetch(`${URL}/discover/movie?api_key=${API_KEY}&with_genres=10749&with_original_language=id`);
  const data = await response.json();
  console.log(data.results);
  return displayMovies(data.results)
}

  const Carousel = document.querySelector('.carousel'); 

  searchMovies('naruto');


  const genreNameMap = {
            28: "Action",
            12: "Adventure",
            16: "Animation",
            35: "Comedy",
            80: "Crime",
            99: "Documentary",
            18: "Drama",
            10751: "Family",
            14: "Fantasy",
            36: "History",
            27: "Horror",
            10402: "Music",
            9648: "Mystery",
            10749: "Romance",
            878: "Science Fiction",
            10770: "TV Movie",
            53: "Thriller",
            10752: "War",
            37: "Western"
        };

  function getGenresName(genreIDs) {
    return genreIDs.map(id => genreNameMap[id] || "tidak diketahui").join(", ");
  }

  const languageNameMap = {
          "en": "English",
          "id": "Indonesian",
          "ja": "Japanese",
          "fr": "French",
          "es": "Spanish",
          "de": "German",
          "zh": "Chinese",
          "ko": "Korean",
          "hi": "Hindi",
          "it": "Italian",
          "ru": "Russian",
          "pt": "Portuguese",
          "ar": "Arabic",
          "th": "Thai",
          "tr": "Turkish"
      };

  function getlanguageName(lang) {
    return languageNameMap[lang] || "tidak diketahui"
  }


  function displayMovies(movies) {
    Carousel.innerHTML = "";
    movies.forEach(movie => {
        const moviecard = `
                      <div class="carousel-item h-full">
                        <div class="relative w-[500px] h-72 shadow-xl rounded-lg overflow-hidden bg-cover bg-center my-auto" style="background-image: url('/src/img/cruella.png')">
                            <div class="absolute inset-0 bg-black bg-opacity-50"></div>
                            <div class="relative z-10 flex h-full items-center px-6 text-white">
                                <figure class="w-1/3">
                                    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="Cruella" class="h-48 rounded-lg shadow-lg" />
                                </figure>
                                <div class="w-2/3 p-4 bg-black bg-opacity-30 backdrop-blur-md rounded-lg">
                                    <h2 class="card-title text-center mx-auto">${movie.title}</h2>
                                    <p>Tanggal Rilis: ${movie.release_date}</p>
                                    <p>Genre: ${getGenresName(movie.genre_ids)}</p>
                                    <p>Bahasa: ${getlanguageName(movie.original_language)}</p>
                                    <p>Popularitas: ${movie.vote_average}</p>
                                    <div class="rating">
                                        <input type="radio" name="rating-1" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-1" class="mask mask-star-2 bg-orange-400" checked />
                                        <input type="radio" name="rating-1" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-1" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-1" class="mask mask-star-2 bg-orange-400" />
                                    </div>
                                </div>
                            </div>
                        </div> `;
        Carousel.innerHTML += moviecard;
    });
  }
