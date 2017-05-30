import userState from './utils/userState.js'
import MainPage from './pages/MainPage'
import RealTime from './pages/RealTime'
import History from './pages/History'
import SmartDetect from './pages/SmartDetect'
import CustomManagement from './pages/CustomManagement'
import StationInformation from './pages/StationInformation'
import StationParams from './pages/StationParams'
import StationFixedRecord from './pages/StationFixedRecord'
import LogIn from './pages/LogIn'
import Index from './pages/Index'

function redirectToLogin (nextState, replace) {
    if(!userState.loggedIn()){
        replace({
            pathname : '/LogIn',
            state: { nextPathname: nextState.location.pathname }
        });
    }
}

function LogOutFirst (nextState, replace) {
    if(userState.loggedIn()){
        userState.logOut();
    }
}


export default {
    component : Index,
    childRoutes : [
        {
            onEnter : LogOutFirst,
            childRoutes : [
                {
                    path : '/LogOut',
                    getComponent : (nextState, cb) => {
                        cb(null, LogIn);
                    }
                }
            ]
        },
        {
            path : '/LogIn',
            getComponent : (nextState, cb) => {
                cb(null, LogIn);
            }
        },
        {
            //onEnter : redirectToLogin,
            childRoutes : [
                {
                    path : '/',
                    getComponent : (nextState, cd) => {
                        cd(null, MainPage);
                    },
                    indexRoute: {
                        getComponent : (nextState, cd) => {
                            cd(null, RealTime);
                        }
                    },
                    childRoutes : [
                        {
                            path : '/RealTime',
                            getComponent : (nextState, cd) => {
                                cd(null, RealTime);
                            }
                        },
                        {
                            path : '/History',
                            getComponent : (nextState, cd) => {
                                cd(null, History);
                            }
                        },
                        {
                            path : '/SmartDetect',
                            getComponent : (nextState, cd) => {
                                cd(null, SmartDetect);
                            }
                        },                      
                        {
                            path : '/CustomManagement',
                            getComponent : (nextState, cd) => {
                                cd(null, CustomManagement);
                            }
                        },                        
                        {
                            path : '/StationInformation',
                            getComponent : (nextState, cd) => {
                                cd(null, StationInformation);
                            }
                        },                        
                        {
                            path : '/StationParams',
                            getComponent : (nextState, cd) => {
                                cd(null, StationParams);
                            }
                        },                        
                        {
                            path : '/StationFixedRecord',
                            getComponent : (nextState, cd) => {
                                cd(null, StationFixedRecord);
                            }
                        },                   
                    ]
                }
            ]            
        }
    ]
}