import { combineReducers } from 'redux';
import eventsReducer from './eventsReducer';
import markersReducer from './markersReducer';
import markersToEventsReducer from './markersToEventsReducer';
import sidebarReducer from './sidebarReducer';
import lightReducer from './lightReducer';

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  events: eventsReducer,
  markers: markersReducer,
  markersToEvents: markersToEventsReducer,
  light: lightReducer,
});

export default rootReducer;
