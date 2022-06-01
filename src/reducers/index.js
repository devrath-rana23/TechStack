//What we have done here is create reducers
import {combineReducers} from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

const reducers = combineReducers({
  libraries: LibraryReducer,
  selectionLibraryId: SelectionReducer,
});

export default reducers;
