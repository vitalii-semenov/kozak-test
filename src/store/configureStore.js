import { createStore } from 'redux';
import createRootReducer from '../reducers';

const configureStore = (history) => {
  return createStore(createRootReducer(history), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
};

export { configureStore };
