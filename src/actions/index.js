import axios from 'axios';
import { GET_EVENTS, GET_MARKERS } from './types';

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
          description: marker.description,
        }
      });

      dispatch({
        type: GET_EVENTS,
        payload: events,
      });
      dispatch({
        type: GET_MARKERS,
        payload: markers,
      });
    });
  };
}
