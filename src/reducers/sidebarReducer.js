import { TOGGLE_SIDEBAR } from '../actions/types';

export default function (state = true, action) {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return !state;

    default:
      return state;
  }
}
