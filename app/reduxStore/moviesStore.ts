import { createSlice } from "@reduxjs/toolkit";

const netflixMoviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPLayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    trailerVedioKey: null,
    isLoader: true,
  },
  reducers: {
    addPlayingMovies: (state, action) => {
      state.nowPLayingMovies = action.payload;
    },
    trailerVedio: (state, action) => {
      state.trailerVedioKey = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    setIsLoader: (state, action) => {
      state.isLoader = action.payload;
    },
  },
});

export const {
  addPlayingMovies,
  trailerVedio,
  addPopularMovies,
  addTopRatedMovies,
  setIsLoader,
} = netflixMoviesSlice.actions;

export default netflixMoviesSlice.reducer;
