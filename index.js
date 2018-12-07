import React from 'react';
import {Text, AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Header from './src/components/header'

const App = () => (
    <Header headerText = {'Albums'}/>
);

AppRegistry.registerComponent(appName, () => App);
