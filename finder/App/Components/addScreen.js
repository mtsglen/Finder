import React from 'react';
import { StyleSheet } from 'react-native';
import{ Text, Overlay, Button } from 'react-native-elements';

export class addScreen extends React.Component {

render() {
  return (
          <Overlay >
            <Text>What would you like to add?</Text>
            <Text>If changing table is inside a Nursing Room or Family Restroom please select either Nursing Room or Fmaily Restroom.</Text>
            <Text>If Family Restroom is also a Nursing Room please select Nursing Room.</Text>
            <Button type="outline" title='Nursing Room' color='white' raised='true'/>
            <Button type="outline" title='Family Restroom' color='white' raised='true'/>
            <Button type="outline" title='Changing Table' color='white' raised='true'/>
          </Overlay>

    );
  }
}

const styles = StyleSheet.create({
	container: {
    backgroundColor: '#92B3F6',
    flex: 1,
    alignItems: 'center',
    paddingBottom: '45%',
    paddingTop: '10%'
  },
  header: {
    
  }
});
  