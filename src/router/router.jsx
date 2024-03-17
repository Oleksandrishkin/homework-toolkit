

import { createBrowserRouter } from "react-router-dom";

// import { Home, Login, Registration, Task} from '../components/pages'
import { App } from "components/App";

import { PhoneBook } from "components/PhoneBook";
import PrivateRoute from "components/PrivateRouter";
import RestrictedRouter from "components/RestrictedRouter";


import { SecondModal } from "components/Header/SecondModal";
import { FirstModal } from "components/Header/FirstModal";

import { ThirdModal } from "components/Header/ThirdModal";
import { ContactsModal } from "components/Header/ContactsModal";

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
                    path: '/contacts',
                    element: <PrivateRoute component={PhoneBook} redirecTo='/login'/>
                },
                {
                    path: '/login',
                    element: <RestrictedRouter component={SecondModal} redirecTo='/'/>
                },
                {
                    path: '/register',
                    element: <RestrictedRouter component={FirstModal} redirecTo='/'/>
                }
                ,
                {
                    path: '/userMenu',
                    element: <ThirdModal/>
                },
                {
                    path: '/addContact',
                    element: <ContactsModal/>
                }
            ]
        }
    ]
)