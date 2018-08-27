import React from 'react';
//Below are the react components
const Header = (props) => {

		console.log(props);
		return (
			<div>
				<h1>{props.title}</h1>
				{props.subtitle && <h3>{props.subtitle}</h3>}
			</div>

			);
};
Header.defaultProps = {
	title: 'Indecision',
}
export default Header;