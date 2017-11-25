import { CREATE_MARKERS_TO_EVENTS } from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case CREATE_MARKERS_TO_EVENTS:
      return action.payload;

    default:
      return state;
  }
}
