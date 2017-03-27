import React from 'react';
import ReportGard from './ReportCard';

export default function ReportsList({ links, deleteLink }) {
  const emptyMessage = (
    <p>There is no links yet</p>
  );
  
  const linksList = (
    <div className="ui one cards">
      { links.map(link => <ReportGard link={link} key={link._id} deleteLink={deleteLink}/>) }
    </div>
  );
  
  return (
    <div>
      { links.length === 0 ? emptyMessage : linksList }
    </div>
  );
}

ReportsList.propTypes = {
  links: React.PropTypes.array.isRequired,
  deleteLink: React.PropTypes.func.isRequired
};
