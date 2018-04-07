import React from 'react';

const Header = (props) => {
	return (
		<div className="header-wrapper">
			{props.content}
		</div>
	);
};

export default Header;
