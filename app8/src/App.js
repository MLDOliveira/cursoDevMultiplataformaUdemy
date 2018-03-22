import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import Routes from './Routes';
import reducers from './reducers';

class App extends Component {

    componentWillMount() {

        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyBqPktUmI3Tf4x5LKXNMs-7yEBDIlG2jXs",
            authDomain: "whatsapp-clone-49a4f.firebaseapp.com",
            databaseURL: "https://whatsapp-clone-49a4f.firebaseio.com",
            projectId: "whatsapp-clone-49a4f",
            storageBucket: "whatsapp-clone-49a4f.appspot.com",
            messagingSenderId: "523522749031"
        };
        firebase.initializeApp(config)

    }

    render(){
        return(
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Routes />
            </Provider>
        );
    }
}

export default App;
