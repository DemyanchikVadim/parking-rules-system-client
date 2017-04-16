import React from 'react';
import { Button, Modal } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default function ReportCard({report, deleteLink}) {
  return (
    <div className="card">
      <Modal trigger={<Button style={{ background: '#1678c2', color: 'white' }}>Показать фото</Button>}>
        <Modal.Header>Фото нарушения</Modal.Header>
        <Modal.Content image>
          <img src={`data:image/jpeg;base64,${report.image}`} alt="das" />
        </Modal.Content>
      </Modal>
      <div className="content">
        <div className="header"><b>Номер заявки: </b>1</div>
        <br />
        <div className="header"><b>Улица: </b>{report.description}</div>
        <br />
        <div className="header"><b>Пункт ПДД: </b>123</div>
      </div>
      <div className="left floated">
        <button className="ui green button">Вызвать эвакуатор</button>
        <Link to={`/sidewalk`} className="ui orange button ">Требования к заявке</Link>
        <button className="ui button" onClick={() => deleteLink(report._id)}>Отклонить заявку</button>
      </div>
    </div>

  );
}

ReportCard.propTypes = {
  report: React.PropTypes.object.isRequired
};
