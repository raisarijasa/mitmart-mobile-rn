'use strict';

import React from 'react-native';
import LoginScreen from '../login/screen_login';
import HomeScreen from '../home/screen_home';
import WelcomeScreen from '../welcome/screen_welcome';
import SignUpScreen from '../sign_up/screen_sign_up';
var {
    Component,
    Navigator,
    BackAndroid
} = React;
var nav;

class App extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{ id: 'WelcomeScreen' }}
                renderScene={this.renderScene.bind(this) }
                configureScene={(route) => {
                    if (route.sceneConfig) {
                        return route.sceneConfig;
                    }
                    return Navigator.SceneConfigs.FloatFromRight;
                } } />
        );
    }

    renderScene(route, navigator) {
        nav = navigator;
        let routeId = route.id;
        switch (routeId) {
            case 'WelcomeScreen':
                return (
                    <WelcomeScreen
                        navigator={navigator} />
                );
            case 'LoginScreen':
                return (
                    <LoginScreen
                        navigator={navigator} />
                );
            case 'HomeScreen':
                return (
                    <HomeScreen
                        navigator={navigator}
                        username={route.username}
                        loginId={route.loginId}
                        userId={route.userId} />
                );
            case 'SignUpScreen':
                return (
                    <SignUpScreen
                        navigator={navigator} />
                );
        }
    }
}

BackAndroid.addEventListener('hardwareBackPress', function () {
    if (nav && nav.getCurrentRoutes().length > 1) {
        nav.pop();
        return true;
    }
    return false;
});

module.exports = App;