import React from 'react';
import { Text } from 'react-native';
import { KeyboardView, 
    Title, 
    StyleSheet, 
    Container, 
    Input, 
    ButtonSubmit, 
    TextSubmit, 
    SubTitle, 
    Image, 
    View,
    Button,
    GoogleSubmit, 
    FacebookSubmit,
    RegisterSubmit,
    ForgotSubmit
    } from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {LinearGradient} from 'expo-linear-gradient'
import  Feather  from 'react-native-vector-icons/Feather'
import Homepage from '../Homepage/Homepage';
import ProfileScreen from '../ProfileScreen/ProfileScreen';
import { useEffect, useState } from "react";
import { IconButton, MD3Colors } from 'react-native-paper';
import ToastManager, { Toast } from 'toastify-react-native'


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function  Signin({ navigation }) {
    const [login, setLogin] = useState("")
    const [passwordShown, setPasswordShown] = useState(true)
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    }

    function validateLogin(){
        navigation.navigate('HubScreen')
    }

    function emailValid(){
        let res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (res.test(email)) {
            return true
        } else {
            console.log('Email not valid')
            Toast.error('Email not valid')

        }
    }

    function passwordValid() {
        let res = /(?=.*[A-Z])(?=.*[!@#\$%])/;
        if (res.test(password)) {
        return true

        } else {
            console.log('Example: Password123@')
            Toast.error('Example: Password123@')
            return false
        }
    }

    const sleep = (duration) => {
        return new Promise(resolve => setTimeout(resolve, duration));
    } 

    function ValidateLogin(){
        if(emailValid() && passwordValid()){
            navigation.navigate('HubScreen')
        }else{
            Toast.error('User or password incorrect')
        }
    }



    return(
        
        <KeyboardView>
        <LinearGradient colors={['#16293E', '#1D1E32']}>
        <Container>
            <ToastManager position="top"/>
            
            <Image
            source={require('../../assets/raposo.png')}
            style={{width:218, height:233}}
            />
            <Title>Login</Title>
            <SubTitle>Login to your Account</SubTitle>

            <View
            style={{
                flexDirection: 'row',
                marginBottom: 20
            }}
            >
            
            <Input
                placeholderTextColor="grey"
                placeholder="Username" 
                onChangeText={setEmail}
                value={email} 
            >
            </Input>
            <Feather name="user" size={30} color="white" style={{position: 'absolute', right: 15, marginTop: 14}} />
            </View>

            <View
            style={{
                flexDirection: 'row',               
                marginBottom: 20
            }}
            >
            <Input
                placeholderTextColor="grey"
                secureTextEntry={passwordShown ? true : false}
                placeholder="Password"
                onChangeText={setPassword}
                value={password}    
            >
            </Input>

            <Icon
            name={passwordShown ? "eye-slash" : "eye"} size={30} color="white" style={{position: 'absolute', right: -20, marginTop: 2}}
            onPress={togglePassword}
            >
            <IconButton
            >
            </IconButton>
            </Icon>
            </View>
            
            <ButtonSubmit onPress={()=>ValidateLogin()}>               
                <TextSubmit>Login</TextSubmit>
            </ButtonSubmit>
            

            <ForgotSubmit onPress={() => navigation.navigate('ForgotPassword')}>
                <Text style={{textDecorationLine: 'underline', color: 'white', marginTop: 10,}}>Forgot Password?</Text>
            </ForgotSubmit>
            
            <RegisterSubmit onPress={() => navigation.navigate('Register')}>
                <Text style={{textDecorationLine: 'underline', color: 'white', marginTop: 10, marginBottom: 20}}>You are not registered? Register Now!</Text>
            </RegisterSubmit>
            
        </Container>
        </LinearGradient>
        </KeyboardView>    
        

    )
}

export default Signin