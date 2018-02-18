import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';

class AuthScreen extends Component {
    loginHandler = () => {
        startMainTabs();
    }
    render () {
        return (
            <View>
                <Text>Auth Screen</Text>
                <Button title="Login" onPress={this.LoginHandler}/>
            </View>
        );
    }
}

export default AuthScreen;