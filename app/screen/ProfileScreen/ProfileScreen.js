import React from 'react'
import { View, Text, Container, Title, Hamburger, TouchableOpacity, ImageBackground, SignoutrSubmit, SubTitle}  from './styles'
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

const Tab = createBottomTabNavigator();

function ProfileScreen( {navigation} ){
    return(
        <Container style={{flex:1,backgroundColor:'#16293E'}}>
            <Ionicon name="exit-outline" color="red" size={30} style={{position: 'absolute', top: 42, left: 7}} onPress={() => navigation.navigate('Signin')}/>
            <Title style={{fontSize: 26, marginVertical: 20, left: 110}}>My profile</Title>
            <Ionicon name="pencil" color="white" size={30} style={{position: 'absolute', top: 42, right: 7}} onPress={() => navigation.navigate('EditProfile')}/>
            <View style={{flexDirection:'row',justifyContent:'space-between', marginBottom:20,alignItems:'center'}}>
                
            </View>

                <View 
                style={{
                    marginVertical: 15,
                    justifyContent: 'space-between',
                    
                }}>

                    <Icon
                        name="user" size={130} color="white"
                        style={{
                            width:100, 
                            height:130, 
                            left: 130,
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

                
                <TouchableOpacity
                    style={{
                        width: '100%',
                        padding: 10,
                        flexDirection: 'row',
                        marginBottom: 25,
                        right: 10
                    }} onPress={() => navigation.navigate('Saved')}
                    >

                    <TouchableOpacity
                    style={{
                        width: 45,
                        height: 45,
                        borderRadius: 50,
                        backgroundColor: '#0F0F13',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: 30,
                    }} onPress={() => navigation.navigate('Saved')}       
                    >
                        <Feather name="bookmark" color="white" size={30}/>
                    </TouchableOpacity>

                        <Text style={{top: 10}}>Saved</Text>
                        
                        <TouchableOpacity
                        style={{
                            width: 45,
                            height: 45,
                            borderRadius: 10,
                            backgroundColor: '#0F0F13',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: '48%',
                        }} onPress={() => navigation.navigate('Saved')}
                        >
                            <Feather name="chevron-right" color="white" size={30} />
                        </TouchableOpacity>

                    </TouchableOpacity>

                <View 
                style={{
                    marginVertical: 25,
                    justifyContent: 'space-between',
                    flexDirection: 'column',
                    height: 200,
                    right: 10
                }}>

                    

                    <Title style={{left: 10,fontSize: 20, top: -20}}>Settings</Title>

                   

                    

                    <View style={{bottom: 120}}>
                    

                        <TouchableOpacity
                    style={{
                        width: '100%',
                        padding: 10,
                        flexDirection: 'row'
                    }} onPress={() => navigation.navigate('AboutUs')}
                    >

                    <TouchableOpacity
                    style={{
                        width: 45,
                        height: 45,
                        borderRadius: 50,
                        backgroundColor: '#0F0F13',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: 30,
                    }} onPress={() => navigation.navigate('AboutUs')}
                    >
                        <Feather name="info" color="white" size={30}/>
                    </TouchableOpacity>

                        <Text style={{top: 10}}>About Us</Text>
                        
                        <TouchableOpacity
                        style={{
                            width: 45,
                            height: 45,
                            borderRadius: 10,
                            backgroundColor: '#0F0F13',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: '40%',
                        }} onPress={() => navigation.navigate('AboutUs')}
                        >
                            <Feather name="chevron-right" color="white" size={30} />
                        </TouchableOpacity>

                    </TouchableOpacity>

                   

                    

                    <View>
                    
                    

                    </View>
                    

                    </View>                                                                      
                </View>
        </Container>
    )
}

export default ProfileScreen;