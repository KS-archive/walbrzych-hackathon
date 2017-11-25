import { combineReducers } from 'redux';
import eventsReducer from './eventsReducer';
import markersReducer from './markersReducer';
import sidebarReducer from './sidebarReducer';

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  events: eventsReducer,
  markers: markersReducer,
});

export default rootReducer;
