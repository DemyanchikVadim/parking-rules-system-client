import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/authActions';

import ReportsPage from './Reports/ReportsPage';
import LoginPage from '../components/Login/LoginPage';
import SignupPage from '../components/Signup/SignupPage';
import HomePage from './Home/HomePage';
import Sidewalk from '../components/Instructions/Sidewalk';
import ParkingSecondRow from '../components/Instructions/ParkingSecondRow';
import StopNotAllowed from '../components/Instructions/StopNotAllowed';
import ParkingDisabled from '../components/Instructions/ParkingDisabled';
import Crosswalk from '../components/Instructions/Crosswalk';
import NotFound from '../components/Notfound/NotFound';
import FlashMessagList from './Flash/FlashMessagesList';

import requireAuth from '../utils/requireAuth';

const ActiveLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
    <Link className={match ? 'active item' : 'item'} to={to}>{label}</Link>
  )} />
);

class App extends React.Component {
  logout = (e) => {
    e.preventDefault();

    this.props.logout();
  };

  render() {
    const { isAuthenticated } = this.props.auth;

    const userLinks = (
      <div>
      <div className="ui inverted menu blue">
        <ActiveLink  activeOnlyWhenExact to="/" label="Система фиксации автонарушений" />
        <div className="right menu">
          <a className="item" href="#" onClick={this.logout} >Выйти</a>
        </div>
      </div>
      <div className="ui inverted vertical menu left floated blue">
      <ActiveLink  activeOnlyWhenExact to="/" label="Главная" />
      <ActiveLink  activeOnlyWhenExact to="/reports" label="Заявки" />
      <ActiveLink  activeOnlyWhenExact to="/rules" label="Правила" />
      <ActiveLink  activeOnlyWhenExact to="/sidewalk" label="Инструкции" />
      </div>
      </div>
    );

    const guestLinks = (
      <div >
      </div>
    );

    return (
      <div>
        {isAuthenticated ? userLinks : guestLinks}
        <FlashMessagList />
        <Switch>
          <Route exact path="/" component={requireAuth(HomePage)} />
          <Route path="/reports" component={requireAuth(ReportsPage)} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/sidewalk" component={Sidewalk} />
          <Route path="/parkingsecondrow" component={ParkingSecondRow} />
          <Route path="/stopnotallowed" component={StopNotAllowed} />
          <Route path="/parkingdisabled" component={ParkingDisabled} />
          <Route path="/Crosswalk" component={Crosswalk} />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}

App.propTypes = {
  auth: React.PropTypes.object.isRequired,
  logout: React.PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps, { logout })(App);
