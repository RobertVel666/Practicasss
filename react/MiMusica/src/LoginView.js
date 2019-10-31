import React, {Component} from 'react';
import {
    Platform,
    Stylesheet,
    View,
    Text,
    Image,
    Textinput,
    TouchableOpacity,
} from 'react-native';
import { Actions } from "react-native-router-flux";
import { getToken } from "./api-client";

export default class LoginView extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: null,
            password: null,
        };
    }
    ingresar = () => {
        getToken(this.state.username, this.state.password).then(data => {
            global.token = data.token
            Actions.home()
        }).catch((error) => {
            //Si hay un error en la respuesta
            console.warn(error)
        })
    }
    render(){
        return(
            <View style={styles.container}>
                <Image source={require('./assets/ucol.png')} style = {styles.logo} resizeMode= "contain"/>
                <Textinput
                    style={styles.textInput}
                    onChangeText={(username) => this.setState({username})}
                    value = {this.state.username}
                    placeholder = {'Correo electrónico*'}
                    placeholderTextColor = {'#000035'}
                    onSubmitEditing ={() => {this.passwordTextInput.focus(); }}
                    returnKeyType = {'next'}
                />
                <Textinput
                    style={styles.textInput}
                    onChangeText={(password) => this.setState({password})}
                    value = {this.state.password}
                    secureTextEntry = {true}
                    placeholder = {'Contraseña'}
                    placeholderTextColor = {'#000035'}
                    ref = {(input) => {this.passwordTextInput = input; }}
                    onSubmitEditing ={() => {this.passwordTextInput.focus(); }}
                    returnKeyType = {this.ingresar}
                />

                <TouchableOpacity onPress={this.ingresar} style={styles.boton}>
                    <Text style = {styles.textoBoton}>
                        Entrar
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
