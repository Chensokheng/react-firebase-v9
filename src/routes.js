import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/home";
export default function AppRoute() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}
