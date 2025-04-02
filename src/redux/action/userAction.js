// Action Types
export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

// Action Creators
export const fetchUsersRequest = () => ({ type: FETCH_USERS_REQUEST });
export const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});
export const fetchUsersFailure = (error) => ({
  type: FETCH_USERS_FAILURE,
  payload: error,
});


// Async Actions
export const fetchUsers = () => async (dispatch, getState) => {
  const { users } = getState();
  if (users.length > 0) return; // Prevent fetching if users already exist
  dispatch(fetchUsersRequest());
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) throw new Error("Failed to fetch users");
    const data = await response.json();
    dispatch(fetchUsersSuccess(data));
  } catch (error) {
    dispatch(fetchUsersFailure(error.message));
  }
};

// export const fetchUserDetail = (id) => async (dispatch,getState) => {
//   // Check if user already exists in state
//   // const existingUser = getState().user; 
//   // if (existingUser) return; // Prevent duplicate API calls

//   dispatch(fetchUserDetailRequest());
//   try {
//     const response = await fetch(
//       `https://jsonplaceholder.typicode.com/users/${id}`
//     );
//     if (!response.ok) throw new Error("User not found");
//     const data = await response.json();
//     dispatch(fetchUserDetailSuccess(data));
//   } catch (error) {
//     dispatch(fetchUserDetailFailure(error.message));
//   }
// };
