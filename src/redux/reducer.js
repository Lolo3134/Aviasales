import {
  STOP_LOADING_TICKETS,
  START_LOADING_TICKETS,
  SET_SEARCH_ID,
  SET_TICKETS,
  SET_ACTIVE_TAB,
  TAKE_MORE_TICKETS,
  SET_FILTERS_CHECKED,
  SET_TRANSFERS,
} from './action';

export const initState = {
  isLoading: false,
  tickets: [],
  activeTab: 'funniest',
  searchId: null,
  stop: false,
  take: 5,
  transfers: [1, 2],
  activeFilters: [false, false, true, true, false],
};

// eslint-disable-next-line default-param-last
const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case START_LOADING_TICKETS:
      return { ...state, isLoading: true };

    case SET_SEARCH_ID:
      return { ...state, searchId: payload };

    case STOP_LOADING_TICKETS:
      return { ...state, isLoading: false, stop: payload };

    case SET_TICKETS:
      return { ...state, tickets: [...state.tickets, ...payload] };

    case SET_ACTIVE_TAB:
      return { ...state, activeTab: payload };

    case TAKE_MORE_TICKETS:
      return { ...state, take: payload };

    case SET_FILTERS_CHECKED:
      return { ...state, activeFilters: payload };

    case SET_TRANSFERS:
      return { ...state, transfers: payload };

    default:
      return state;
  }
};

export default reducer;
