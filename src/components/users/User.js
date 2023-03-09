import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    webiste: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3002/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4 alert alert-info">
      <Link className="btn btn-dark btn-sm" to="/">
        Back to Home
      </Link>
      <h1 className="display-4 mt-5 fs-5">User Id: 1</h1>
      <hr />
      <ul className="list-group w-50 shadow">
        <li className="list-group-item">Name: {user.name}</li>
        <li className="list-group-item">Username: {user.username}</li>
        <li className="list-group-item">Email: {user.email}</li>
        <li className="list-group-item">Phone: {user.phone}</li>
        <li className="list-group-item">Website: {user.website}</li>
      </ul>
    </div>
  );
};

export default User;
