import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import profileReducer from './reducers/profileReducer';
import currencysReducer from './reducers/currencysReducer';

const rootReducer = combineReducers({
  profileReducer,
  authReducer,
  currencysReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
