import { csrfFetch } from "./csrf";

const LOAD_PLAYLISTS = "playlists/load";
const ADD_PLAYLIST = "playlists/add";
const DELETE_PLAYLIST = "playlists/delete";
const EDIT_PLAYLIST = "playlists/edit";
const LOAD_SONGS = "playlists/songs/load";

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

export const editPlaylist = (id) => {
  return {
    type: EDIT_PLAYLIST,
    payload: id,
  };
};

const loadSongs = (payload) => {
  return {
    type: LOAD_SONGS,
    payload,
  };
};

export const fetchPlaylists = () => async (dispatch) => {
  const res = await csrfFetch("/api/users/current/playlists");
  const playlists = await res.json();

  dispatch(loadPlaylists(playlists));
};

export const fetchPlaylist = (playlist) => async (dispatch) => {
  const { name, imageUrl } = playlist;
  const response = await csrfFetch("/api/playlists", {
    method: "POST",
    body: JSON.stringify({
      name,
      imageUrl,
    }),
  });
  const data = await response.json();
  dispatch(addPlaylist(data));
  return data;
};

export const fetchDeletePlaylist = (payload) => async (dispatch) => {
  const res = await csrfFetch(`/api/playlists/${payload}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ payload }),
  });
  dispatch(deletePlaylist(payload));
  console.log(res);
};

export const fetchEditPlaylist = (playlist) => async (dispatch) => {
  const { name, previewImage } = playlist;
  const res = await csrfFetch(`/api/playlists/${playlist.id}`, {
    method: "PUT",
    body: JSON.stringify({
      name,
      imageUrl: previewImage,
    }),
  });
  const data = await res.json();
  dispatch(editPlaylist(data));
  return data;
};

export const fetchSongs = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/playlists/${id}`);
  const data = await res.json();

  dispatch(loadSongs(data.Songs));
};

const playlistReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case LOAD_PLAYLISTS:
      newState = { ...state };
      const playlists = action.payload.Playlists;
      playlists.forEach((playlist) => {
        newState[playlist.id] = playlist;
      });
      return newState;
    case ADD_PLAYLIST:
      newState = { ...state };
      newState[action.payload.id] = action.payload;
      return newState;
    case DELETE_PLAYLIST:
      newState = { ...state };
      delete newState[action.payload];
      return newState;
    case EDIT_PLAYLIST:
      newState = { ...state };
      newState[action.payload.id] = action.payload;
      return newState;
    case LOAD_SONGS:
      newState = { ...state };
      newState.Songs = action.payload;
      return newState;
    default:
      return state;
  }
};

export default playlistReducer;
