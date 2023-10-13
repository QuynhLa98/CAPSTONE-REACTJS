import { createBrowserHistory } from 'history'
import { Route, Router, Switch } from 'react-router';
import { Suspense, lazy } from 'react';
import AdminTemplate from './templates/AdminTemplate/AdminTemplate';
import CheckoutTemplate from './templates/CheckoutTemplate/CheckoutTemplate';
import UserTemplate from './templates/UserTemplate/UserTemplate';
import Loading from './components/Loading/Loading'
import Films from './pages/Admin/Films/Film';
import Showtime from './pages/Admin/ShowTime/ShowTime';
import AddNew from './pages/Admin/Films/AddNew/AddNew';
import Edit from './pages/Admin/Films/Edit/Edit';
import User from './pages/Admin/User/User';
import AddUser from './pages/Admin/User/AddUser/AddUser';
import EditUser from './pages/Admin/User/EditUser/EditUser';


export const history = createBrowserHistory()

function App() {
  return (
    <Router history={history}>
      
      <Switch>
        <AdminTemplate path="/admin" exact Component={User} />
        <AdminTemplate path="/admin/user" exact Component={User} />
        <AdminTemplate path="/admin/user/adduser" exact Component={AddUser} />
        <AdminTemplate path="/admin/user/edit/:id" exact Component={EditUser} />

        <AdminTemplate path="/admin/films" exact Component={Films} />
        <AdminTemplate path="/admin/films/addnew" exact Component={AddNew} />
        <AdminTemplate path="/admin/films/edit/:id" exact Component={Edit} />
        <AdminTemplate path="/admin/films/showtime/:id/:tenphim" exact Component={Showtime} />
      

      </Switch>

    </Router>
  );
}

export default App;