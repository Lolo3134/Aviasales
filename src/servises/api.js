import axios from 'axios';

export default class Api {
  constructor() {
    this.getSearchId = async () => {
      const response = await axios.get('https://aviasales-test-api.kata.academy/search');
      const body = await response.data;

      return body;
    };

    this.getTickets = async (searchId) => {
      try {
        const response = await axios.get(
          `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`,
        );
        const { tickets, stop } = await response.data;

        return [tickets, stop];
      } catch {
        return [[], false];
      }
    };
  }
}
