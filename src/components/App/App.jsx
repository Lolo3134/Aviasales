import React from 'react';
import classNames from 'classnames/bind';

import Filters from '../Filters/Filters';
import Tabs from '../Tabs/Tabs';
import TicketsList from '../Tickets-list/TicketsList';

import logo from '../../assets/logo.svg';

import styles from './App.module.scss';

const cn = classNames.bind(styles);

const App = () => (
  <div className={cn('app')}>
    <a href="/">
      <img alt="Logo Aviasales" className={cn('app__logo')} src={logo} />
    </a>
    <div className={cn('app__content')}>
      <div className={cn('filters-wrapper')}>
        <Filters />
      </div>
      <div className={cn('product-list')}>
        <Tabs />
        <TicketsList />
      </div>
    </div>
  </div>
);

export default App;
