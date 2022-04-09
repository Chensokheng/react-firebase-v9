import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { withoutAuth } from "../hook/useRoutes";
import AuthService from "../service/AuthService";
import useGlobalState from "../state/useGlobalState";

function Auth() {
	const [error, setError] = useState("");
	const navigate = useNavigate();
	const { setUser } = useGlobalState();

	const handleLoginWithGoogle = async () => {
		const result = await AuthService.authWithGoogle().catch((e) => {
			setError(e.toString());
		});
		setUser(result.user);
		// be careful with what you store here
		// only store the necessary For example: user_id, user_photoUrl, user_name
		// for user token I think it is not a good idea to store in localStorage
		// but this is the demo I am going to store all of the info
		localStorage.setItem("user", JSON.stringify(result.user));
		navigate("/", { replace: true });
	};

	return (
		<div>
			<h1>Auth page</h1>
			<h1>{error}</h1>
			<button onClick={handleLoginWithGoogle}>Login with Google</button>
		</div>
	);
}

export default withoutAuth(Auth);
