import "./listEmployeeComponent.css";
import React, { useState, useEffect } from "react";
// import { listEmployees } from "./services/listEmployee";
import axios from "axios";

// const GET_ALL_CINEMAS = "http://localhost:8084/cinema/allcinema";
const GET_ALL_CINEMAS = "http://localhost:8084/movies/all";

function ListEmployeeComponent() {
  const [cinemaHallDetails, setCinemaHallDetails] = useState([]);
  // const [newDetail, setNewDetail] = useState({});
  const [cinema_name, setcinema_name] = useState("");
  const [movie_name, setmovie_name] = useState("");
  const [reload, setReload] = useState(false);

  // useEffect(()=>{listEmployees?.then((response) => {setEmployee(response.data);}).catch(error => console.error(error));},[])
  useEffect(() => {
    axios
      .get(GET_ALL_CINEMAS)
      .then((res) => {
        // console.log("-->", res.data);
        setCinemaHallDetails(res.data);
        // res.data.map((movieee, index_moviee) => {
        //   // console.log(i.cinema_name)
        //   movieee.cinemas.map((cinemaa, index_cinema) => {
        //     console.log(index_moviee, movieee.movie_name, cinemaa.cinema_name);
        //     let key = {
        //       a: movieee.movie_name,
        //       // index_cinema
        //     };
        //     console.log("KEYYY ", key);
        //   });
        // });
      })
      .catch((err) => console.log("ERR", err));
    // console.log("VAL OF", listEmployees);
  }, [setCinemaHallDetails, reload]);

  const onChange = (e) => {
    // console.log(e.target.name, e.target.value, Object.keys(newDetail).length);
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
    // console.log(
    //   "===",
    //   movie_name,
    //   typeof movie_name,
    //   cinema_name,
    //   typeof cinema_name
    // );

    const cinemas = [{ cinema_name: cinema_name }];
    const final_data = { movie_name, cinemas };
    // setcinema_name({});
    // setmovie_name({});
    // console.log(final_data);
    axios
      .post("http://localhost:8084/movies/addmovie", final_data)
      .then((res) => {
        // console.log("Send data ", res);
        setcinema_name("");
        setmovie_name("");
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
            {cinemaHallDetails.map((movieee, index_moviee) =>
              movieee.cinemas.map((cinemaa, index_cinema) => (
                <tr
                  key={
                    movieee.movie_name +
                    index_moviee +
                    cinemaa.cinema_name +
                    index_cinema
                  }
                >
                  <td>{cinemaa?.cinema_name}</td>
                  <td>{movieee?.movie_name}</td>
                </tr>
              ))
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
          value={cinema_name}
          onChange={onChange}
          placeholder="Add New Cinema Hall"
        />
        <div className="divElement">Movie Name</div>
        <input
          className="inputTag"
          // type={type}
          name="movie_name"
          value={movie_name}
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
