import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import { Alert, BackTop } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';

import Ticket from '../Ticket/Ticket';
import { getSearchIdThunk, getTicketsThunk } from '../../redux/action';
import Spinner from '../Spinner/Spinner';
import ButtonMore from '../Button-more/ButtonMore';

import styles from './TicketsList.module.scss';

const cn = classNames.bind(styles);

function sortTickets(tickets, take, activeTab, transfers) {
  const sortedTickets = [...tickets];

  if (activeTab === 'faster') {
    return sortedTickets
      .sort(
        // eslint-disable-next-line max-len
        (a, b) => a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
      )
      .filter((ticket) => transfers.includes(ticket.segments[0].stops.length))
      .slice(0, take);
  }

  return sortedTickets
    .sort((a, b) => a.price - b.price)
    .filter((ticket) => transfers.includes(ticket.segments[0].stops.length))
    .slice(0, take);
}

const TicketsList = ({
  // eslint-disable-next-line react/prop-types
  searchId,
  getSearchId,
  getTickets,
  stop,
  isLoading,
  tickets,
  activeTab,
  take,
  transfers,
}) => {
  useEffect(() => {
    getSearchId();
  }, []);

  useEffect(() => {
    if (searchId && !stop) {
      getTickets(searchId);
    }
  }, [getTickets, searchId, stop, tickets]);

  const visibleTickets = sortTickets(tickets, take, activeTab, transfers);
  const ticketsList = visibleTickets.map((ticket) => {
    const id = uuidv4();
    return <Ticket key={id} ticket={ticket} />;
  });

  return (
    <>
      {isLoading && <Spinner />}
      {ticketsList.length === 0 ? (
        <Alert showIcon message='Рейсов, подходящих под заданные фильтры, не найдено' type='info' />
      ) : (
        <>
          <ul className={cn('tickets-list')}>{ticketsList}</ul>
          {ticketsList.length && <ButtonMore />}
          <BackTop>
            <div className={cn('tickets-list__back-top')}>&uarr;</div>
          </BackTop>
        </>
      )}
    </>
  );
};

const mapStateToProps = ({ tickets, searchId, activeTab, stop, isLoading, take, transfers }) => ({
  searchId,
  stop,
  activeTab,
  isLoading,
  take,
  tickets,
  transfers,
});

const mapDispatchToProps = {
  getSearchId: getSearchIdThunk,
  getTickets: getTicketsThunk,
};

export default connect(mapStateToProps, mapDispatchToProps)(TicketsList);
