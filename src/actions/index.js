import axios from 'axios';
import { GET_EVENTS, GET_MARKERS } from './types';

export function getEvents(page, limit = 20, query, filters, successCallback, errorCallback) {
  const url = `${__ROOT_URL__}api/events`;
  const mainData = {
    page, limit, query, filters,
  };
  const request = axios.post(url, mainData);

  return (dispatch) => {
    request.then(({ data }) => {
      const events = [];
      const markers = [];

      dispatch({
        type: GET_EVENTS,
        payload: events,
      });
      dispatch({
        type: GET_MARKERS,
        payload: markers,
      });
      successCallback();
    }, () => { errorCallback(); });
  };
}
