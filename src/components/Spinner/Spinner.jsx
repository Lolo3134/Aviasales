import React from 'react';
import { Spin } from 'antd';
import classNames from 'classnames/bind';

import styles from './Spinner.module.scss';

const cn = classNames.bind(styles);

const Spinner = () => (
  <div className={cn('spinner-wrapper')}>
    <Spin size="large" tip="Загружаем оставшиеся билеты" />
  </div>
);

export default Spinner;
