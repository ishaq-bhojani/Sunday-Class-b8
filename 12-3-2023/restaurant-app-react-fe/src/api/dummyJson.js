import axios from "axios";

const dummyJson = axios.create({
  baseURL: "http://localhost:8000/",
});

export default dummyJson;
