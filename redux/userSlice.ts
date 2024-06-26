import { UserType, initialUser } from '@/types/user.type';
import { createSlice } from '@reduxjs/toolkit';

export const UserSlice = createSlice({
  name: 'user',
  initialState: initialUser,
  reducers: {
    login: (state: UserType, action) => {
      state.id = action.payload.id;
    },
    logout: (state: any) => {
      state.id = initialUser.id;
    },
  },
});

export const {
  login,
  logout,
} = UserSlice.actions;

export default UserSlice.reducer;
