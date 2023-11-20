import { configureStore } from "@reduxjs/toolkit";
import netflixMoviesSlice from "./moviesStore";
export const store = configureStore({
  reducer: {
    movies: netflixMoviesSlice,
  },
});
