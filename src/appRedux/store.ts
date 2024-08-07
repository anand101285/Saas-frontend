import { configureStore, Action, Reducer } from '@reduxjs/toolkit';
import { env } from 'config';
import { useDispatch } from 'react-redux';
import { ThunkAction } from 'redux-thunk';
import { Environment } from 'types';
// Reducers
import appReducer, { rootReducer } from './reducers';
// import Socket from './middleware/socket/socketMiddleware';

/**
 *    REDUX TOOL KIT CONFIGURED HERE
 */

export type RootState = ReturnType<typeof appReducer>;

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

const store = configureStore({
  reducer: rootReducer as Reducer,
  // middleware: (getDefaultMiddleware) => {
  //   return getDefaultMiddleware({ serializableCheck: false }).concat([Socket.SocketMiddleware()]);
  // },
  devTools: env === Environment.Development
});

export type AppDispatch = typeof store.dispatch;
/**
 * App dispatch as a replacement for default useDispatch hook
 *
 * @returns {AppDispatch} returns app dispatch instance for store.dispatch
 */
export const useAppDispatch = () => {
  return useDispatch<AppDispatch>();
};

export default store;
