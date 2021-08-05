import React from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import InProgress from './pages/InProgress';
import Worksense from './pages/Worksense';
import WeSchedule from './pages/WeSchedule';
import CornerHealth from './pages/CornerHealth';


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
            <Route path="/in-progress" component={InProgress}/>
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
