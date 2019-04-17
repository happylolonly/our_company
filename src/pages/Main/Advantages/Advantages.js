import React from 'react';
import PropTypes from 'prop-types';

import './Advantages.scss';

const propTypes = {};

const Advantages = () => {
  return (
    <div className="advantages">
      <div className="advantage">
        <div className="image">
          <img src="https://bipbap.ru/wp-content/uploads/2017/04/72fqw2qq3kxh.jpg" alt="" />
        </div>
        <div className="description">
          <h4>Advantage 1</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores illum temporibus
            consequatur dolorum. Nam pariatur perspiciatis unde aspernatur provident qui, explicabo
            facilis porro nobis sequi odio deserunt perferendis a magnam?
          </p>
        </div>
      </div>
      <div className="advantage reverse">
        <div className="image">
          <img src="https://bipbap.ru/wp-content/uploads/2017/04/72fqw2qq3kxh.jpg" alt="" />
        </div>
        <div className="description">
          <h4>Advantage 2</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores illum temporibus
            consequatur dolorum. Nam pariatur perspiciatis unde aspernatur provident qui, explicabo
            facilis porro nobis sequi odio deserunt perferendis a magnam?
          </p>
        </div>
      </div>
      <div className="advantage">
        <div className="image">
          <img src="https://bipbap.ru/wp-content/uploads/2017/04/72fqw2qq3kxh.jpg" alt="" />
        </div>
        <div className="description">
          <h4>Advantage 3</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores illum temporibus
            consequatur dolorum. Nam pariatur perspiciatis unde aspernatur provident qui, explicabo
            facilis porro nobis sequi odio deserunt perferendis a magnam?
          </p>
        </div>
      </div>
    </div>
  );
};

Advantages.propTypes = propTypes;

export default Advantages;
