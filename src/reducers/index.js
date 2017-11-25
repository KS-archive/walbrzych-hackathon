import { combineReducers } from 'redux';
import eventsReducer from './eventsReducer';
import markersReducer from './markersReducer';
import markersToEventsReducer from './markersToEventsReducer';
import sidebarReducer from './sidebarReducer';

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  events: eventsReducer,
  markers: markersReducer,
  markersToEvents: markersToEventsReducer,
});

export default rootReducer;
