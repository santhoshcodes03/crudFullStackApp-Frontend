import React from "react";
import { TiUserAdd } from "react-icons/ti";
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Crud App
          </a>
          <Link to="/adduser"><TiUserAdd className="adduser bg-white rounded fs-2  mr-2 text-black" /></Link>
          {/*style={{backgroundColor:"white", borderRadius:"5px", fontSize:"38px", marginRight:"20px"}}*/}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
