import React from 'react';
import { Navbar } from 'components';
import { HomePage, PortfolioPage, OldHomePage, AboutPage, FitnessPage } from 'pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div>
			<Router>
				<Navbar />
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/old' element={<OldHomePage />} />
					<Route path='/about' element={<AboutPage />} />
					<Route path='/portfolio' element={<PortfolioPage />} />
					<Route path='/fitness' element={<FitnessPage />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
