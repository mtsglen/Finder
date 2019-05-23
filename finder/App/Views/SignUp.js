import React from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';
import{ Input, CheckBox, Tooltip, Text } from 'react-native-elements';

export class SignUp extends React.Component {
        constructor(props) {
                super(props);
                this.state = { 
                    username: '',
                    password: '',
                    passwordconfirm: '',
                    name: '',
                    parent: '',

                };
            };


   render() {
        return (
                <View style={styles.container}>
                        <Text style={styles.heading}>Welcome</Text>
                        <Text style={styles.sub}>Please fill out the form below to sign up!</Text>

                        <Input 
                        style={styles.inputs} 
                        onChangeText={(text) => this.setState({name: text})}
                        value={this.state.name}
                        />
                        <Text style={styles.label}>Enter Your Name</Text>
                        
                        <Input 
                        style={styles.inputs} 
                        onChangeText={(text) => this.setState({username: text})}
                        value={this.state.username}
                        />
                        <Text style={styles.label}>Enter Username</Text>

                        <Input 
                        style={styles.inputs} 
                        onChangeText={(text) => this.setState({password: text})}
                        value={this.state.passwrd}
                        secureTextEntry={true}
                        />
                        <Text style={styles.label}>Enter Password</Text>

                        <Input 
                        style={styles.inputs} 
                        onChangeText={(text) => this.setState({passwordconfirm: text})}
                        value={this.state.passwrdconfirm}
                        secureTextEntry={true}
                        />
                        <Text style={styles.label}>Confirm Password</Text>

                        {/* <CheckBox 
                        left
                        title="Mom" //checkedIcon={<Image source={require('../checked.png')} />}
                        //uncheckedIcon={<Image source={require('../unchecked.png')} />}
                        checked={this.state.checked}
                        onPress={() => this.setState({checked: !this.state.checked})} />

                        <CheckBox 
                        center
                        title="Dad" //checkedIcon={<Image source={require('../checked.png')} />}
                        // uncheckedIcon={<Image source={require('../unchecked.png')} />}
                        checked={this.state.checked}
                        onPress={() => this.setState({checked: !this.state.checked})} /> */}

                        {/* <Tooltip 
                        right
                        toggleOnPress={<Text>We will use this to help customize your search.</Text>}>
                        <Text>?</Text>
                        </Tooltip> */}

                        <TouchableHighlight onPress={this.props.navigation.navigate('Home')} underlayColor='#31e981'>
                        <Text style = {styles.buttons}>
                                Sign Up
                        </Text>
                        </TouchableHighlight>

                        <TouchableHighlight onPress={this.cancelLogin} underlayColor='#31e981'>
                        <Text style = {styles.buttons}>
                                Cancel  
                        </Text>
                        </TouchableHighlight>
                        
                </View>
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
    heading: {
        fontSize: 16,
        flex: 1
    },
    sub: {
        fontSize:12,
        flex:1    
    },
    inputs:{
        flex: 1,
        width: '80%',
        padding: 10
    },
    buttons:{
        marginTop: 15,
        fontSize: 16
    },
    labels:{
        paddingBottom: 10
    }
});
