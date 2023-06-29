import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Private } from "./private";

export const LoginComponent = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	const [login, setLogin] = useState({
		email: "",
		password: "",
	});

	const handleChange = ({ target }) => {
		setLogin({
			...login,
			[target.name]: target.value,
		});
	};

	const sendLogin = (data) => {
		actions.login(data);
	};

	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-12 col-md-6">
					<h1 className="text-center"> LOGIN </h1>
					<form className="p-3">
						<div className="form-group p-1">
							<input
								className="form-control"
								placeholder="email"
								type="text"
								onChange={handleChange}
								name="email"
							/>
						</div>
						<div className="form-group p-1">
							<input
								className="form-control"
								placeholder="password"
								type="password"
								onChange={handleChange}
								name="password"
							/>
						</div>
						<div className="form-group p-1">
							<button
								className="btn btn-success w-100"
								type="button"
								onClick={() => sendLogin(login)}
							>
								Login
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}