import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import "./Data.css";

const Data = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/doctordata")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const cleardata = () => {
    // eslint-disable-next-line
    data.map((item) => {
      axios.delete(`http://localhost:5000/doctordata/${item.id}`);
    });
    setData([]);
  };

  return (
    <>
      <Navbar />
      <h1 style={{ textAlign: "center", fontSize: "45px" }}>Doctor Details</h1>
      <h1 style={{ textAlign: "center", fontSize: "30px" }}>List of Doctor's</h1>
      <div className="store">
        <table>
          <thead>
            <tr>
              <th>Time Stamp</th>
              <th>UserName</th>
              <th>Email</th>
              <th>Age</th>
              <th>Year's Experience</th>
              <th>Message</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.timestamp}</td>
                  <td>{item.username}</td>
                  <td style={{textTransform: "none"}}>{item.email}</td>
                  <td>{item.age}</td>
                  <td>{item.yearsOfExperience}</td>
                  <td>{item.message}</td>
                  <td>
                    <button
                      type="button"
                      className="btn"
                      onClick={() => {
                        axios
                          .delete(`http://localhost:5000/doctordata/${item.id}`)
                          .then((res) => {
                            console.log(res);
                          })
                          .catch((err) => {
                            console.log(err);
                          });
                        setData(data.filter((data) => data.id !== item.id));
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button
          type="button"
          className="btn"
          style={{ marginTop: "20px" }}
          onClick={cleardata}
        >
          Clear Data
        </button>
      </div>
    </>
  );
};

export default Data;
