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

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function  Signin({ navigation }) {
    return(
        
        <KeyboardView>
        <LinearGradient colors={['#220A41', '#371480', '#220A41']}>
        <Container>
            
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
                placeholderTextColor="#fff"
                placeholder="Username" 
                
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
                placeholderTextColor="#fff"
                secureTextEntry={true}
                placeholder="Password"       
                       
                ></Input>
            <Icon name="eye-slash" size={30} color="white"  style={{position: 'absolute', right: 15, marginTop: 14, marginLeft: 7}} />
            
            
            </View>
            
            <ButtonSubmit onPress={() => navigation.navigate('HubScreen')}>               
                <TextSubmit>Login</TextSubmit>
            </ButtonSubmit>
            

            <ForgotSubmit onPress={() => navigation.navigate('ForgotPassword')}>
                <Text style={{textDecorationLine: 'underline', color: 'white', marginTop: 10,}}>Forgot Password?</Text>
            </ForgotSubmit>
            
            <RegisterSubmit onPress={() => navigation.navigate('Register')}>
                <Text style={{textDecorationLine: 'underline', color: 'white', marginTop: 10, marginBottom: 20}}>You are not registered? Register Now!</Text>
            </RegisterSubmit>


            <View
            style={{
                flexDirection: 'row'
            }}
            >
            <GoogleSubmit style={{flexDirection: 'row', marginRight: 30}}>
                <Image  
                source={require('../../assets/Bitcoin.png')}
                style={{width:35, height:35}}
                imageStyle={{borderRadius: 25}}
                />
            </GoogleSubmit>

            <FacebookSubmit style={{flexDirection: 'row'}}>
                <Icon name="facebook" color="white" size={35}  />
            </FacebookSubmit> 
            </View>
            
        </Container>
        </LinearGradient>
        </KeyboardView>    
        

    )
}

export default Signin;





