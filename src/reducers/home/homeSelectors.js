import {createSelector} from 'reselect';

const selectAllUsers = state => state.home.get('allUsers');

const getAllUsers = createSelector(
  selectAllUsers,
    (users) => users.toJS(),
);

export {getAllUsers};
