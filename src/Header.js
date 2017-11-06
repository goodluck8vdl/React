import React from 'react';
import logo from './img/orim-secondary-logo.png';
import icon from './img/black-search-icon.png';
import menu from './img/menu-icon1.png';

export class Header extends React.Component {
	render(){	
		return (
			<div className="container" >
				<div className="row">					
					<div className="menu">
						<img src={menu} alt="menu" />
					</div>
					<div className="logo">					
						<img src={logo} alt="My logo" />
					</div>
					<div className="icon">
						<img src={icon} alt="icon" />
					</div>
				</div>
			</div>
		)
	}
}
