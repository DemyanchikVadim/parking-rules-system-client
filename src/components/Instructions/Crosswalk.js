import React from 'react';
import one from '../../../public/img/1.png';
import two from '../../../public/img/2.png';
import three from '../../../public/img/3.png';
import four from '../../../public/img/4.png';

class Crosswalk extends React.Component {
  render() {
    return (
      <div className="ui main text container intrc">
        <div className="header"><h2><b>Стоянка на тратуаре</b></h2></div>
        <br />
        <span>На фото должно быть видно:</span>
        <div className="header">1: Cамо нарушение и номер авто</div>
        <img className="intrc-image" src={one} alt="one" />
        <br />
        <div className="header">2: Общий план с автомобилем и объектом с географической привязкой</div>
        <img className="intrc-image" src={two} alt="two"/>
        <br />
        <div className="header">3: Адрес нарушения.</div>
        <img className="intrc-image" src={three} alt="three"/>
        <br />
        <div className="header">4: Отсутствие водителя в автомобиле.</div>
        <img className="intrc-image" src={four} alt="four"/>
      </div>
    )
  }
}

export default Crosswalk;