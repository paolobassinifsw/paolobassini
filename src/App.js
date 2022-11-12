import React, { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import Home from "pages/Home";

export default function App() {
	const { pathname } = useLocation();

	//setto scroll pagina a 0 quando viene cambiata route
	useEffect(() => {
		document.documentElement.scrollTop = 0;
		document.scrollingElement.scrollTop = 0;
	}, [pathname]);

	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="*" element={<Navigate to="/home" />} />
			</Routes>
		</>
	);
}
