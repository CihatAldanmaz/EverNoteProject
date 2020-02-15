import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/brooke.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './redux/reducers/configureStore';
import { Provider } from 'react-redux';


const store = configureStore();

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
