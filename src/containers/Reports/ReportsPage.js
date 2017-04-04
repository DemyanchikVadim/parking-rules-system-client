import { connect } from 'react-redux';
import React from 'react';
import ReportsList from '../../components/Reports/ReportsList';
import { fetchReports, deleteLink } from '../../actions/AppActions';

class ReportsPage extends React.Component {
  componentDidMount() {
    this.props.fetchReports();
  }
  render() {
    return (
      <div className="container">
        <ReportsList reports={this.props.reports} deleteLink={this.props.deleteLink}/>
      </div>
    );
  }
}

ReportsPage.propTypes = {
  reports: React.PropTypes.array.isRequired,
  fetchReports: React.PropTypes.func.isRequired,
  deleteLink: React.PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    reports: state.reports
  };
}

export default connect(mapStateToProps, { fetchReports, deleteLink })(ReportsPage);
