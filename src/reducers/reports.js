import { SET_REPORTS, LINK_DELETED } from '../constants/AppConstants';

export default function links(state = [], action = {}) {
  switch (action.type) {
    case LINK_DELETED:
      return state.filter(item => item._id !== action.linkId);
      
    case SET_REPORTS:
      return action.links;
    
    default: return state;
  }
}
