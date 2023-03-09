import React, { useState, useEffect } from "react";
import axios from "axios";
import { EyeFill, PencilFill, TrashFill} from 'react-bootstrap-icons';
import { Link } from "react-router-dom";
import "../../App.css";

const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUser(result.data.reverse());
  };

  const deleteUser = async id => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };

  return (
    <div className="container bg-light">
      <div className="py-4">
              <h6>Users List</h6>
  

        <table class="table border table-hover bg-white">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
                  <tbody>
                 
                          <tr>
                              <th scope="row">1</th>
                              <td>Sonu Dutta</td>
                              <td>SonuDutta</td>
                              <td>sonuduttta@gmail.com</td>
                              <td>
                           
                              <Link class="btn btn-outline-success mr-2 rounded-circle">
                                      <PencilFill/>
                  </Link>
                              <Link class="btn border-danger btn-sm rounded-circle">
                                  <lord-icon
                                      src="https://cdn.lordicon.com/jmkrnisz.json"
                                      trigger="hover"
                                      colors="primary:#c71f16">
                                  </lord-icon>
                              </Link>
                              <Link class="btn  btn-sm rounded-circle">
                                  <lord-icon
                                      src="https://cdn.lordicon.com/jxwksgwv.json"
                                      trigger="hover"
                                      colors="primary:#1663c7">
                                  </lord-icon>
                              </Link>
                              </td>
                      </tr>



                      <tr>
                          <th scope="row">2</th>
                          <td>Sonu Dutta</td>
                          <td>SonuDutta</td>
                          <td>sonuduttta@gmail.com</td>
                          <td>
                              <Link class="btn btn-outline-primary mr-2 rounded-circle">
                                  <EyeFill/>
                  </Link>
                              <Link class="btn btn-outline-success mr-2 rounded-circle">
                                  <PencilFill/>
                  </Link>
                              <Link class="btn  btn-sm rounded-circle">
                                  <lord-icon className="dlt"
                                      src="https://cdn.lordicon.com/jfhbogmw.json"
                                      trigger="hover"
                                      colors="primary:#c71f16">
                                  </lord-icon>
                              </Link>
                          </td>
                      </tr>

                      <tr>
                          <th scope="row">3</th>
                          <td>Sonu Dutta</td>
                          <td>SonuDutta</td>
                          <td>sonuduttta@gmail.com</td>
                          <td>
                              <Link class="btn btn-outline-primary mr-2 rounded-circle">
                                  <EyeFill/>
                  </Link>
                              <Link class="btn btn-outline-success mr-2 rounded-circle">
                                  <PencilFill/>
                  </Link>
                              <Link class="btn btn-outline-danger mr-2 rounded-circle">
                                  <TrashFill/>
                  </Link>
                          </td>
                      </tr>

                      <tr>
                          <th scope="row">4</th>
                          <td>Sonu Dutta</td>
                          <td>SonuDutta</td>
                          <td>sonuduttta@gmail.com</td>
                          <td>
                              <Link class="btn btn-outline-primary mr-2 rounded-circle">
                                  <EyeFill/>
                  </Link>
                               <Link class="btn btn-outline-success mr-2 rounded-circle">
                                  <PencilFill/>
                  </Link>
                              <Link class="btn btn-outline-danger mr-2 rounded-circle">
                                  <TrashFill/>
                  </Link>
                          </td>
                      </tr>
             
                  </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
