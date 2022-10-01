import { csrfFetch } from "./csrf";

const LOAD_SONGS = "songs/load";

const loadSongs = (songs) => {
  return {
    type: LOAD_SONGS,
    payload: songs,
  };
};

export const fetchSongs = () => async (dispatch) => {
  const res = await csrfFetch("/api/songs");
  const songs = await res.json();

  dispatch(loadSongs(songs));
};

const songReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case LOAD_SONGS:
      newState = { ...state };
      const songs = action.payload.Songs;
      songs.forEach((song) => {
        newState[song.id] = song;
      });
      return newState;
    default:
      return state;
  }
};

export default songReducer;
