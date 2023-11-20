import { createSlice } from "@reduxjs/toolkit";

const netflixMoviesSlice = createSlice({
  name: "movies",
  initialState: { nowPLayingMovies: null },
  reducers: {
    addPlayingMovies: (state, action) => {
      state.nowPLayingMovies = action.payload;
    },
  },
});

export const { addPlayingMovies } = netflixMoviesSlice.actions;

export default netflixMoviesSlice.reducer;
