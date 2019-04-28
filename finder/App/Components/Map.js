import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 39.562831;
const LONGITUDE = 104.876550;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

export class Map extends React.Component {

  // constructor(props){
  //   super(props);
  //   this.state ={ isLoading: true}
  // }

  
  // render(){

  //   if(this.state.isLoading){
  //     return(
  //       <View style={{flex: 1, padding: 20}}>
  //         <ActivityIndicator size="large" color="#0000ff" />
  //       </View>
  //     )
  //   }

  // getInitialState() {
  //   return {
  //     region: {
  //       latitude: 39.562831,
  //       longitude: 104.876550
  //     },
  //   };
  // }

  constructor(props) {
    super(props);
    this.state = { region: {
          latitude: 39.562831,
          longitude: 104.876550,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }
      };
    };
  // onRegionChange(region) {
  //   this.setState({ region });
  // }
 
 render () {
   return (
    <View style={styles.container}>
      <MapView 
        style={styles.location}
        // provider={PROVIDER_GOOGLE}
        region={this.state.region}
        onRegionChange={this.onRegionChange}
        showsUserLocation={true}
        followsUserLocation={true}
        showsIndoorLevelPicker={true}
        loadingEnabled={true}

        >
      
      </MapView>
    </View>
   )
 }
};

const styles = StyleSheet.create({
  container: {
    flex: 12,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  location: {
    ...StyleSheet.absoluteFillObject,
    width: 400,
    alignItems: 'center',
  }
});
