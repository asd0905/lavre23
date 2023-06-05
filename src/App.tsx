import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Detail from './pages/Detail';

const SLayout = styled.div`
	
`

function App() {

	return (
		<>
			<Header />
			<Routes>
				<Route path={'/'} element={<Home />} />
				<Route path={'/:id'} element={<Detail />} />
			</Routes>
		</>
	);
}

export default App;
