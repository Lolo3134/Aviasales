import React from 'react';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';

import { takeMoreTickets } from '../../redux/action';

import styles from './ButtonMore.module.scss';

const cn = classNames.bind(styles);

// eslint-disable-next-line react/prop-types
const ButtonMore = ({ showMoreTickets, take }) => {
  const count = take + 5;

  return (
    <button className={cn('button-more')} type="button" onClick={() => showMoreTickets(count)}>
      Показать больше билетов
    </button>
  );
};

const mapStateToProps = ({ take }) => ({
  take,
});

const mapDispatchToProps = {
  showMoreTickets: takeMoreTickets,
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonMore);
