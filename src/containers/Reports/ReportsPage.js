import { connect } from 'react-redux';
import React from 'react';
import ReportsList from '../../components/Reports/ReportsList';
import { fetchLinks, deleteLink } from '../../actions/AppActions';

class ReportsPage extends React.Component {
  componentDidMount() {
    this.props.fetchLinks();
  }
  render() {
    return (
      <div className="container">
        <ReportsList links={this.props.links} deleteLink={this.props.deleteLink}/>
      </div>
    );
  }
}

ReportsPage.propTypes = {
  links: React.PropTypes.array.isRequired,
  fetchLinks: React.PropTypes.func.isRequired,
  deleteLink: React.PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    links: state.reports
  };
}

export default connect(mapStateToProps, { fetchLinks, deleteLink })(ReportsPage);
