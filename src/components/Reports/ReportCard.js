import React from 'react';
import { Button, Modal } from 'semantic-ui-react'

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
        <div className="header"><b>Описание: </b>{report.description}</div>
      </div>
      <div className="left floated">
        <button className="ui primary button">Отправить</button>
        <button className="ui button" onClick={() => deleteLink(report._id)}>Отклонить</button>
      </div>
    </div>

  );
}

ReportCard.propTypes = {
  report: React.PropTypes.object.isRequired
};
