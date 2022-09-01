import React from 'react';
import { Home, Navbar, PageContainer } from 'components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div>
			<Router>
				<PageContainer />
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
