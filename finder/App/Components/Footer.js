import React from 'react';
import { StyleSheet, Text, View, Image, AsyncStorage, Alert  } from 'react-native';

export class Footer extends React.Component {


  render() {
    return(
      <View style={styles.Main}>
        <Text style={styles.Text}>
        {'\u00A9'} G-Force Technologies
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  Text: {
      textAlign: 'right',
      color: '#ffffff',
      fontSize: 20,
      flex: 1
  },
  Main: {
      paddingBottom: 15,
      paddingRight: 10,
      backgroundColor: '#92B3F6',
      flex: 1,
      borderTopWidth: 2,
      borderColor: '#ffffff'
  }
})