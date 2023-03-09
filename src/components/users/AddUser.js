import React, { useState } from "react";
import axios from 'axios';
import "./User.css";
import "../../index.css"
import { useHistory } from "react-router-dom";
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import { EnvelopeAt, Telephone, Globe, PersonCheck, Bookmark } from "react-bootstrap-icons";

const AddUser = () => {
    let history = useHistory();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });

    const [nameError, setNameError] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [websiteError, setWebsiteError] = useState("");


    const { name, username, email, phone, website } = user;
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = async e => {
        e.preventDefault();

        if (name.trim().length < 6) {
            setNameError("Name should be atleast 6 characters long");
            return;
        } else {
            setNameError("");
        }

        if (username.trim().length < 6) {
            setUsernameError("Username should be atleast 6 characters long");
            return;
        } else {
            setUsernameError("");
        }

        if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            setEmailError("Invalid email format");
            return;
        } else {
            setEmailError("");
        }

        if (!/^\d{10}$/.test(phone)) {
            setPhoneError("Invalid phone number");
            return;
        } else {
            setPhoneError("");
        }

        if (!/^http/.test(website)) {
            setWebsiteError("Website name should start with 'http'");
            return;
        } else {
            setWebsiteError("");
        }
        await axios.post("http://localhost:3002/users", user);

        history.push("/");
    };


    const isNameEmpty = name.trim() === '';
    const isUsernameEmpty = username.trim() === '';
    const isEmailEmpty = email.trim() === '';
    const isPhoneEmpty = phone.trim() === '';
    const isWebsiteEmpty = website.trim() === '';

    return (
        <div className="container bg-light pt-5">
            <div className="w-75 mx-auto p-5 bg-white shadow formm">

                <h3 className="text-center mb-4"><lord-icon 
                    src="https://cdn.lordicon.com/mrdiiocb.json"
                    trigger="hover"
                    colors="primary:#16a9c7"
               >
                </lord-icon> Add User</h3>

                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="     Name"
                            name="name"
                            value={name}
                            onChange={e => onInputChange(e)}
                        />
                        {isNameEmpty && <PersonCheck className="form-icon" />}
                        {nameError && <span className="text-danger error-msg">{nameError}</span>}
                
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="     Username"
                            name="username"
                            value={username}
                            onChange={e => onInputChange(e)}
                        />
                        {isUsernameEmpty && <Bookmark className="form-icon" />}
                        {usernameError && <span className="text-danger error-msg">{usernameError}</span>}
             
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="     E-mail Address "
                            name="email"
                            value={email}
                            onChange={e => onInputChange(e)}
                        />
                        {isEmailEmpty && <EnvelopeAt className="form-icon" />}
                        {emailError && <span className="text-danger error-msg">{emailError}</span>}
        
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="     Phone Number"
                            name="phone"
                            value={phone}
                            onChange={e => onInputChange(e)}
                        />
                        {isPhoneEmpty && <Telephone className="form-icon" />}
                        {phoneError && <span className="text-danger error-msg">{phoneError}</span>}
                 

                    </div>

                    <div className="form-group mt-2">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="     Website Name"
                            name="website"
                            value={website}
                            onChange={e => onInputChange(e)}
                        />
                        {isWebsiteEmpty && <Globe className="form-icon" />}
                        {websiteError && <span className="text-danger error-msg">{websiteError}</span>}
                 

                    </div>

                    <button type="submit" className="btn btn-dark btn-block">Add User</button>
                </form>
            </div>
        </div>
    );
};



export default AddUser;