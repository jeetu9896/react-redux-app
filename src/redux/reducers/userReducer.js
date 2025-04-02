import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    FETCH_USER_DETAIL_REQUEST,
    FETCH_USER_DETAIL_SUCCESS,
    FETCH_USER_DETAIL_FAILURE,
  } from "../action/userAction";
  
  // Initial State
  const initialState = {
    users: [],
    user: null,
    loading: false,
    error: null,
  };
  
  // Reducer
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      // Users Fetching
      case FETCH_USERS_REQUEST:
        return { ...state, loading: true, error: null };
      case FETCH_USERS_SUCCESS:
        return { ...state, loading: false, users: action.payload };
      case FETCH_USERS_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default userReducer;
  