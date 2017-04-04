import React from 'react';
import ReportGard from './ReportCard';

export default function ReportsList({ reports, deleteLink }) {
  const emptyMessage = (
    <p>There is no reports yet</p>
  );
  
  const reportsList = (
    <div className="ui one cards">
      { reports.map(report => <ReportGard report={report} key={report._id} deleteLink={deleteLink}/>) }
    </div>
  );
  
  return (
    <div>
      { reports.length === 0 ? emptyMessage : reportsList }
    </div>
  );
}

ReportsList.propTypes = {
  reports: React.PropTypes.array.isRequired,
  deleteLink: React.PropTypes.func.isRequired
};
