import React from 'react';

import classNames from 'classnames/bind';

import Info from '../Info/Info';

import styles from './Ticket.module.scss';

const cn = classNames.bind(styles);

// eslint-disable-next-line react/prop-types
const Ticket = ({ ticket }) => {
  // eslint-disable-next-line react/prop-types
  const { price, segments, carrier } = ticket;

  return (
    <li className={cn('ticket')}>
      <div className={cn('ticket__header')}>
        <span className={cn('ticket__price')}>
          {price.toLocaleString()}
          {' '}
          P
        </span>
        <img alt='Aviacompany logo' src={`http://pics.avs.io/99/36/${carrier}.png`} />
      </div>
      <Info segments={segments} />
    </li>
  );
};

export default Ticket;
