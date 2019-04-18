import React from 'react';
import PropTypes from 'prop-types';
import Button from "../../../components//common/Button/Button";

import "./Connection.scss";

const propTypes = {};

const Connection = () => {
  return (
    <div className="connection">
      <p>Если бы мы были на вашем месте, мы бы определенно выбрали нас;)</p>
      <a href=""><Button>Связаться с нами</Button></a>
    </div>
  );
};

Connection.propTypes = propTypes;

export default Connection;
