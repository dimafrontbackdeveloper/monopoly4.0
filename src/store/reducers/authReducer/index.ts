import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from './Interfaces';

const initialState: AuthState = {
  isAuth: true,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
  },
});

export default authSlice.reducer;
