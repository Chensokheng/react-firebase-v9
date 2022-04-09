import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./Layout/AuthLayout";
import Auth from "./page/auth";
import Home from "./page/home";
import { GlobalState } from "./state/useGlobalState";

export default function AppRoute() {
	return (
		<BrowserRouter>
			<GlobalState>
				<AuthLayout>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/auth" element={<Auth />} />
					</Routes>
				</AuthLayout>
			</GlobalState>
		</BrowserRouter>
	);
}
