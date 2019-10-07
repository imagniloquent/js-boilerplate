import React, {Component} from "react";
import ReactDOM from "react-dom";
import "./App.scss";

class App extends Component {
	componentDidMount()
	{
		console.log("Hello, world!");
	}
	
	render()
	{
		return (
			<div>
				<h1>Hello, world!</h1>
			</div>
		);
	}
};

ReactDOM.render(<App />, document.getElementById("app"));
