import React from 'react';
import { Navbar, PageContainer } from 'components';
import { HomePage, PortfolioPage, OldHomePage } from 'pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div>
			<Router>
				<Navbar />
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/old' element={<OldHomePage />} />
					<Route path='/portfolio' element={<PortfolioPage />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
