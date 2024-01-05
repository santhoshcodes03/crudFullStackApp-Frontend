import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function ViewUser() {
  let navigate = useNavigate();
  let { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const fetchData = async () => {
    let result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  useEffect(() => {
    fetchData();
  });
  return (
    <>
      <div
        style={{
          borderLeft: "3px solid black",
          margin: "50px auto",
          width: "700px",
          height: "500px",
          padding: "40px",
          backgroundColor: "#F9F9F9",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
        className="shadow"
      >
        <h2>View User</h2>

        <div
          style={{
            backgroundColor: "#F9F9F9",
            border: "1px dotted black",
            padding: "40px",
          }}
        >
          <p style={{ fontWeight: "bold", fontSize: "20px", color: "blue" }}>
            User's Id:{user.id}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Name:{user.name}</span>
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Username:{user.username}</span>
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Email:{user.email}</span>
          </p>
        </div>

        <button
          style={{
            color: "white",
            backgroundColor: "black",
            width: "100px",
            margin: "0 auto",
            borderRadius: "10px",
          }}
          onClick={() => {
            navigate("/");
          }}
        >
          Back
        </button>
      </div>
    </>
  );
}

export default ViewUser;
