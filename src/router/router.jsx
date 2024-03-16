

import { createBrowserRouter } from "react-router-dom";

// import { Home, Login, Registration, Task} from '../components/pages'
import { App } from "components/App";

import { PhoneBook } from "components/PhoneBook";
import PrivateRoute from "components/PrivateRouter";
import RestrictedRouter from "components/RestrictedRouter";
import { Home } from "components/pages/Home";
import { Login } from "components/pages/Login";
import { Registration } from "components/pages/Registration";

// import { Home, Login, Registration } from "components/pages";

// /
// /Tasks
// /Login
// /Register


export const router =  createBrowserRouter(
    [
        {
            path: '/',
            element: <App/>,
            children: [
                {
                    index: true,
                    element: <Home/>
                }
                ,
                {
                    path: '/contacts',
                    element: <PrivateRoute component={PhoneBook} redirecTo='/login'/>
                },
                {
                    path: '/login',
                    element: <RestrictedRouter component={Login} redirecTo='/'/>
                },
                {
                    path: '/register',
                    element: <Registration/>
                }
            ]
        }
    ]
)