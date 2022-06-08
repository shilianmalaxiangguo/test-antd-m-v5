import 'babel-polyfill';
import React, { Component } from 'react';
import Routes from './routes/index';
import './App.less';
import 'antd-mobile/dist/antd-mobile.css'

class App extends Component {

	render() {
		return (
			<div className="app">
				<Routes />
			</div>
		);
	}
}

export default App;
