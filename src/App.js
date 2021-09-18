
import './App.css';
import {createBrowserHistory} from 'history'
import {Router, Switch} from 'react-router-dom'
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import Home from './pages/Home/Home'
import { UserTemplate } from 'templates/UserTemplate/UserTemplate';
import Login from './pages/Login/Login'
import CheckoutTemplate from 'templates/CheckoutTemplate/CheckoutTemplate';
import Checkout from 'pages/Checkout/Checkout';
import Detail from 'pages/Detail/Detail';

export const history = createBrowserHistory();

function App() {
  return (
    
    <Router history = {history}>
      <Switch>
        <HomeTemplate path="/" exact Component={Home} />
        <HomeTemplate path="/detail/:id" exact Component={Detail} />

        <UserTemplate path="/login" exact Component={Login}/>
        <CheckoutTemplate path="/checkout/:id" exact component={Checkout} />
        
      </Switch>
      
    </Router>
  );
}

export default App;
