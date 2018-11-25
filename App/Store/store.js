import {createStore,applyMiddleware,combineReducers,compose} from 'redux';
import reducer1 from '../reducer/reducer';
import thunk from 'redux-thunk';
const store = createStore(combineReducers({reducer1}),applyMiddleware(thunk));
export default store;