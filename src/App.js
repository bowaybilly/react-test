import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavbarContainer from './shared/navbar';
import './App.css';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from './component/notFound';
import Home from './component/home';
function App(props){
	return (
		<React.Fragment>
			<NavbarContainer />
			<Switch>
				<Route path='/' exact render={(props) => <Home auth={props} />} />
				<Route path='**' render={(props) => <NotFound auth={props} />} />
			</Switch>
		</React.Fragment>
	);
}

export default App;
