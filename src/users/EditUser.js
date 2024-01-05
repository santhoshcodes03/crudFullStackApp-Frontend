import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";

function EditUser() {
  let navigate = useNavigate();
  let { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const handleInput = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const submitData = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/user/${id}`, user);
    navigate("/");
  };

  useEffect(() => {
    async function loadUserData() {
      let result = await axios.get(`http://localhost:8080/user/${id}`);
      setUser(result.data);
    }
    loadUserData();
  }, [id]);

  return (
    <div>
      <form
        onSubmit={submitData}
        style={{
          borderLeft: "3px solid black",
          margin: "50px auto",
          width: "700px",
          height: "500px",
          backgroundColor: "#F9F9F9",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
        className="shadow"
      >
        <h2>Edit User</h2>
        <div>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter name"
            value={user.name}
            onChange={handleInput}
            style={{ width: "80%", margin: "0 auto" }}
          />
        </div>

        <div>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter username"
            value={user.username}
            onChange={handleInput}
            style={{ width: "80%", margin: "0 auto" }}
          />
        </div>

        <div>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter email"
            value={user.email}
            onChange={handleInput}
            style={{ width: "80%", margin: "0 auto" }}
          />
        </div>

        <div>
          <button type="submit" className="btn bg-black text-white rounded">
            Submit
          </button>
          <Link to={"/"} className="btn bg-black text-white rounded mx-1">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}

export default EditUser;
