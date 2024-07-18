import axios from "axios";

const GET_ALL_CINEMAS = "http://localhost:8084/movies/all";
export const listEmployees = () =>
  axios.get(GET_ALL_CINEMAS).then((res) => {
    console.log("-->", res);
  });
