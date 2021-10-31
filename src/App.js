import './App.css';
import HeaderBar from './components/headbar/headerbar';
import Sidebar from './components/sidebar/Sidebar';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './pages/Reports';
import Team from './pages/Team';

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Sidebar id='sidebar'/>
        <HeaderBar id='headerbar'/>
        <div id='content'>
          <Switch>
            <Route path='/home' exact component={Home} />
            <Route path='/reports' exact component={Reports} />
            <Route path='/reports/reports1' exact component={ReportsOne} />
            <Route path='/reports/reports2' exact component={ReportsTwo} />
            <Route path='/reports/reports3' exact component={ReportsThree} />
            <Route path='/team' exact component={Team} />
          </Switch>
        </div>
      </Router>
      
    </div>
  );
}

export default App;
