import React from 'react';
import PropTypes from 'prop-types';
import Advantage from './Advantage/Advantage';

import './Advantages.scss';

const propTypes = {};

const advantages = [
  {
    image: require('./images/Medium.jpg'),
    title: 'Medium size projects',
    text:
      'Специализируемся в разработке средних приложений 1-5 мес. Мы не умеем делать большие приложения хорошо и нам скучно делать маленькие лендинги. Но умеем разрабатывать средние проекты максимально быстро и качественно.',
  },
  {
    image: require('./images/Speed.jpg'),
    title: 'Скорость разработки',
    text:
      'Понимаем, насколько быстро все меняется в наше время, поэтому разрабатываем приложения с максимальной скоростью. Комбинируем технологии которые уже изобрели чтобы не тратить время на различные велосипеды. Если приложение вам нужно было вчера, оно будет готово к тому времени.',
  },
  {
    image: require('./images/Modern_Web.jpg'),
    title: 'Современный веб',
    text:
      'Используем самые последние технологии чтобы делать максимально эффективные приложения. Всегда в курсе последних событий. Восхищаемся и занимаемся только вебом (не распыляемся). Самые последние технологии будут помогать вашему бизнесу',
  }
]

const Advantages = () => {
  return (
    <div className="advantages">
      <h3>Advantage</h3>
      {advantages.map( (item, i) => {
        const {image, title, text} = item
          return (
            <Advantage
              key={i}
              className={(i%2 !== 0) ? "reverse" : null}
              image={image}
              title={title}
              text={text}
          />)
      })}
    </div>
  );
};

Advantages.propTypes = propTypes;

export default Advantages;
