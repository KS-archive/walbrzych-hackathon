import { TOGGLE_LIGHT } from '../actions/types';

export default function (state = true, action) {
  switch (action.type) {
    case TOGGLE_LIGHT:
      return !state;

    default:
      return state;
  }
}
