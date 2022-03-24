import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.min.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import store from "./Redux/store";

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

export default store;

reportWebVitals();