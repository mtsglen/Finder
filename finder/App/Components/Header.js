import React from 'react';
import {Header} from 'react-native-elements';
//import { TouchableHighlight } from 'react-native';



const FixedHeader = () => (    
    <Header
    leftComponent={{ icon: 'menu', color: '#fff'}}
    centerComponent={{ text: 'Pitter Patter', style: { color: '#fff' } }}
    rightComponent={{ icon: 'search', color: '#fff' }}
    containerStyle={{
        backgroundColor: '#92B3F6',
        justifyContent: 'space-around',
      }}
    />
)

export default FixedHeader   
