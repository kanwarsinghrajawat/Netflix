import { createSlice } from "@reduxjs/toolkit";

const netflixMoviesSlice = createSlice({
  name: "movies",
  initialState: { nowPLayingMovies: null, trailerVedioKey: null },
  reducers: {
    addPlayingMovies: (state, action) => {
      state.nowPLayingMovies = action.payload;
    },
    trailerVedio: (state, action) => {
      state.trailerVedioKey = action.payload;
    },
  },
});

export const { addPlayingMovies, trailerVedio } = netflixMoviesSlice.actions;

export default netflixMoviesSlice.reducer;
