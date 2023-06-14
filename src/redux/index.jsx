import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { movieDetailsSlice } from "./movieDetails/reducer";
import { userSlice } from './auth/reducer';
import { statsSlice } from './stats/reducer';
import { friendSlice } from './friend/reducer';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['movieDetails'],
};

const rootReducer = combineReducers({
  movieDetails: movieDetailsSlice.reducer,
  usersData: userSlice.reducer,
  statsDetails: statsSlice.reducer,
  friendsData: friendSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk];

export const store = configureStore({
  reducer: persistedReducer,
  middleware: middleware,
});

export const persistor = persistStore(store);

export const clearPersistedState = () => {
  persistor.purge();
}