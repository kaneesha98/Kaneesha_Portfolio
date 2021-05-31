import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
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
    return(<BrowserRouter>
        <Switch>
            <Route path="/Kaneesha_Portfolio/" exact component={Home} />
            <Route path="/Kaneesha_Portfolio/GEP" exact component={GEP} />
            <Route path="/Kaneesha_Portfolio/VC" exact component={VC} />
            <Route path="/Kaneesha_Portfolio/SV" exact component={SV} />
            <Route path="/Kaneesha_Portfolio/Project1" exact component={P1} />
            <Route path="/Kaneesha_Portfolio/Project2" exact component={P2} />
            <Route path="/Kaneesha_Portfolio/Project3" exact component={P3} />
            <Route path="/Kaneesha_Portfolio/Project4" exact component={P4} />
            <Route path="/Kaneesha_Portfolio/VC/Project" exact component={VCP} />
        </Switch>
    </BrowserRouter>)
}
export default Routes;