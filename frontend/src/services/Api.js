import axios from "axios";

const URL = "http://localhost:5000";

export const AddDetails = async (data) => {
  try {
    return await axios.post(`/addDetails`, data);
  } catch (error) {
    console.log("Error while adding  DETAILS", error);
  }
};

export const getDetails = async () => {
  try {
    return await axios.get(`/getDetails`);
  } catch (error) {
    console.log("Error while getting  DETAILS", error);
  }
};

export const chatDetails = async (prompt) => {
  try {
    return await axios.post(`/chat`, { prompt });
  } catch (error) {
    console.log("Error while sending  chat  data", error);
  }
};
