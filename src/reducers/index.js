import {combineReducers} from 'redux'
import { connectRouter } from 'connected-react-router';
import homeReducer from './home/homeReducer';

export default function createRootReducer(history) {
  return combineReducers({
    router: connectRouter(history),
    home: homeReducer,
  })
}
