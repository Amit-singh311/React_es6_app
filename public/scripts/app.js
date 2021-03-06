"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
* Nesting of the react component.
 */
/*const obj = {
	name :'Amit',
	getName() {
		return this.name;
	} 
}
//cannot access the getname as the context has been changed
const getname = obj.getName;
console.log(getname());*/
var Indecision = function (_React$Component) {
	_inherits(Indecision, _React$Component);

	function Indecision() {
		_classCallCheck(this, Indecision);

		return _possibleConstructorReturn(this, (Indecision.__proto__ || Object.getPrototypeOf(Indecision)).apply(this, arguments));
	}

	_createClass(Indecision, [{
		key: "render",
		value: function render() {
			var title = "Indecision";
			var subtitle = "Put your life in the hands of the computer";
			var options = ['thing one', 'thing two', 'thing three', 'thing four'];
			return React.createElement(
				"div",
				null,
				React.createElement(Header, { title: title, subtitle: subtitle }),
				React.createElement(Action, null),
				React.createElement(Options, { options: options }),
				React.createElement(AddOption, null)
			);
		}
	}]);

	return Indecision;
}(React.Component);
//Below are the react components


var Header = function (_React$Component2) {
	_inherits(Header, _React$Component2);

	function Header() {
		_classCallCheck(this, Header);

		return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
	}

	_createClass(Header, [{
		key: "render",
		value: function render() {
			console.log(this.props);
			return React.createElement(
				"div",
				null,
				React.createElement(
					"h1",
					null,
					this.props.title
				),
				React.createElement(
					"h3",
					null,
					this.props.subtitle
				)
			);
		}
	}]);

	return Header;
}(React.Component);
//react component


var Action = function (_React$Component3) {
	_inherits(Action, _React$Component3);

	function Action() {
		_classCallCheck(this, Action);

		return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
	}

	_createClass(Action, [{
		key: "handlepick",

		//self contained method in each component.
		value: function handlepick() {
			alert('i was clicked');
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(
					"button",
					{ onClick: this.handlepick },
					"what Should i do?"
				)
			);
		}
	}]);

	return Action;
}(React.Component);
//react component


var Options = function (_React$Component4) {
	_inherits(Options, _React$Component4);

	//constructor of the react componenet gets called on the props object
	function Options(props) {
		_classCallCheck(this, Options);

		var _this4 = _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, props));

		_this4.handleRemoveAll = _this4.handleRemoveAll.bind(_this4);
		return _this4;
	}

	_createClass(Options, [{
		key: "handleRemoveAll",
		value: function handleRemoveAll() {
			console.log(this.props.options);
			/*
     when we do this it says i can read the props of undefined y?? bacause we loses the this binding here.
    */
			//console.log(this.props.options.length);
			//alert('click to remove');
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(
					"button",
					{ onClick: this.handleRemoveAll },
					"Remove All"
				),
				this.props.options.map(function (option) {
					return React.createElement(Option, { key: option, optiontext: option });
				})
			);
		}
	}]);

	return Options;
}(React.Component);
//react component


var Option = function (_React$Component5) {
	_inherits(Option, _React$Component5);

	function Option() {
		_classCallCheck(this, Option);

		return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
	}

	_createClass(Option, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				this.props.optiontext
			);
		}
	}]);

	return Option;
}(React.Component);
//react component


var AddOption = function (_React$Component6) {
	_inherits(AddOption, _React$Component6);

	function AddOption() {
		_classCallCheck(this, AddOption);

		return _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).apply(this, arguments));
	}

	_createClass(AddOption, [{
		key: "handleAddOption",
		value: function handleAddOption(e) {
			//prevents the default form submission
			e.preventDefault();
			var option = e.target.elements.option.value.trim();
			if (option) {
				alert(option);
			}
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(
					"form",
					{ onSubmit: this.handleAddOption },
					React.createElement("input", { type: "text", name: "option" }),
					React.createElement(
						"button",
						null,
						"Add options"
					)
				)
			);
		}
	}]);

	return AddOption;
}(React.Component);

var app_id = document.getElementById("app");

ReactDOM.render(React.createElement(Indecision, null), app_id);
