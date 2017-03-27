import { combineReducers } from 'redux';
import reports from './reports';
import auth from './auth';
import flashMessages from './flashMessages';

export default combineReducers({
  reports,
  auth,
  flashMessages
});
