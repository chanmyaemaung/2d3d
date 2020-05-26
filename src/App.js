import React, { Fragment } from 'react';
import { Home, Main, ThreeD } from './components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
	return (
		<Fragment>
			<Router>
				<Switch>
					<Route
						exact
						path="/"
						render={(props) => (
							<Fragment>
								<Home />
							</Fragment>
						)}
					/>
					<Route path="/2d" component={Main} />
					<Route path="/3d" component={ThreeD} />
				</Switch>
			</Router>
		</Fragment>
	);
};

export default App;
