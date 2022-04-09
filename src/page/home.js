import React from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../hook/useRoutes";
import AuthService from "../service/AuthService";
import useGlobalState from "../state/useGlobalState";

function Home() {
	const { setUser } = useGlobalState();

	const handleLogout = async () => {
		await AuthService.logOut();
		localStorage.clear();
		setUser(null);
	};

	return (
		<div>
			<h1>Home page</h1>
			<Link to="/auth">Auth page</Link>
			<button onClick={handleLogout}>Logout</button>
		</div>
	);
}
export default withAuth(Home);
