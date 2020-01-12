import {fromJS, setIn} from 'immutable';
import {SET_USERS_TO_STORE} from '../../actions/actionTypes'

const initialState = fromJS({
  allUsers: []
});

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS_TO_STORE:
      return setIn(state, ['allUsers'], fromJS(action.payload));
    default:
      return state;
  }
};

export default homeReducer;
