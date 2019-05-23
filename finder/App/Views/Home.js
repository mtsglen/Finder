import React from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements';
import FixedHeader from '../../App/Components/Header.js';
import { Map } from '../../App/Components/Map.js';
import { Footer } from '../../App/Components/Footer.js';

export class Home extends React.Component {
  
  render() {
        
      return (
          <View style={styles.container}>
              <FixedHeader />
              <Map />
              <TouchableHighlight style={styles.button}
                onPress={this.props.navigation.navigate('addScreen')}> 
                  <Icon
                    name='plus'
                    type= 'simple-line-icon'
                    underlayColor= '#92B3F6'
                    color='#92B3F6'
                    size= '40'
                  />
                </TouchableHighlight>
              <Footer />
          </View>
      );
  }

}

const styles = StyleSheet.create({
  container: {
      flex: 1
  },
  button: {
    position: 'absolute',                                          
    bottom: 80,                                                    
    right: 30, }
});
