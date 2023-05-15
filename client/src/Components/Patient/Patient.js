import React from "react";
import "./Patient.css";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "../Btn.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Patient = (props) => {
  const [data, setData] = useState({
    username: "",
    email: "",
    age: "",
    problem: "",
    message: "",
  });
  let navigate = useNavigate();
  const InputEvent = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Name is ${data.username}, Email is ${data.email}, Age is ${data.message}.`
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
      data.problem === "" ||
      data.message === ""
    ) {
      alert("Please fill all the fields");
      return;
    } else if (!data.email.includes("@")) {
      alert("Please enter a valid email address");
      return;
    } else if (data.age < 0 || data.age > 100) {
      alert("Please enter a valid age");
      return;
    } else {
      axios.post("http://localhost:5000/patientdata", {
        timestamp: timestamp,
        username: data.username,
        email: data.email,
        age: data.age,
        problem: data.problem,
        message: data.message,
      });
      setData({
        username: "",
        email: "",
        age: "",
        problem: "",
        message: "",
      });
      navigate("/patientdata");
    }
  };

  return (
    <>
      <Navbar />
      <div className="home">
        <h1 style={{ fontSize: "50px", margin: "20px" }}>
          Enter the Details of the Patient
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

          <label htmlFor="problem">Problem:</label>
          <input
            type="text"
            name="problem"
            id="problem"
            value={data.problem}
            onChange={InputEvent}
            required
            placeholder="Enter your problem"
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
            problem: "",
          });
        }}
      >
        Clear Form
      </button>
    </>
  );
};

export default Patient;
