import './App.css';
import HeaderBar from './components/headbar/headerbar';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Preview from './pages/preview/Preview'
import Home from './pages/home/Home';
import About from './pages/about/About';
import Eduaknow from './pages/eduaknow/Eduaknow';
import Education from './pages/education/Education';
import Knowledge from './pages/knowledge/Knowledge';
import Expaskill from './pages/expaskill/Expaskill';
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './pages/Reports';
import Experience from './pages/experience/Experience';
import Skills from './pages/skills/Skills';
import Portfolio from './pages/portfolio/Portfolio';

import Contacts from './pages/contacts/Contacts';









function App() {
 


  return (
    
    <div className="wrapper">
      
      <Router>
        <Sidebar id='sidebar'/>
        <HeaderBar id='headerbar'/>
        <div id='content'>
          <Switch>
            <Route path='/' exact component={Preview} />
            <Route path='/home' exact component={Home} />
            <Route path='/about' exact component={About} />
            <Route path='/eduaknow' exact component={Eduaknow} />
            <Route path='/eduaknow/Education' exact component={Education} />
            <Route path='/eduaknow/Knowledge' exact component={Knowledge} />
            <Route path='/expaskill' exact component={Expaskill} />
            <Route path='/expaskill/experience' exact component={Experience} />
            <Route path='/expaskill/skills' exact component={Skills} />
            <Route path='/portfolio' exact component={Portfolio} />
            <Route path='/contacts' exact component={Contacts} />
{/*         <Route path='/reports/reports3' exact component={ReportsThree} /> */}
          </Switch>
          </div>
      </Router>
      
    </div>
  );
}

export default App;
