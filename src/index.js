import React from 'react';
import ReactDOM from 'react-dom';
import 'jquery/dist/jquery';
import 'popper.js/dist/umd/popper';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import {store} from './redux/configStore'
import 'antd/dist/antd.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "@fancyapps/ui/dist/fancybox.css";
import 'react-fancybox/lib/fancybox.css'
import { DOMAIN } from 'settingAPI/apiConfig';
import * as signalR from '@aspnet/signalr'  //Cấu hình realtime (websocket với signalR)
import './index.css';


export const connection = new signalR.HubConnectionBuilder().withUrl(`${DOMAIN}/DatVeHub`).configureLogging(signalR.LogLevel.Information).build();

connection.start().then(() => {
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>,
  
  document.getElementById('root')
);
}).catch(errors => {
  console.log('error o day',errors);
})


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
