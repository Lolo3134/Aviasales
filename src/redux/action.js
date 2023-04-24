import Api from '../services/api';

const { getSearchId, getTickets } = new Api();

export const STOP_LOADING_TICKETS = 'STOP_LOADING_TICKETS';
export const stopLoadingTickets = (payload) => ({
  type: STOP_LOADING_TICKETS,
  payload,
});

export const START_LOADING_TICKETS = 'START_LOADING_TICKETS';
export const startLoadingTickets = () => ({
  type: START_LOADING_TICKETS,
});

export const SET_SEARCH_ID = 'SET_SEARCH_ID';
export const setSearchId = (payload) => ({
  type: SET_SEARCH_ID,
  payload,
});

export const SET_TICKETS = 'SET_TICKET';
export const setTickets = (payload) => ({
  type: SET_TICKETS,
  payload,
});

export const SET_ACTIVE_TAB = 'SET_ACTIVE_TAB';
export const setActiveTab = (payload) => ({
  type: SET_ACTIVE_TAB,
  payload,
});

export const TAKE_MORE_TICKETS = 'TAKE_MORE_TICKETS';
export const takeMoreTickets = (payload) => ({
  type: TAKE_MORE_TICKETS,
  payload,
});

export const SET_FILTERS_CHECKED = 'SET_ALL_FILTERS_CHECKED';
export const setFilterChecked = (payload) => ({
  type: SET_FILTERS_CHECKED,
  payload,
});

export const SET_TRANSFERS = 'SET_TRANSFERS';
export const setTransfers = (payload) => ({
  type: SET_TRANSFERS,
  payload,
});

export const getSearchIdThunk = () => async (dispatch) => {
  const { searchId } = await getSearchId();
  dispatch(setSearchId(searchId));
};

export const getTicketsThunk = (searchId) => async (dispatch) => {
  dispatch(startLoadingTickets());
  const [tickets, stop] = await getTickets(searchId);
  if (!stop) {
    dispatch(setTickets(tickets));
  } else {
    dispatch(stopLoadingTickets(stop));
  }
};
