import { csrfFetch } from "./csrf";

const LOAD_COMMENTS = "comments/load";
const ADD_COMMENT = "comment/add";
const DELETE_COMMENT = "comment/delete";
const EDIT_COMMENT = "comment/edit";

const loadComments = (payload) => {
  return {
    type: LOAD_COMMENTS,
    payload,
  };
};

const addComment = (payload) => {
  return {
    type: ADD_COMMENT,
    payload,
  };
};

const deleteComment = (payload) => {
  return {
    type: DELETE_COMMENT,
    payload,
  };
};

const editComment = (payload) => {
  return {
    type: EDIT_COMMENT,
    payload,
  };
};

export const fetchComments = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/songs/${id}/comments`);

  if (res.ok) {
    const data = await res.json();
    dispatch(loadComments(data));
  }
};

export const fetchAddComment = (comment, id) => async (dispatch) => {
  const res = await csrfFetch(`/api/songs/${id}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(comment),
  });

  if (res.ok) {
    const data = await res.json();
    dispatch(addComment(data));
    return data;
  }
};

export const fetchDeleteComment = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/comments/${id}`, {
    method: "DELETE",
  });

  if (res.ok) {
    dispatch(deleteComment(id));
  }
};

export const fetchEditComment = (comment, id) => async (dispatch) => {
  const res = await csrfFetch(`/api/comments/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(comment),
  });

  if (res.ok) {
    const data = await res.json();
    dispatch(editComment(data));
    return data;
  }
};

const commentReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case LOAD_COMMENTS:
      newState = {};
      action.payload.Comments.forEach((comment) => {
        newState[comment.id] = comment;
      });
      return newState;
    case ADD_COMMENT:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    case DELETE_COMMENT:
      newState = { ...state };
      delete newState[action.payload];
      return newState;
    case EDIT_COMMENT:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    default:
      return state;
  }
};

export default commentReducer;
