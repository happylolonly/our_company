import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Technologies.scss';

// по клику чтобы открывался блок снизу с другими технологиями

class Technologies extends Component {
  static propTypes = {};

  state = {};

  render() {
    return (
      <div className="technologies">
        <h3>Что мы умеем</h3>
        <p>Наши основные технологии на данный момент это React и Node.js</p>
        <p>Кроме них мы отлично понимаем основы: HTML, CSS, JavaScript</p>

        <button>Наши остальные навыки</button>
        <div>
          {/* Front-end */}
          <ul></ul>
          {/* Back-end */}
          <ul></ul>
          {/* Others */}
          <ul></ul>
        </div>
      </div>
    );
  }
}

export default Technologies;
