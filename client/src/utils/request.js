import axios from "axios";

export const getReq = async (url, options = {}) => {
  const res = await axios.get(url, options);
  return res.data;
};

export const postReq = async (url, body, options = {}) => {
  const res = await axios.post(url, body, options);
  return res.data;
};

export const putReq = async (url, body, options = {}) => {
  const res = await axios.put(url, body, options);
  return res.data;
};

export const deleteReq = async (url, options = {}) => {
  const res = await axios.delete(url, options);
  return res.data;
};
