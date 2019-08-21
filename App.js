/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import RouterComponent from './App/Navigation/Router';

// create our store
//const store = createStore()

export default class App extends Component {

    render() {
        return (
            <RouterComponent />
        );
    }
}

