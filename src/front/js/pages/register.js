import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import { RegisterComponent } from "../component/registerComponent";
import { LoginComponent } from "../component/loginComponet";
import { Login } from "./login";

export const Register = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="row justify-content-center">
				{store.registered
					?
					<Login />
					:
					<RegisterComponent />
				}
			</div>
		</div>
	);
};
