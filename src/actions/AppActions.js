import axios from 'axios';
import { SET_LINKS, LINK_DELETED } from '../constants/AppConstants';

export function setLinks(links) {
  return {
    type: SET_LINKS,
    links
  };
}

export function linkDeleted(linkId) {
  return {
    type: LINK_DELETED,
    linkId
  }
}

export function deleteLink(id) {
  return dispatch => {
    return axios.delete(`/api/links/${id}`)
      .then(data => dispatch(linkDeleted(id)));
  }
}

export function fetchLinks() {
  return dispatch => {
    axios.get('/api/links')
      .then(res => dispatch(setLinks(res.data)));
  };
}
