import React, { useEffect, useState } from "react";
import AuthService from "../service/AuthService";
import useGlobalState from "../state/useGlobalState";

export default function AuthLayout({ children }) {
	const { setUser, user } = useGlobalState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		AuthService.waitForUser((userCred) => {
			setLoading(false);
			setUser(userCred);
		});
		//eslint-disable-next-line
	}, []);

	if (loading && !user) {
		return <h1>Loading...</h1>;
	}
	return children;
}
