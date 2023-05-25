import { Store } from "../core";

export interface SimpleMovie {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

interface DetailedMovie {
  Title: string;
  Poster: string;
  Ratings: Rating[];
  Production: string;
  Genre: string;
  Director: string;
  Actors: string;
  Plot: string;
  Country: string;
  Runtime: string;
  Released: string;
}

interface Rating {
  Source: string;
  Value: string;
}

interface State {
  searchText: string;
  page: number;
  movies: SimpleMovie[];
  movie: DetailedMovie;
  pageMax: number;
  loading: boolean;
  message: string;
}

const store = new Store<State>({
  searchText: "",
  page: 1,
  movies: [],
  movie: {} as DetailedMovie,
  pageMax: 1,
  loading: false,
  message: "Search for the movie title!",
});

export default store;

export const searchMovies = async (page: number) => {
  store.state.loading = true;
  store.state.page = page;

  if (page === 1) {
    store.state.movies = [];
    store.state.message = "";
  }

  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=7035c60c&s=${store.state.searchText}&page=${page}`
    );

    const { Search, totalResults, Response, Error } = await response.json();

    if (Response === "True") {
      store.state.movies = [...store.state.movies, ...Search];
      store.state.pageMax = Math.ceil(Number(totalResults) / 10);
    } else {
      store.state.message = Error;
    }
  } catch (error) {
    console.error("searchMovies", error);
  } finally {
    store.state.loading = false;
  }
};

export const getMovieDetails = async (id: string) => {
  try {
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=7035c60c&i=${id}&plot=full`
    );
    store.state.movie = await res.json();
  } catch (error) {
    console.error("getMovieDetails", error);
  }
};
