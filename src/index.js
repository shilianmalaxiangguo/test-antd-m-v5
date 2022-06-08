// import ''
import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './adapter'

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
