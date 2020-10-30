import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SideDrawer from '../header_footer/SideDrawer';

const Header = () => {
	const [header, setHeader] = useState(true);
	const [drawer, setDrawer] = useState(false);

	const handleScroll = () => {
		if (window.scrollY > 0) {
			setHeader({ header: false });
		} else {
			setHeader((prevHeader) => !prevHeader);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
	}, []);

	return (
		<AppBar
			position='fixed'
			style={{
				background: header ? '#2f2f2f' : 'transparent',
				boxShadow: 'none',
				padding: '10px 0px',
			}}>
			<Toolbar>
				<div className='header_logo'>
					<div className='font_righteous header_logo_venue'>The Venue</div>
					<div className='header_logo_title'>Musical Events</div>
				</div>

				<IconButton
					aria-label='Menu'
					color='inherit'
					onClick={() => setDrawer(true)}>
					<MenuIcon />
				</IconButton>

				<SideDrawer open={drawer} onClose={() => setDrawer(false)} />
			</Toolbar>
		</AppBar>
	);
};

export default Header;
