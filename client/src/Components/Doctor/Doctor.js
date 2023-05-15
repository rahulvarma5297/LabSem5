import React from "react";
import "./Doctor.css";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "../Btn.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Main = (props) => {
  const [data, setData] = useState({
    username: "",
    email: "",
    age: "",
    yearsOfExperience: "",
    message: "",
  });
  let navigate = useNavigate();
  const InputEvent = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Name is ${data.username}, Email is ${data.email}. Age is ${data.age}.`
    );
    const date = new Date();
    const timestamp =
      date.getDate() +
      "-" +
      (date.getMonth() + 1) +
      "-" +
      date.getFullYear() +
      " " +
      date.getHours() +
      ":" +
      date.getMinutes() +
      ":" +
      date.getSeconds();

    if (
      data.username === "" ||
      data.email === "" ||
      data.age === "" ||
      data.yearsOfExperience === "" ||
      data.message === ""
    ) {
      alert("Please fill all the fields for Doctor");
      return;
    } else if (!data.email.includes("@")) {
      alert("Please enter a valid email address");
      return;
    } else if (data.age < 30) {
      alert("We expect Minimum 30 years of age");
      return;
    } else if (data.yearsOfExperience < 5) {
      alert("We expect Minimum 5 years of experience");
      return;
    } else if (data.age - data.yearsOfExperience < 20) {
      alert("Please enter a valid age and years of experience");
      return;
    } else {
      axios.post("http://localhost:5000/doctordata", {
        timestamp: timestamp,
        username: data.username,
        email: data.email,
        age: data.age,
        yearsOfExperience: data.yearsOfExperience,
        message: data.message,
      });
      setData({
        username: "",
        email: "",
        message: "",
        age: "",
        yearsOfExperience: "",
      });
      navigate("/doctordata");
    }
  };

  return (
    <>
      <Navbar />
      <div className="home">
        <h1 style={{ fontSize: "50px", margin: "20px" }}>
          Enter the Details of the Doctor
        </h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Name:</label>
          <input
            type="text"
            name="username"
            id="username"
            value={data.username}
            onChange={InputEvent}
            required
            placeholder="Enter your name"
          />
          <br />

          <label htmlFor="email">Email:</label>
          <input
            style={{ textTransform: "none" }}
            type="email"
            name="email"
            id="email"
            value={data.email}
            onChange={InputEvent}
            required
            placeholder="Enter your email"
          />
          <br />

          <label htmlFor="age">Age:</label>
          <input
            type="number"
            name="age"
            id="age"
            value={data.age}
            onChange={InputEvent}
            required
            placeholder="Enter your age"
          />
          <br />

          <label htmlFor="yearsOfExperience">Year:</label>
          <input
            type="number"
            name="yearsOfExperience"
            id="yearsOfExperience"
            value={data.yearsOfExperience}
            onChange={InputEvent}
            required
            placeholder="Enter your years of experience"
          />
          <br />

          <label htmlFor="message">Message:</label>
          <input
            style={{ textTransform: "none" }}
            type="text"
            name="message"
            id="message"
            value={data.message}
            onChange={InputEvent}
            required
            placeholder="Enter your message"
          />
          <br />
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
      <button
        className="btn"
        style={{ marginLeft: "70%" }}
        onClick={() => {
          setData({
            username: "",
            email: "",
            message: "",
            age: "",
            yearsOfExperience: "",
          });
        }}
      >
        Clear Form
      </button>
    </>
  );
};

export default Main;
