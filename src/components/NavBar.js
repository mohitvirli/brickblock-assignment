import React, { Component } from 'react';
class NavBar extends Component {
	render() {
		return (
			<div className="navbar-wrapper">
				<div className="container">
					<a href="/" className='logo-wrapper'>
						<img src={require('../images/bb_logo_white.svg')} className='logo' alt=""/>
					</a>
				</div>
			</div>
		);
	}
}

export default NavBar;
