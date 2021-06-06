import React from 'react';
import {Route} from 'react-router-dom'
import HomePage from "./HomePage";
import ContactsPage from "./ContactsPage";
function App(props) {
    return (
        <div className='app'>
            <a href="/home"> главная</a>
            <a href="/contacts">limda</a>
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