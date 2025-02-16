import axios from 'axios';

export const getTvProgramNews = async () => {
  const response = await axios.get(`http://localhost:4000/tvprogramnew`);
  return response.data;
} 

// export const getTvProgramNews = async () => {
//   const response = await axios.get('http://tving.dothome.co.kr/data.json');
//   return response.data.tvprogramnew;
// };

export const getTvProgramNewById = async id => {
  const response = await axios.get(`http://localhost:4000/tvprogramnew/${id}`);
  return response.data;
} 

// export const getTvProgramNewById = async id => {
//   const response = await axios.get('http://tving.dothome.co.kr/data.json');
//   return response.data.tvprogramnew[id - 1];
// };