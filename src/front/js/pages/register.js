import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Register = () => {
	const { store, actions } = useContext(Context);

	return (
		<div class="container mt-5">
			<div class="row justify-content-center">
				<div class="col-md-6">
					<h2 class="text-center">Iniciar sesión</h2>
					<form>
						<div class="form-group">
							<label for="email">Email</label>
							<input type="email" class="form-control" id="email" placeholder="Ingrese su email" />
						</div>
						<div class="form-group">
							<label for="password">Contraseña</label>
							<input type="password" class="form-control" id="password" placeholder="Ingrese su contraseña" />
						</div>
						<button type="submit" class="btn btn-primary">Iniciar sesión</button>
					</form>
				</div>
			</div>
		</div>
	);
};
