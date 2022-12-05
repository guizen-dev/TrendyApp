import React from 'react';
import { View, Text, Container, Title, Hamburger, TouchableOpacity, ImageBackground, SignoutrSubmit, SubTitle, Input}  from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ionicon from 'react-native-vector-icons/Ionicons'
import { borderBottomColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Signin from '../Signin/Signin';
import Register from '../Register/Register';
import ForgotPassword from '../ForgotPassword/ForgotPassword';
import PasswordUpdated from '../PasswordUpdated/PasswordUpdated'
import Homepage from '../Homepage/Homepage';
import { Touchable } from 'react-native-web';

function EditProfile( {navigation} ){
    return(
        <Container style={{flex:1,backgroundColor:'#16293E'}}>
            <Feather name="arrow-left" color="white" size={30} style={{position: 'absolute', top: 42, marginLeft: '3%'}} onPress={() => navigation.navigate('HubScreen')}/>
            <Title style={{fontSize: 26, marginVertical: '6%', left: 120}}>Edit Profile</Title>
            <Ionicon name="checkmark" color="white" size={30} style={{position: 'absolute', top: 42, marginLeft: '88%'}} onPress={() => navigation.navigate('HubScreen')}/>
            <View style={{flexDirection:'row',justifyContent:'space-between', marginBottom:20,alignItems:'center'}}>
                
            </View>

                <View 
                style={{
                    
                    justifyContent: 'space-between',
                    
                }}>
                    <SubTitle style={{marginLeft: '3%', top: 50}}>Photo</SubTitle>

                    <Icon
                        name="user" size={130} color="white"
                        style={{
                            width:100, 
                            height:130, 
                            left: 150,
                            bottom: 30}}

                            
                    ></Icon>

                    <View style={{alignItems: 'center',
                                  right: 100}}>
                    <Title style={{
                            left: 100,
                            bottom: 20}}>Vinicius</Title>
                    <SubTitle style={{                       
                            left: 100,
                            bottom: 20}}>Front-end</SubTitle>    
                    </View>                
                </View>

                
                <View style={{marginVertical: '2%'}}>
                    <SubTitle style={{marginLeft: '3%'}}>Username</SubTitle>
                    <Input maxLength={30} style={{marginLeft: '3%', marginVertical:'3%', width: '90%', height:30,borderBottomWidth: 1 , borderBottomColor: '#FFFFFF'}}>Vinicius</Input>
                </View>

                <View style={{marginVertical: '2%'}}>
                    <SubTitle style={{marginLeft: '3%'}}>Occupation</SubTitle>
                    <Input maxLength={30} style={{marginLeft: '3%', marginVertical:'3%', width: '90%', height:30,borderBottomWidth: 1 , borderBottomColor: '#FFFFFF'}}>Front-end</Input>
                </View>

                <View style={{marginVertical: '2%'}}>
                    <SubTitle style={{marginLeft: '3%'}}>Email</SubTitle>
                    <Input maxLength={30} style={{marginLeft: '3%', marginVertical:'3%', width: '90%', height:30,borderBottomWidth: 1 , borderBottomColor: '#FFFFFF'}}>vinicius.sr.2005@gmail.com</Input>
                </View>

                <View style={{marginVertical: '2%'}}>
                    <SubTitle style={{marginLeft: '3%'}}>Password</SubTitle>
                    <Input maxLength={30} style={{marginLeft: '3%', marginVertical:'3%', width: '90%', height:30,borderBottomWidth: 1 , borderBottomColor: '#FFFFFF'}}>****</Input>
                    <Icon name="eye-slash" size={30} color="white"  style={{position: 'absolute', right: 25, marginTop: 14, marginLeft: 7}} />
                </View>

                
        </Container>
    )
}

export default EditProfile;