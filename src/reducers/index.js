import { combineReducers } from 'redux';
import eventsReducer from './eventsReducer';
import markersReducer from './markersReducer';

const rootReducer = combineReducers({
  events: eventsReducer,
  markers: markersReducer,
});

export default rootReducer;
