import React from 'react';
import PropTypes from 'prop-types';

import './Advantages.scss';

const propTypes = {};

const Advantages = () => {
  return (
    <div className="advantages">
      <h3>Advantage</h3>
      <div className="advantage">
        <div className="image">
          <img src="https://bipbap.ru/wp-content/uploads/2017/04/72fqw2qq3kxh.jpg" alt="" />
        </div>
        <div className="description">
          <h4>Medium size projects</h4>
          <p>
            Специализируемся в разработке средних приложений 1-5 мес.
            Мы не умеем делать большие приложения хорошо и нам скучно делать маленькие лендинги.
            Но умеем разрабатывать средние проекты максимально быстро и качественно.
          </p>
        </div>
      </div>
      <div className="advantage reverse">
        <div className="image">
          <img src="https://bipbap.ru/wp-content/uploads/2017/04/72fqw2qq3kxh.jpg" alt="" />
        </div>
        <div className="description">
          <h4>Скорость разработки</h4>
          <p>
            Понимаем, насколько быстро все меняется в наше время, поэтому разрабатываем приложения с максимальной скоростью.
            Комбинируем технологии которые уже изобрели чтобы не тратить время на различные велосипеды.
            Если приложение вам нужно было вчера, оно будет готово к тому времени.
          </p>
        </div>
      </div>
      <div className="advantage">
        <div className="image">
          <img src="https://bipbap.ru/wp-content/uploads/2017/04/72fqw2qq3kxh.jpg" alt="" />
        </div>
        <div className="description">
          <h4>Современный веб</h4>
          <p>
            Используем самые последние технологии чтобы делать максимально эффективные приложения.

            Всегда в курсе последних событий
            Восхищаемся и занимаемся только вебом (не распыляемся)

            Самые последние технологии будут помогать вашему бизнесу
          </p>
        </div>
      </div>
    </div>
  );
};

Advantages.propTypes = propTypes;

export default Advantages;
