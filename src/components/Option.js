import React from 'react';
//react component
const Option = (props) => {
	return (
			<div>
				{props.optiontext}
				<button onClick={props.handleDeleteOption}>remove</button>
			</div>
			);

}
export default Option;
