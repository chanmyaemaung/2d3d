import React, { Fragment } from 'react';
import { Home, ThreeD } from './components';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';

alert('2D/3D ကို လက်ရှိကြည့်ရှု၍ မရနိုင်သေးပါ။ ပြင်ဆင်နေသောကြောင့်ဖြစ်သည်။');

const App = () => {
	return (
		<Fragment>
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/3d" component={ThreeD} />
					{/* <Route exact path="*" component={Home} /> */}
					<Redirect from="*" to="/" />
				</Switch>
			</Router>
		</Fragment>
	);
};

export default App;
