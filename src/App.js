
import './App.css';
import 'antd/dist/antd.css';
import { DatePicker } from 'antd';
import {createBrowserHistory} from 'history'
import {Router, Switch} from 'react-router-dom'
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import Home from './pages/Home/Home'
import DashBoard from 'pages/Admin/DashBoard/DashBoard';
import Films from 'pages/Admin/Films/Films';
import ShowTime from 'pages/Admin/ShowTime/ShowTime';
import AdminTemplate from 'templates/AdminTemplate/AdminTemplate';
import AddNew from 'pages/Admin/Films/Addnew/Addnew';
import Edit from 'pages/Admin/Films/Edit/Edit';

export const history = createBrowserHistory();

function App() {
  return (
    
    <Router history = {history}>
      <Switch>
        <HomeTemplate path="/" exact Component={Home} />

        {/* <AdminTemplate path="/admin" exact Component={DashBoard}/>
        <AdminTemplate path="/admin/films" exact Component={Films}/>
        <AdminTemplate path="/admin/films/addnew" exact Component={AddNew}/>
        <AdminTemplate path="/admin/films/edit/:id" exact Component={Edit}/>
        <AdminTemplate path="/admin/films/showtimes/:id/:tenphim" exact Component={ShowTime}/> */}
      </Switch>
    </Router>
  );
}

export default App;
