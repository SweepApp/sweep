import { combineReducers, configureStore } from "redux";
import { movieDetailsSlice } from "./movieDetails/reducer";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['movieDetails'],
};

const rootReducer = combineReducers({
  movieDetails: movieDetailsSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export const clearPersistedState = () => {
  persistor.purge();
}