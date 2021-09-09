import React from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import BEIApp from './pages/BEIApp';
import Brigham from './pages/Brigham';
import Worksense from './pages/Worksense';
import WeSchedule from './pages/WeSchedule';
import CornerHealth from './pages/CornerHealth';
import Booktoons from './pages/Booktoons';
import RDGnu from './pages/rdgNU';


const App = () => {

  AOS.init({
    easing: 'ease',
    duration: 1800,
    once: true
    //eslint-disable-next-line
  });
  
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Megan Chong</title>
      </Helmet>
      <BrowserRouter>
          <div className="App">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/bei-app" component={BEIApp}/>
            <Route path="/brigham" component={Brigham}/>
            <Route path="/booktoons" component={Booktoons}/>
            <Route path="/rdgnu" component={RDGnu}/>
            <Route path="/worksense" component={Worksense}/>
            <Route path="/weschedule" component={WeSchedule}/>
            <Route path="/cornerhealth" component={CornerHealth}/>
          </Switch>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
