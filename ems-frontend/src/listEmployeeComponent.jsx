import "./listEmployeeComponent.css";
import React, { useState, useEffect } from "react";
// import { listEmployees } from "./services/listEmployee";
import axios from "axios";

const GET_ALL_CINEMAS = "http://localhost:8084/cinema/allcinema";
// const GET_ALL_CINEMAS = "http://localhost:8084/movies/all";

function ListEmployeeComponent() {
  const [cinemaHallDetails, setCinemaHallDetails] = useState([]);
  const [newDetail, setNewDetail] = useState({});
  const [cinema_name, setcinema_name] = useState({});
  const [movie_name, setmovie_name] = useState({});
  const [reload, setReload] = useState(false);

  // useEffect(()=>{listEmployees?.then((response) => {setEmployee(response.data);}).catch(error => console.error(error));},[])
  useEffect(() => {
    axios
      .get(GET_ALL_CINEMAS)
      .then((res) => {
        console.log("-->", res.data);
        setCinemaHallDetails(res.data);
        res.data.map((each_cinema, index) => {
          // console.log(i.cinema_name)
          each_cinema.movies.map((each_movie) => {
            console.log(index, each_cinema.cinema_name, each_movie.movie_name);
          });
        });
      })
      .catch((err) => console.log("ERR", err));
    // console.log("VAL OF", listEmployees);
  }, [setCinemaHallDetails, reload]);

  const onChange = (e) => {
    console.log(e.target.name, e.target.value, Object.keys(newDetail).length);
    if (e.target.name === "cinema_name") {
      setcinema_name(e.target.value);
    } else {
      setmovie_name(e.target.value);
    }
    // setNewDetail({
    //   ...newDetail,
    //   [e.target.name]: e.target.value,
    // });
  };

  const onClick = (e) => {
    // console.log("===",movie_name);

    const movies = [{ movie_name: movie_name }];
    const final_data = { cinema_name, movies };
    console.log(final_data);
    axios
      .post("http://localhost:8084/cinema/add", final_data)
      .then((res) => {
        console.log("Send data ", res);
        setReload(!reload);
      })
      .catch((err) => console.log("ERR", err));
  };
  return (
    <div>
      <h1>Cinema Hall Details</h1>

      <div className="container">
        {/* <h2 className="text-center">List Employee</h2> */}
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Cinema Hall</th>
              <th>Movie Name</th>
            </tr>
          </thead>
          <tbody>
            {cinemaHallDetails.map((each_cinema, index_cinema) =>
              each_cinema.movies.map(
                (each_movie) => (
                  <tr
                    key={
                      each_cinema.cinema_name +
                      index_cinema +
                      each_movie.movie_name
                    }
                  >
                    <td>{each_cinema?.cinema_name}</td>
                    <td>{each_movie?.movie_name}</td>
                  </tr>
                )
                // console.log(
                //   index,
                //   each_cinema.cinema_name,
                //   each_movie.movie_name
                // )
              )
            )}
          </tbody>
        </table>
      </div>
      {/* Add New Data */}
      <div>
        <div className="divElement">Cinema Hall Name</div>
        <input
          className="inputTag"
          // type={type}
          name="cinema_name"
          value={cinema_name?.cinema_name}
          onChange={onChange}
          placeholder="Add New Cinema Hall"
        />
        <div className="divElement">Movie Name</div>
        <input
          className="inputTag"
          // type={type}
          name="movie_name"
          value={movie_name?.movie_name}
          onChange={onChange}
          placeholder="Add New Cinema Hall"
        />
      </div>
      {/* disabled={Object.keys(newDetail).length!=2} */}
      <button onClick={onClick}>Add New Details</button>
    </div>
  );
}

export default ListEmployeeComponent;
