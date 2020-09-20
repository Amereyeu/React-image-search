import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Unsplash from "./Unsplash";

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route exact path="/" component={Unsplash} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
