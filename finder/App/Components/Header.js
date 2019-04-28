import React from 'react';
import {Header} from 'react-native-elements';

export class header extends React.Component {

    render() {

        <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'Pitter Patter', style: { color: '#fff' } }}
        rightComponent={{ icon: 'search', color: '#fff' }}
        />
    }
};