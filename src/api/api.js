import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:8000/api",
    headers: {
      "Content-Type": "application/json",
    },
  });
  
  export const submitSurvey = async (data) => {
    return apiClient.post("/submit", data).then((res) => res.data);
  };
  