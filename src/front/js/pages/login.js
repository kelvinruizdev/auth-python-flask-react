import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { LoginComponent } from "../component/loginComponet";
import { Private } from "../component/private";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div className="container">
			<div className="row justify-content-center">
				{store.token
					?
					<Private />
					:
					<LoginComponent />
				}
			</div>
		</div>
	);
};
