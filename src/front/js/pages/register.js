import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Register = () => {
	const { store, actions } = useContext(Context);

	const [newUser, setNewUser] = useState({
		email: "",
		password: "",
	});

	const handleChange = ({ target }) => {
		setNewUser({
			...newUser,
			[target.name]: target.value,
		});
	};

	const saveUser = (data) => {
		actions.register(data);
	};

	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-12 col-md-6">
					<h1 className="text-center"> SIGNUP </h1>
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
								onClick={() => saveUser(newUser)}
							>
								Save
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
