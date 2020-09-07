import axios from 'axios';

const api = axios.create({
  baseURL: 'https://gist.githubusercontent.com/jennifertakagi/365421d867c870598f695ad82dc1fc12/raw/73ff0595a0588eea40eb16caf478293a3def41bb',
});

export default api;
