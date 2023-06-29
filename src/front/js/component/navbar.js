import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	const handleLogout = () => {
		actions.logout();
	};

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<span className="navbar-brand mb-0 h1">Auth Flask React</span>
				<div className="ml-auto">
					{
						store.login && store.token != undefined
							?
							<button className="btn btn-danger" onClick={() => { handleLogout() }}>Logout</button>
							:
							<div>
								<Link to={"/login"}>
									<button className="btn btn-primary">Login</button>
								</Link>
								<Link to={"/signup"}>
									<button className="btn btn-primary">Signup</button>
								</Link>
							</div>
					}

				</div>
			</div>
		</nav>
	);
};
