import React, { useState } from "react";
import "./SideNavBar.css";
import { ArrowRight, PersonFill, GearFill, EnvelopeFill, LockFill, PieChartFill, PersonFillAdd, Translate, PersonVcard} from 'react-bootstrap-icons';

import { Link, NavLink } from "react-router-dom";
const SideNavBar = () => {
	const [isExpanded, setExpendState] = useState(false);
	// const menuItems = [
	// 	{
	// 		text: "Dashboard",
	// 		icon: "icons/grid.svg",
	// 	},
	// 	{
	// 		text: "Admin Profile",
	// 		icon: "icons/user.svg",
	// 	},
	// 	{
	// 		text: "Messages",
	// 		icon: "icons/message.svg",
	// 	},
	// 	{
	// 		text: "Analytics",
	// 		icon: "icons/pie-chart.svg",
	// 	},
	// 	{
	// 		text: "File Manager",
	// 		icon: "icons/folder.svg",
	// 	},
	// 	{
	// 		text: "Orders",
	// 		icon: "icons/shopping-cart.svg",
	// 	},
	// 	{
	// 		text: "Saved Items",
	// 		icon: "icons/heart.svg",
	// 	},
	// 	{
	// 		text: "Settings",
	// 		icon: <GearFill/>,
	// 	},
	// ];
	return (
		<div
			className={
				isExpanded
					? "side-nav-container"
					: "side-nav-container side-nav-container-NX"
			}
		>
			<div className="nav-upper">
				<div className="nav-heading">
					{isExpanded && (
						<div className="nav-brand">
                            <Link className="bg-info d-flex flex-column w-100 zi px-2 py-4 navbar_top ps-4" to="/">
                  <PersonVcard className="fs-2 text-white" />  <span className="fs-6 text-white user"> User Management </span>
        </Link>		{/* <img src="icons/Logo.svg" alt="" srcset="" />
							<h2>Showkart</h2> */}
						</div>
					)}
					<button id="arrow"
						className={
							isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
						}
						onClick={() => setExpendState(!isExpanded)}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
				<div className="nav-menu">
                <ul className="navbar-nav   d-flex flex-column ">
            <li className="nav-item">
              {isExpanded ? (
                <NavLink className="nav-link" exact to="/">
                  <PersonFill /> <span> Users </span>{" "}
                </NavLink>
              ) : (
                <Link className="nav-link ps-4 fs-4" exact to="/">
                  <PersonFill classname="in-icon"/>
                </Link>
              )}

              {isExpanded && (
                <Link className="btn btn-outline-light btn-sm addBtn" to="/users/add">
                  <PersonFillAdd /> Add User
                </Link>
              )}
            </li>

            <li className="nav-item">
              {isExpanded ? (
                <NavLink className="nav-link" exact to="/users/summary">
                  <PieChartFill /> <span> Dashboard </span>
                </NavLink>
              ) : (
                <Link className="nav-link ps-4 fs-4" exact to="/users/summary">
                  <PieChartFill classname="in-icon"/>
                </Link>
              )}
            </li>
            <li className="nav-item">
              {isExpanded ? (
                <NavLink className="nav-link" to="/contact">
                  <EnvelopeFill /> <span> Messages </span>
                </NavLink>
              ) : (
                <Link className="nav-link ps-4 fs-4" to="/contact">
                  <EnvelopeFill classname="in-icon"/>
                </Link>
              )}
            </li>
            <li className="nav-item">
              {isExpanded ? (
                <NavLink className="nav-link" to="/">
                  <LockFill /> <span> Roles & Permissions </span>
                </NavLink>
              ) : (
                <Link className="nav-link ps-4 fs-4" to="/">
                  <LockFill classname="in-icon"/>
                </Link>
              )}
            </li>
            <li className="nav-item">
              {isExpanded ? (
                <NavLink className="nav-link" to="/">
                  <Translate /> <span> Languages </span>
                </NavLink>
              ) : (
                <Link className="nav-link ps-4 fs-4" to="/">
                  <Translate classname="in-icon"/>
                </Link>
              )}
              
            </li>
            <li className="nav-item">
              {isExpanded ? (
                <NavLink className="nav-link" to="/">
                  <GearFill /> <span> Settings </span>
                </NavLink>
              ) : (
                <Link className="nav-link ps-4 fs-4" to="/">
                  <GearFill classname="in-icon"/>
                </Link>
              )}
              
            </li>
            </ul>
				</div>
			</div>
			{/* <div className="nav-footer">
				{isExpanded && (
					<div className="nav-details">
						<img
							className="nav-footer-avatar"
							src="icons/admin-avatar.svg"
							alt=""
							srcset=""
						/>
						<div className="nav-footer-info">
							<p className="nav-footer-user-name">M Showkat</p>
							<p className="nav-footer-user-position">store admin</p>
						</div>
					</div>
				)}
				<img className="logout-icon" src="icons/logout.svg" alt="" srcset="" />
			</div> */}
		</div>
	);
};

export default SideNavBar;