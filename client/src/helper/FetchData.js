import axios from "axios";

export const fetchData = async (path) => {
  const token = "token";
  const response = await axios.get(`${path}`, {
    headers: {
      token,
    },
  });
  return response?.data;
};
