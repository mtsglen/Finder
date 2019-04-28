import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { header } from '../../App/Components/Header.js';
import { Map } from '../../App/Components/Map.js';
import { Footer } from '../../App/Components/Footer.js';

export class Home extends React.Component {
  
  render() {
          

      return (
          <View style={styles.container}>
              <header />
              <Map />
              <Footer />
          </View>
      );
  }

}

const styles = StyleSheet.create({
  container: {
      flex: 1
  }
});
