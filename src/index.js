import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-123778670-7');
ReactGA.pageview(window.location.pathname + window.location.search);

Modal.setAppElement('#root');

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
