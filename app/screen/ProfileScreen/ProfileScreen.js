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
            <Title style={{fontSize: 26, marginVertical: 20, left: 100}}>My profile</Title>
            <View style={{flexDirection:'row',justifyContent:'space-between', marginBottom:20,alignItems:'center'}}>
                
            </View>

                <View 
                style={{
                    marginVertical: 15,
                    justifyContent: 'space-between',
                    
                }}>

                    <ImageBackground
                        source={require('../../assets/Lindo2.png')}
                        style={{width:90, height:90, borderColor: '#FFF'}}
                        imageStyle={{borderRadius: 23, borderColor: ''}}
                    />

                    <Title style={{position: 'absolute',
                            width: 181,
                            height: 32,
                            left: 100,
                            top: 15}}>Vinicius</Title>
                    <SubTitle style={{position: 'absolute',
                            width: 181,
                            height: 32,
                            left: 100,
                            top: 50}}>Vinicius Ribeiro</SubTitle>                    
                </View>

                <View>
                <Text style={{color:'#8C9199'}}>Description</Text>

                <View style={{
                    flexDirection: "row"
                }}>
                <Feather name="map-pin" size={25} color="#8C9199" style={{padding: 2}} />   
                <Text style={{color:'#8C9199'}}>Cidade | AA</Text>
                </View>
                
                <View style={{
                    flexDirection: "row"
                }}>
                <Feather name="twitter" size={25} color="#8C9199" style={{padding: 2}} /> 
                <Text style={{color:'#8C9199'}}>@arroba_twitter</Text>
                </View>

                <View style={{padding: 20, 
                borderLeftWidth: 1,
                borderBottomColor: 'white',
                
                marginVertical: 12}}>
                <Text style={{color:'#8C9199'}}>Joined</Text>
                <Text styled={{top: 20, color:'FFF'}}>6 mon ago</Text>
                </View>
                </View>

                <View 
                style={{
                    marginVertical: 5,
                    justifyContent: 'space-between',
                    flexDirection: 'column',
                    height: 200
                }}>

                    <TouchableOpacity
                    style={{
                        width: '100%',
                        padding: 10,
                        flexDirection: 'row',
                        marginBottom: 25
                    }}
                    >

                    <TouchableOpacity
                    style={{
                        width: 45,
                        height: 45,
                        borderRadius: 50,
                        backgroundColor: '#6541F5',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: 30,
                    }}
                    >
                        <Feather name="bookmark" color="black" size={30}/>
                    </TouchableOpacity>

                        <Title style={{fontSize: 20, top: 8}}>Saved</Title>
                        
                        <TouchableOpacity
                        style={{
                            width: 45,
                            height: 45,
                            borderRadius: 10,
                            backgroundColor: '#0F0F13',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: '42%',
                        }}
                        >
                            <Feather name="chevron-right" color="white" size={30} />
                        </TouchableOpacity>

                    </TouchableOpacity>

                   

                    

                    <View>
                    <TouchableOpacity style={{
                        width: '100%',
                        padding: 10,
                        flexDirection: 'row',
                        
                    }} onPress={() => navigation.navigate('Settings')}>

                    <TouchableOpacity
                    style={{
                        width: 45,
                        height: 45,
                        borderRadius: 50,
                        backgroundColor: '#fff',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: 30,
                    }}
                    >
                        <Feather name="grid" color="#6541F5" size={30}/>
                    </TouchableOpacity>

                        <Title style={{fontSize: 20, top: 8}}>Settings</Title>

                        <TouchableOpacity
                        style={{
                            width: 45,
                            height: 45,
                            borderRadius: 10,
                            backgroundColor: '#0F0F13',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: '35%',
                        }}
                        >
                            <Feather name="chevron-right" color="white" size={30} />
                        </TouchableOpacity>

                        </TouchableOpacity>
                    

                    </View>

                    <View style={{
                        flexDirection: 'row',
                    }}>
                    <TouchableOpacity
                    style={{
                        width: 102,
                        height: 50,
                        borderRadius: 7,
                        backgroundColor: '#1D1C23',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: 1,
                        left: 220,
                        top: 25
                    }}
                    >
                        <SignoutrSubmit onPress={() => navigation.navigate('Signin')}>
                        <Ionicon name="exit-outline" color="red" size={24} style={{position: 'absolute', top:-13, left: 10}}/>
                        <Text style={{color: 'red', fontSize: 16, position: 'absolute', top:-12, left: 36}}>Sign out</Text>
                        </SignoutrSubmit>
                    </TouchableOpacity>
                    </View>

                </View>
        </Container>
    )
}

export default ProfileScreen;