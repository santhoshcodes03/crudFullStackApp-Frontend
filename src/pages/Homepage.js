import React, { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import axios from "axios";
import { Link} from "react-router-dom";

function Homepage() {
  let [userData, setUserData] = useState([]);

  useEffect(() => {
    fetchAllUserData();
  }, []);

  async function fetchAllUserData() {
    let result = await axios.get("http://localhost:8080/users");
    setUserData(result.data);
  }

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/user/${id}`);
    fetchAllUserData();
  };

  return (
    <div>
      <div className="py-4">
        <table className="table table-striped shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Username</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((data, i) => {
              return (
                <tr key={data.id}>
                  <th scope="row">{data.id}</th>
                  <td>{data.username}</td>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td className="d-flex justify-content-evenly align-items-center">
                  <Link className="text-black" to={`/viewuser/${data.id}`}><FaEye className="rounded fs-2" />  </Link>
                    <Link className="text-black" to={`/edituser/${data.id}`}>
                      <FaEdit className="rounded fs-2" />
                    </Link>
                    <MdDeleteForever
                      className="rounded fs-2"
                      onClick={() => {
                        deleteUser(data.id);
                      }}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Homepage;
