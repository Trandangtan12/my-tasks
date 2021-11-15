import axios from "axios";
const HttpClient = axios.create({
  baseURL: "https://mvn-task-manager.work",
  headers: {
    "Content-Type": "application/json",
  },
});

export default HttpClient;