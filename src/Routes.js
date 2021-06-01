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
import {useRoutes} from 'hookrouter';

const routes = {
    '/Kaneesha_Portfolio/': () => <Home/>,
    '/Kaneesha_Portfolio/Kaneesha_Portfolio_GEP': () => <GEP />,
    '/Kaneesha_Portfolio/Kaneesha_Portfolio_VC': () => <VC />,
    '/Kaneesha_Portfolio/Kaneesha_Portfolio_SV': () => <SV />,
    '/Kaneesha_Portfolio/Kaneesha_Portfolio_Project1': () => <P1 />,
    '/Kaneesha_Portfolio/Kaneesha_Portfolio_Project2': () => <P2 />,
    '/Kaneesha_Portfolio/Kaneesha_Portfolio_Project3': () => <P3 />,
    '/Kaneesha_Portfolio/Kaneesha_Portfolio_Project4': () => <P4 />,
    '/Kaneesha_Portfolio/Kaneesha_Portfolio_VC_Project': () => <VCP />,
};

const Routes=()=>{
    const routeResult = useRoutes(routes);
    
    return routeResult;
}
export default Routes;