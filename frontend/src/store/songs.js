import { csrfFetch } from "./csrf";

const LOAD_SONGS = "songs/load";
const LOAD_ALBUM_SONGS = "albumSongs/load";
const ADD_SONG = "song/add";
const DELETE_SONG = "song/delete";
const LOAD_SONG = "song/load";
const EDIT_SONG = "song/edit";

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

const addSong = (payload) => {
  return {
    type: ADD_SONG,
    payload,
  };
};

const deleteSong = (payload) => {
  return {
    type: DELETE_SONG,
    payload,
  };
};

const loadSong = (payload) => {
  return {
    type: LOAD_SONG,
    payload,
  };
};

const editSong = (payload) => {
  return {
    type: EDIT_SONG,
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

export const fetchAddSong = (song, id) => async (dispatch) => {
  const res = await csrfFetch(`/api/albums/${id}/songs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(song),
  });

  if (res.ok) {
    const data = await res.json();
    dispatch(addSong(data));
    return data;
  }
};

export const fetchDeleteSong = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/songs/${id}`, {
    method: "DELETE",
  });

  if (res.ok) {
    dispatch(deleteSong(id));
  }
};

export const fetchSong = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/songs/${id}`);

  if (res.ok) {
    const data = await res.json();
    dispatch(loadSong(data));
  }
};

export const fetchEditSong = (song, id) => async (dispatch) => {
  const res = await csrfFetch(`/api/songs/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(song),
  });

  if (res.ok) {
    const data = await res.json();
    dispatch(editSong(data));
    return data;
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
    case ADD_SONG:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    case DELETE_SONG:
      newState = { ...state };
      delete newState[action.payload];
      return newState;
    case LOAD_SONG:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    case EDIT_SONG:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    default:
      return state;
  }
};

export default songReducer;
