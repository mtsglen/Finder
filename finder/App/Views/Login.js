import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    TouchableHighlight, 
    Alert, 
    AsyncStorage } from 'react-native';
import{ Input } from 'react-native-elements';

export class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            passwrd: ''
        };
    };

    cancelLogin = ()=>{
        Alert.alert('Login cancelled');
        this.props.navigation.navigate('Login');
    };

    loginUser = ()=>{
        
        if ( !this.state.username ){
            Alert.alert('Please enter a username')
        }
        else if ( !this.state.passwrd ){
            Alert.alert('Please enter a password')
        }
        else {
            AsyncStorage.getItem('userLoggedIn', (err, result) => {

                if (result!=='none'){
                    Alert.alert('Someone already logged on');
                    this.props.navigation.navigate('Home');
                }
                else{
                    
                    AsyncStorage.getItem(this.state.username, (err, result) => {

                        if (result!==null){

                            if(result!==this.state.passwrd) {
                                Alert.alert('Password incorrect')
                            }
                            else {
                                AsyncStorage.setItem('userLoggedIn',this.state.username, (err, result) => {
                                    Alert.alert(`${this.state.username} Logged in`);
                                    this.props.navigation.navigate('Home');
                                });
                            }

                        }
                        else{
                            Alert.alert(`No account for ${this.state.username}`);
                        }
                    })
                }



            })

                
        
        
        }

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Login</Text>

                <Input 
                    style={styles.inputs} 
                    onChangeText={(text) => this.setState({username: text})}
                    value={this.state.username}
                />
                <Text style={styles.label}>Enter Username</Text>

                <Input 
                    style={styles.inputs} 
                    onChangeText={(text) => this.setState({passwrd: text})}
                    value={this.state.passwrd}
                    secureTextEntry={true}
                />
                <Text style={styles.label}>Enter Password</Text>

                <TouchableHighlight onPress={this.loginUser} underlayColor='#31e981'>
                    <Text style = {styles.buttons}>
                        Login
                    </Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={this.cancelLogin} underlayColor='#31e981'>
                    <Text style = {styles.buttons}>
                        Cancel
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('SignUp')} underlayColor='#31e981'>
                    <Text style = {styles.buttons}>
                        Sign Up
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
