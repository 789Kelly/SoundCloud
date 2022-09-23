import { csrfFetch } from "./csrf";

const LOAD_PLAYLISTS = "playlists/load";
const ADD_PLAYLIST = "playlists/add";
const DELETE_PLAYLIST = "playlists/delete";

const loadPlaylists = (playlists) => {
  return {
    type: LOAD_PLAYLISTS,
    payload: playlists,
  };
};

export const addPlaylist = (playlist) => {
  return {
    type: ADD_PLAYLIST,
    payload: playlist,
  };
};

export const deletePlaylist = (id) => {
  return {
    type: DELETE_PLAYLIST,
    payload: id,
  };
};

export const fetchPlaylists = () => async (dispatch) => {
  const res = await csrfFetch("/playlists");
  const playlists = await res.json();

  dispatch(loadPlaylists(playlists));
};

export const fetchPlaylist = (playlist) => async (dispatch) => {
  const { name, imageUrl } = playlist;
  const response = await csrfFetch("/playlists", {
    method: "POST",
    body: JSON.stringify({
      name,
      imageUrl,
    }),
  });
  const data = await response.json();
  dispatch(addPlaylist(data));
  return response;
};

const initialState = { entries: [] };

const playlistReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD_PLAYLISTS:
      return { ...state, entries: [...action.payload] };
    case ADD_PLAYLIST:
      newState = { ...state };
      newState[action.payload.id] = action.payload;
      return newState;
    case DELETE_PLAYLIST:
      newState = { ...state };
      delete newState[action.payload];
      return newState;
    default:
      return state;
  }
};

export default playlistReducer;
