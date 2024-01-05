import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function AddUser() {
  let navigate = useNavigate();

  let [checkInput, setcheckInput] = useState(true);

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
    if (user.name && user.username && user.email) {
      await axios.post("http://localhost:8080/user", user);
      navigate("/");
    } else {
      setcheckInput(false);
    }
  };

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
        <h2>Add User</h2>
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
      <p
        className="text-danger"
        style={checkInput ? { display: "none" } : { display: "block" }}
      >
        Please fill all the fields
      </p>
    </div>
  );
}

export default AddUser;
