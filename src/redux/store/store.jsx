import {applyMiddleware, createStore} from 'redux';
import reducer from '../reducers/index.jsx';
import storage from 'redux-persist/lib/storage';
import {persistReducer, persistStore} from "redux-persist";
import thunkMiddleware from 'redux-thunk';

const persistConfig = {
    key:'root-nayan',
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

// export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export const store = createStore(
    persistedReducer,
    applyMiddleware(thunkMiddleware)
);

export const persistor = persistStore(store);