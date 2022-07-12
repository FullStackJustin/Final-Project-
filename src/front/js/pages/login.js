import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Login = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center container">
			<section className="hero is-info is-fullheight">
				<div className="hero-body">
					<div className="container">
						<div className="columns is-centered">
							<div className="column is-half">
								<form method="POST">
									<div className="field">
										<label className="label">Username</label>
										<div className="control has-icons-left has-icons-right">
											<input className="input" type="text" name="username" placeholder="Username" />
											<span className="icon is-small is-left">
												<i className="fas fa-user"></i>
											</span>
										</div>
									</div>
									<div className="field">
										<label className="label">Password</label>
										<p className="control has-icons-left">
											<input className="input" type="password" name="password" placeholder="Password" />
											<span className="icon is-small is-left">
												<i className="fas fa-lock"></i>
											</span>
										</p>
									</div>
									<div className="field">
										<p className="control">
											<button type="submit" className="button is-success">
												Login
											</button>
										</p>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
