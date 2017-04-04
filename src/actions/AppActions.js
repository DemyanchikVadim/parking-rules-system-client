import axios from 'axios';
import { SET_REPORTS, LINK_DELETED } from '../constants/AppConstants';

export function setReports(links) {
  return {
    type: SET_REPORTS,
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
    return axios.delete(`/api/reports/${id}`)
      .then(data => dispatch(linkDeleted(id)));
  }
}

export function fetchReports() {
  return dispatch => {
    axios.get('/api/reports')
      .then(res => dispatch(setReports(res.data)));
  };
}
