import React from 'react';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';

import { setFilterChecked, setTransfers } from '../../redux/action';

import styles from './Filters.module.scss';

const cn = classNames.bind(styles);

const FILTERS = [
  { name: 'all-transfer', text: 'Все' },
  { name: 'no-transfer', text: 'Без пересадок' },
  { name: 'one-transfer', text: '1 пересадка' },
  { name: 'two-transfer', text: '2 пересадки' },
  { name: 'three-transfer', text: '3 пересадки' },
];

const Filters = ({
  // eslint-disable-next-line react/prop-types
  activeFilters, transfers, setFilterChecked, setTransfers,
}) => {
  const toogleCheckBox = ({ target }) => {
    if (target.name === 'all-transfer') {
      // eslint-disable-next-line react/prop-types
      if (transfers.length < 4) {
        setTransfers([0, 1, 2, 3]);
        setFilterChecked([true, true, true, true, true]);
      } else {
        setTransfers([]);
        setFilterChecked([false, false, false, false, false]);
      }
    } else {
      const newTransfers = [...transfers];
      // eslint-disable-next-line react/prop-types,max-len
      const newActiveFilters = activeFilters.map((item, idx) => (idx === +target.dataset.transfers ? !item : item));

      if (newActiveFilters[0]) {
        setFilterChecked([!newActiveFilters.shift(), ...newActiveFilters]);
      } else {
        setFilterChecked(newActiveFilters);
      }

      if (newTransfers.includes(+target.dataset.transfers - 1)) {
        setTransfers(newTransfers.filter((item) => item !== +target.dataset.transfers - 1));
      } else {
        newTransfers.push(+target.dataset.transfers - 1);
        setTransfers(newTransfers);
        if (newTransfers.length === 4) {
          setFilterChecked([true, true, true, true, true]);
        }
      }
    }
  };

  const filters = FILTERS.map((item, idx) => (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label key={item.name} className={cn('filters__label')}>
      <input
        checked={activeFilters[idx]}
        className={cn('filters__input')}
        data-transfers={idx}
        name={item.name}
        type='checkbox'
        onChange={toogleCheckBox}
      />
      <span className={cn('filters__checkbox')} />
      {item.text}
    </label>
  ));

  return (
    <div className={cn('filters')}>
      <span className={cn('filters__title')}>Количество пересадок</span>
      <div className={cn('filters__controls')}>{filters}</div>
    </div>
  );
};

const mapStateToProps = ({ activeAllFilters, transfers, activeFilters }) => ({
  activeAllFilters,
  transfers,
  activeFilters,
});

const mapDispatchToProps = {
  setFilterChecked,
  setTransfers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
