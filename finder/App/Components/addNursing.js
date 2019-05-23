import React from 'react';
import { StyleSheet, View } from 'react-native';
import{ Text, Overlay, Button, CheckBox } from 'react-native-elements';

export class addNursing extends React.Component {

  render() {
    return (
            <Overlay >
              <Text>Is this a designated nursing area?</Text>
                <CheckBox title='Yes'/>
                <CheckBox title='No'/>
              <Text>Where is the Nursing Room?</Text>
              <View>
                <CheckBox
                  title='Hospital'
                  checked={this.state.checked}
                />
                <CheckBox
                  title='Medical Office'
                  checked={this.state.checked}
                />
                <CheckBox
                  title='Mall'
                  checked={this.state.checked}
                />
                <CheckBox
                  title='Store'
                  checked={this.state.checked}
                />
                <CheckBox
                  title='Restaurant'
                  checked={this.state.checked}
                />
                <CheckBox
                  title='Open Space'
                  checked={this.state.checked}
                />
                <CheckBox
                  title='Airport'


              </View>
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