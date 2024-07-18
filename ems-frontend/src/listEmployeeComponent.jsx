import "./listEmployeeComponent.css";
import React, { useState, useEffect } from "react";
// import { listEmployees } from "./services/listEmployee";
import axios from "axios";

const GET_ALL_CINEMAS = "http://localhost:8084/cinema/allcinema";
// const GET_ALL_CINEMAS = "http://localhost:8084/movies/all";

function ListEmployeeComponent() {
  const dummyData = [
    {
      id: 1,
      firstname: "Anushka",
      lastname: "Shirode",
      email: "anushkashirode@gmail.com",
    },
    {
      id: 2,
      firstname: "Anu",
      lastname: "Shi",
      email: "anushi@gmail.com",
    },
    {
      id: 3,
      firstname: "Abc",
      lastname: "Xyz",
      email: "abcxyz@gmail.com",
    },
  ];

  const [movieList, setMovieList] = useState([]);

  // useEffect(()=>{listEmployees?.then((response) => {setEmployee(response.data);}).catch(error => console.error(error));},[])
  useEffect(() => {
    axios
      .get(GET_ALL_CINEMAS)
      .then((res) => {
        console.log("-->", res.data);
        setMovieList(res.data);
        // res.data.map((each_cinema, index) => {
        //   // console.log(i.cinema_name)
        //   each_cinema.movies.map((each_movie) => {
        //     console.log(index, each_cinema.cinema_name, each_movie.movie_name);
        //   });
        // });
      })
      .catch((err) => console.log("ERR", err));
    // console.log("VAL OF", listEmployees);
  }, [setMovieList]);
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
            {movieList.map((each_cinema, index_cinema) =>
              each_cinema.movies.map(
                (each_movie) => (
                  <tr
                    key={
                      each_cinema.cinema_name +
                      index_cinema +
                      each_movie.movie_name
                    }
                  >
                    <td>{each_cinema.cinema_name}</td>
                    <td>{each_movie.movie_name}</td>
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
    </div>
  );
}

export default ListEmployeeComponent;
