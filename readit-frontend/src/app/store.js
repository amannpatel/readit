import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
// import postsReducer from "../features/posts/postsSlice";
// import userReducer from "../features/users/userSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    // posts: postsReducer,
    // users: userReducer,
  },
});

export default store;
