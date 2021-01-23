// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Base64 } from 'js-base64';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class PasswordEncryptor extends React.Component {
constructor(){
    super();
    this.state = {
        password:'',
        encryptedPassword:'',
        application:'',
    }
}
   encryptPassword = () =>{
        var encryptedPassword = Base64.encode(this.state.password);
        this.setState({
            "encryptedPassword":encryptedPassword,
        }).then(()=>{
            console.log(this.state.encryptedPassword);
        })
    }
  render() {
    return (
        // <SafeAreaProvider>
      <View>
        {/* <Text> Password Encryptor </Text> */}

        {/* <TextInput
          onChangeText = {(text)=>{
              this.setState({
                  "application":text,
              });
          }}
          value = {this.state.application}
          placeholder = {"Enter the application"}
        /> */}

        <TextInput
            onChangeText = {(text)=>{
            this.setState({
                "password":text,
            });
            }}
        value = {this.state.password}
        placeholder = {"Password"}
        />

        <TouchableOpacity onPress = {()=>{this.encryptPassword}}>
            <Text> Click </Text>
        </TouchableOpacity>

        <Text> {this.state.encryptedPassword} </Text>
      </View>
    );
  }
}


