import React from 'react';
import classNames from 'classnames/bind';

import styles from './Info.module.scss';

const cn = classNames.bind(styles);

const transfersCounter = (stops) => {
  const transfers = stops.length;

  switch (transfers) {
    case 0:
      return 'Без пересадок';
    case 1:
      return '1 пересадка';
    case 2:
    case 3:
      return `${transfers} пересадки`;
    default:
      return '-';
  }
};

const formatter = (time) => {
  let minutes = time % 60;
  const hours = Math.floor(time / 60);
  minutes = minutes >= 10 ? minutes : `0${minutes}`;

  return `${hours}ч ${minutes}м`;
};

const timeFormatter = (date, duration) => {
  const from = `${
    new Date(date).getHours() >= 10 ? new Date(date).getHours() : `0${new Date(date).getHours()}`
  }:${new Date(date).getMinutes()}`;
  let to = new Date(date).getTime() + duration * 60 * 1000;
  let hours = new Date(to).getHours();
  let minutes = new Date(to).getMinutes();
  hours = hours >= 10 ? hours : `0${hours}`;
  minutes = minutes >= 10 ? minutes : `0${minutes}`;
  to = `${hours}:${minutes}`;

  return `${from} - ${to}`;
};

// eslint-disable-next-line react/prop-types
const Info = ({ segments }) => {
  const [flyghtTo, flyghtFrom] = segments;

  return (
    <>
      <div className={cn('flyght-info')}>
        <div className={cn('flyght-info__item')}>
          <span className={cn('flyght-info__text')}>
            {flyghtTo.origin}
            {' '}
            –
            {flyghtTo.destination}
          </span>
          <span className={cn('flyght-info__description')}>
            {timeFormatter(flyghtTo.date, flyghtTo.duration)}
          </span>
        </div>
        <div className={cn('flyght-info__item')}>
          <span className={cn('flyght-info__text')}>В пути</span>
          <span className={cn('flyght-info__description')}>{formatter(flyghtTo.duration)}</span>
        </div>
        <div className={cn('flyght-info__item')}>
          <span className={cn('flyght-info__text')}>{transfersCounter(flyghtTo.stops)}</span>
          <span className={cn('flyght-info__description')}>{flyghtTo.stops.join(', ')}</span>
        </div>
      </div>
      <div className={cn('flyght-info')}>
        <div className={cn('flyght-info__item')}>
          <span className={cn('flyght-info__text')}>
            {flyghtFrom.origin}
            {' '}
            –
            {flyghtFrom.destination}
          </span>
          <span className={cn('flyght-info__description')}>
            {timeFormatter(flyghtFrom.date, flyghtFrom.duration)}
          </span>
        </div>
        <div className={cn('flyght-info__item')}>
          <span className={cn('flyght-info__text')}>В пути</span>
          <span className={cn('flyght-info__description')}>{formatter(flyghtFrom.duration)}</span>
        </div>
        <div className={cn('flyght-info__item')}>
          <span className={cn('flyght-info__text')}>{transfersCounter(flyghtFrom.stops)}</span>
          <span className={cn('flyght-info__description')}>{flyghtFrom.stops.join(', ')}</span>
        </div>
      </div>
    </>
  );
};

export default Info;
