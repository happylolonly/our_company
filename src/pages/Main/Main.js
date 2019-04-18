import React from 'react';
import PropTypes from 'prop-types';

import Hero from "./Hero/Hero";
import Why from "./Why/Why";
import Technologies from './Technologies/Technologies';
import ContactUs from './ContactUs/ContactUs';
import Advantages from "./Advantages/Advantages";
import AnotherAdvantages from "./AnotherAdvantages/AnotherAdvantages";
import Connection from "./Connection/Connection";

import './Main.scss';

const propTypes = {};

const Main = () => {
  return (
    <div className="main-page">
      <Hero />
      <Why />
      <Advantages />
      {/* тут блок с кнопкой и ссылкой вниз */}
      <Connection />
      <Technologies />
      <AnotherAdvantages />
      <ContactUs />
    </div>
  );
};

Main.propTypes = propTypes;

export default Main;
