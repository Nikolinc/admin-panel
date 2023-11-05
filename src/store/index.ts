import { configureStore } from "@reduxjs/toolkit";
import UserSlices from "./slices/userSlices";
import AuthSlices from "./slices/authSlices";

const store = configureStore({
  reducer: {
    UserList: UserSlices.reducer,
    Auth: AuthSlices.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
