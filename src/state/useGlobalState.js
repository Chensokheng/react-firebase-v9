import React, { createContext, useContext, useState } from "react";

const globalContext = createContext();

export default function useGlobalState() {
	return useContext(globalContext);
}

export function GlobalState({ children }) {
	const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

	return (
		<globalContext.Provider value={{ setUser, user }}>
			{children}
		</globalContext.Provider>
	);
}
