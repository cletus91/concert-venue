import React, { Component } from 'react';
import Header from './components/header_footer/Header';
import './styles.css';
import Featured from './components/featured';
import VenueInfo from './components/VenuInfo/VenueInfo';
import Highlights from './components/Highlights';
import Pricing from './components/Pricing';
import Location from './components/location';
import Footer from './components/header_footer/Footer';
import { Element } from 'react-scroll';
class App extends Component {
	render() {
		return (
			<div className='App' style={{ height: '1500px', background: 'cornflowerblue' }}>
				<Header />
				<Element name='event'>
					<Featured />
				</Element>

				<Element name='info'>
					<VenueInfo />
				</Element>

				<Element name='highlights'>
					<Highlights />
				</Element>

				<Element name='pricing'>
					<Pricing />
				</Element>

				<Element name='location'>
					<Location />
				</Element>

				<Footer />
			</div>
		);
	}
}

export default App;
