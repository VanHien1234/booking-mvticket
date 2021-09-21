
import './App.css';
import {createBrowserHistory} from 'history'
import {Router, Switch} from 'react-router-dom'
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import Home from './pages/Home/Home'
import { UserTemplate } from 'templates/UserTemplate/UserTemplate';
import Login from './pages/Login/Login'
import CheckoutTemplate from 'templates/CheckoutTemplate/CheckoutTemplate';
import Checkout from 'pages/Checkout/Checkout';
import AdminTemplate from 'templates/AdminTemplate/AdminTemplate';
import User from 'adminPage/User/User';
import Films from 'adminPage/Films/Films';
import AddFilm from 'adminPage/Films/AddFilm';
import EditFilm from 'adminPage/Films/EditFilm';
import Register from 'pages/Register/Register';
import AddShowTime from 'adminPage/Films/AddFilmShowTime';
import FilmShowTime from 'adminPage/Films/FilmShowTime';
import UserProfile from 'pages/UserProfile/UserProfile';
import EditUser from 'adminPage/User/EditUser';

export const history = createBrowserHistory();

function App() {
  return (
    
    <Router history = {history}>
      <Switch>
        <HomeTemplate path="/" exact Component={Home} />

        <UserTemplate path="/login" exact Component={Login}/>
        <UserTemplate path="/register" exact Component={Register}/>
        <UserTemplate path="/profile" exact Component={UserProfile}/>
        <CheckoutTemplate path="/checkout/:id" exact component={Checkout} />
        <AdminTemplate path="/admin" exact Component={User}/>
        <AdminTemplate path="/admin/films" exact Component={Films}/>
        <AdminTemplate path="/admin/films/editMovie/:id" exact Component={EditFilm}/>
        <AdminTemplate path="/admin/films/addnew" exact Component={AddFilm}/>
        <AdminTemplate path="/admin/films/addshowtime/:id" exact Component={AddShowTime}/>
        <AdminTemplate path="/admin/films/showtime/:id" exact Component={FilmShowTime}/>
        <AdminTemplate path="/admin/user/editUser/:id" exact Component={EditUser}/>
        
      </Switch>
      
    </Router>
  );
}

export default App;
