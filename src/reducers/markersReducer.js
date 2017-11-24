import { GET_MARKERS } from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case GET_MARKERS:
      return action.payload;

    default:
      return state;
  }
}
