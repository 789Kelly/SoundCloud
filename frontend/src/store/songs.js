import { csrfFetch } from "./csrf";

const LOAD_SONGS = "songs/load";
const LOAD_ALBUM_SONGS = "albumSongs/load";

const loadSongs = (songs) => {
  return {
    type: LOAD_SONGS,
    payload: songs,
  };
};

const loadAlbumSongs = (payload) => {
  return {
    type: LOAD_ALBUM_SONGS,
    payload,
  };
};

export const fetchSongs = () => async (dispatch) => {
  const res = await csrfFetch("/api/songs");
  const songs = await res.json();

  dispatch(loadSongs(songs));
};

export const fetchAlbumSongs = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/albums/${id}/songs`);

  if (res.ok) {
    const data = await res.json();
    dispatch(loadAlbumSongs(data));
  }
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
    case LOAD_ALBUM_SONGS:
      newState = {};
      action.payload.Songs.forEach((song) => {
        newState[song.id] = song;
      });
      return newState;
    default:
      return state;
  }
};

export default songReducer;
