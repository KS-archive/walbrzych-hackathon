import axios from 'axios';
import { GET_EVENTS, GET_MARKERS, TOGGLE_SIDEBAR, UPDATE_QUERY, CREATE_MARKERS_TO_EVENTS, TOGGLE_LIGHT } from './types';

export function getEvents(page = 0, limit = 20, query = '', filters = {}) {
  const url = `${__ROOT_URL__}api/events`;
  const mainData = {
    page, limit, query, filters,
  };
  const request = axios.post(url, mainData);

  return (dispatch) => {
    request.then(({ data }) => {
      const events = data.data;
      const markers = data.data.map((marker) => {
        return {
          title: marker.name,
          label: 'A',
          location: {
            lat: marker.place.lat,
            lng: marker.place.lng,
          },
          coverImg: marker.coverImg,
          description: marker.description,
          category: marker.category,
        };
      });

      dispatch({
        type: GET_EVENTS,
        payload: events,
      });
      dispatch({
        type: GET_MARKERS,
        payload: markers,
      });
    }, (err) => { console.log(err.response); });
  };
}

export function toggleSidebar(value = null) {
  return {
    type: TOGGLE_SIDEBAR,
    payload: value,
  };
}

export function updateQuery(query = '', callback = () => {}) {
  callback();
  return {
    type: UPDATE_QUERY,
    payload: query,
  };
}

export function createMarkersToEvents(markers) {
  return {
    type: CREATE_MARKERS_TO_EVENTS,
    payload: markers,
  };
}
