import React from 'react'
import PropTypes from "prop-types";

import "./Why.scss";

const propTypes = {};

const Why = () => {
  return (
    <div className="why">
      <h3>Описание</h3>
      <p>Разрабатываем интеренет-приложения различного уровня для малого и среднего бизнеса. <br/>
      У вас быстрорастущий бизнес, требующий выхода на новый уровень, или есть идея, требующая реализации? Наша команда предложит лучшие решения для вас и вашего бизнеса. <br/>
      Узнайте, как мы это делаем и как мы можем достичь ваших целей - вместе.</p>
    </div>
  );
};

Why.propTypes = propTypes;

export default Why;
