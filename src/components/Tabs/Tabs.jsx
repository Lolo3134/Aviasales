import React from 'react';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';

import { setActiveTab } from '../../redux/action';

import styles from './Tabs.module.scss';

const cn = classNames.bind(styles);

// eslint-disable-next-line react/prop-types
const Tabs = ({ activeTab, onTabClick }) => (
  <div className={cn('tabs')}>
    <button
      className={cn('tabs__tab', { 'tabs__tab--active': activeTab === 'funniest' })}
      name="funniest"
      type="button"
      onClick={onTabClick}
    >
      Самый дешевый
    </button>
    <button
      className={cn('tabs__tab', { 'tabs__tab--active': activeTab === 'faster' })}
      name="faster"
      type="button"
      onClick={onTabClick}
    >
      Самый быстрый
    </button>
  </div>
);

const mapStateToProps = (state) => ({
  activeTab: state.activeTab,
});

const mapDispatchToProps = (dispatch) => ({
  onTabClick: (e) => {
    dispatch(setActiveTab(e.target.name));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
