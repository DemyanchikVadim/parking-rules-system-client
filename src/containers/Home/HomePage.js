import React from 'react';
import { connect } from 'react-redux';
import { fetchReports } from '../../actions/AppActions';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
  componentDidMount() {
    this.props.fetchReports();
  }

  render() {
    return (
      <div className="ui four cards">
        <div className="card">
          <div className="content">
            <div className="header center aligned"><h2>Стоянка на тротуаре</h2></div>
            <br />
            <div className="header right floated">Заявок: {this.props.reports.length}</div>
          </div>
          <Link to={`/reports`} className="ui red button ">Смотреть</Link>
        </div>
        <div className="card">
          <div className="content">
            <div className="header center aligned"><h2>Стоянка на переходе</h2></div>
            <br />
            <div className="header right floated">Заявок: 1</div>
          </div>
          <button className="ui red button">Смотреть</button>
        </div>
        <div className="card">
          <div className="content">
            <div className="header center aligned"><h2>Стоянка на местах для инвалидов</h2></div>
            <br />
            <div className="header right floated">Заявок: 1</div>
          </div>
          <button className="ui red button">Смотреть</button>
        </div>
        <div className="card">
          <div className="content">
            <div className="header center aligned"><h2>Стоянка “Остановка запрещена”</h2></div>
            <br />
            <div className="header right floated">Заявок: 1</div>
          </div>
          <button className="ui red button">Смотреть</button>
        </div>
        <div className="card">
          <div className="content">
            <div className="header center aligned"><h2>Стоянка во втором ряду</h2></div>
            <br />
            <div className="header right floated">Заявок: 1</div>
          </div>
          <button className="ui red button">Смотреть</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    reports: state.reports
  };
}

export default connect(mapStateToProps, { fetchReports })(HomePage);

