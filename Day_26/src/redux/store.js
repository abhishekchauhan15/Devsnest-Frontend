import {createStore} from 'redux';
// import {reducer} from './reducer';
import {userFormReducer} from './userForm/reducer';

const store = createStore(userFormReducer);

export default store;

