import React from 'react';
import {link,Route} from 'react-router-dom'
import HomePage from "./HomePage";
import ContactsPage from "./ContactsPage";
function App(props) {
    return (
        <div className='app'>

            <link to='/home'>
                главная
            </link>
            <link to='/contacts'>
                контакты
            </link>

            <Route path='/home'>
                <HomePage/>
            </Route>

            <Route path='/contacts'>
               <ContactsPage/>
            </Route>
        </div>
    );
}

export default App;