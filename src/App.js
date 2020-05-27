import React, { Fragment } from 'react';
import { Home, ThreeD } from './components';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';

const App = () => {
	return (
		<Fragment>
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/3d" component={ThreeD} />
					{/* <Route exact path="*" component={Home} /> */}
					<Redirect from="*" to="/3d" />
				</Switch>
			</Router>
		</Fragment>
	);
};

export default App;
