import { TOGGLE_SIDEBAR } from '../actions/types';

export default function (state = true, action) {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return (action.payload !== null) ? action.payload : !state;

    default:
      return state;
  }
}
