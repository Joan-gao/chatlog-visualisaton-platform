/*!
=========================================================
* Muse Ant Design Dashboard - v1.0.0
=========================================================
* Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
* Coded by Creative Tim
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import LogDetails from './pages/LogDetails';
import Profile from './pages/Setting';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Main from './components/layout/Main';
import 'antd/dist/antd.css';
import './assets/styles/main.css';
import './assets/styles/responsive.css';
import Collections from './pages/Collection';
import DetailPage from './pages/DetailPage';
import Graph3DPage from './pages/Graph3DPage';
import Setting from './pages/Setting'
import SmartDatabase from './pages/SmartDatabase'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/sign-in" exact component={SignIn} />
        <Main>
          <Route exact path="/dashboard" component={Home} />
          <Route exact path="/cards" component={LogDetails} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/collection" component={Collections} />
          <Route exact path="/3dgraph" component={Graph3DPage} />
          <Route exact path="/setting" component={Setting} />
          <Route exact path="/smartdatabase" component={SmartDatabase} />
          <Route exact path="/detail/:id" component={DetailPage} />
          <Redirect from="*" to="/dashboard" />
        </Main>
      </Switch>
    </div>
  );
}

export default App;
