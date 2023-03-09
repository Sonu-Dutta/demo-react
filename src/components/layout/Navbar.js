import React from "react";
import "./Navbar.css";
import { ArrowRight, PersonFill, GearFill, EnvelopeFill, LockFill, PieChartFill, PersonFillAdd, Translate, PersonVcard} from 'react-bootstrap-icons';
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container d-flex flex-column s1">
              <Link className="navbar-brand bg-info w-100 px-2 py-4 navbar_top ps-4" to="/">
                  <PersonVcard className="fs-2" />  <span className="fs-6"> User Management </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
               <ul className="navbar-nav   d-flex flex-column pt-5 mt-5">
            <li className="nav-item">
                          <NavLink className="nav-link" exact to="/">
                              <PersonFill/> <span> Users </span> </NavLink>
                          <ArrowRight className="text-white" />
                          <Link className="btn btn-outline-light btn-sm addBtn" to="/users/add"><PersonFillAdd />Add User</Link>
                          {/* <ArrowRight className="text-white" />
                          <Link className="btn btn-outline-light btn-sm addBtn" to="/users/summary"><PersonFillAdd />Summary</Link> */}
                      </li>
       

            <li className="nav-item">
                          <NavLink className="nav-link" exact to="/users/summary">
                              <PieChartFill/> <span> Dashboard </span>
              </NavLink>
                      </li>
                      <li className="nav-item">
                          <NavLink className="nav-link" to="/contact">
                       <EnvelopeFill/>       <span> Messages </span>
              </NavLink>
                      </li>
                      <li className="nav-item">
                          <NavLink className="nav-link" to="/">
                              <LockFill/> <span> Roles & Permissions </span>
              </NavLink>
                      </li>
                      <li className="nav-item">
                          <NavLink className="nav-link" to="/">
                              <Translate /> <span> Languages </span>
              </NavLink>
                      </li>
                      <li className="nav-item">
                          <NavLink className="nav-link" to="/">
                              <GearFill/> <span> Settings </span>
              </NavLink>
                      </li>

           
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
