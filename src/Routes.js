import React from 'react';
import {HashRouter,Switch,Route} from 'react-router-dom';
import GEP from './components/GEP';
import Home from './components/Home';
import P1 from './components/P1';
import P2 from './components/P2';
import P3 from './components/P3';
import P4 from './components/P4';
import SV from './components/SV';
import VC from './components/VC';
import VCP from './components/VCP';

const Routes=()=>{
    return(<HashRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Kaneesha_Portfolio_GEP" exact component={GEP} />
            <Route path="/Kaneesha_Portfolio_VC" exact component={VC} />
            <Route path="/Kaneesha_Portfolio_SV" exact component={SV} />
            <Route path="/Kaneesha_Portfolio_Project1" exact component={P1} />
            <Route path="/Kaneesha_Portfolio_Project2" exact component={P2} />
            <Route path="/Kaneesha_Portfolio_Project3" exact component={P3} />
            <Route path="/Kaneesha_Portfolio_Project4" exact component={P4} />
            <Route path="/Kaneesha_Portfolio_VC_Project" exact component={VCP} />
        </Switch>
    </HashRouter>)
}
export default Routes;