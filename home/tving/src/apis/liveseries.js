import axios from 'axios';

export const getLiveSeries = async () => {
  const response = await axios.get('http://localhost:4000/liveseries');
  return response.data;
}

// export const getLiveSeries = async () => {
//   const response = await axios.get('http://tving.dothome.co.kr/data.json');
//   return response.data.liveseries;
// };
