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
            <Title style={{fontSize: 26, marginVertical: '6%', marginLeft: '50%'}}>My profile</Title>
            <Ionicon name="pencil" color="white" size={30} style={{position: 'absolute', top: 42, right: 7}} onPress={() => navigation.navigate('EditProfile')}/>
            <View style={{flexDirection:'row',justifyContent:'space-between', marginBottom:20,alignItems:'center'}}>
                
            </View>

                <View 
                style={{
                    marginVertical: 15,
                    justifyContent: 'space-between',
                    
                }}>

                    <ImageBackground
                        source={require('../../assets/Lindo2.png')}
                        style={{
                            width:134, 
                            height:134, 
                            borderWidth: 3,
                            borderRadius: 140,
                            borderColor: '#6541F5',
                            left: 90,
                            bottom: 30}}

                        imageStyle={{
                            width:130, 
                            height:130,
                            borderRadius: 140, 
                            top: -1,
                            left: -1}}
                    />

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

                <View style={{marginVertical: 5, bottom: 30}}>
                <Text style={{color:'#8C9199'}}>Description</Text>

                <View style={{
                    flexDirection: "row"
                }}>
                <Feather name="map-pin" size={20} color="#8C9199" style={{padding: 2}} />   
                <Text style={{color:'#8C9199'}}>Cidade | AA</Text>
                </View>
                
                <View style={{
                    flexDirection: "row"
                }}>
                <Feather name="twitter" size={20} color="#8C9199" style={{padding: 2}} /> 
                <Text style={{color:'#8C9199'}}>@arroba_twitter</Text>
                </View>

                
                </View>

                <View 
                style={{
                    marginVertical: -25,
                    justifyContent: 'space-between',
                    flexDirection: 'column',
                    height: 200,
                    right: 10
                }}>

                    <TouchableOpacity
                    style={{
                        width: '100%',
                        padding: 10,
                        flexDirection: 'row',
                        marginBottom: 25
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

                    <Title style={{left: 10,fontSize: 20, top: -20}}>Settings</Title>

                   

                    

                    <View style={{bottom: 15}}>
                    <TouchableOpacity style={{
                        width: '100%',
                        padding: 10,
                        flexDirection: 'row',
                        
                    }}>

                    <TouchableOpacity
                    style={{
                        width: 45,
                        height: 45,
                        borderRadius: 50,
                        backgroundColor: '#0F0F13',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: 30,
                    }}
                    >
                        <Feather name="globe" color="#FFF" size={30}/>
                    </TouchableOpacity>

                        <Text style={{top: 10}}>Language</Text>

                        <TouchableOpacity
                        style={{
                            width: 45,
                            height: 45,
                            borderRadius: 10,
                            backgroundColor: '#0F0F13',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: '37%',
                        }}
                        >
                            <Feather name="chevron-right" color="white" size={30} />
                        </TouchableOpacity>

                        </TouchableOpacity>

                        <TouchableOpacity
                    style={{
                        width: '100%',
                        padding: 10,
                        flexDirection: 'row'
                    }}
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
                    }}
                    >
                        <Feather name="info" color="white" size={30}/>
                    </TouchableOpacity>

                        <Text style={{top: 10}}>Help</Text>
                        
                        <TouchableOpacity
                        style={{
                            width: 45,
                            height: 45,
                            borderRadius: 10,
                            backgroundColor: '#0F0F13',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: '52%',
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
                    }}>

                    <TouchableOpacity
                    style={{
                        width: 45,
                        height: 45,
                        borderRadius: 50,
                        backgroundColor: '#0F0F13',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: 30,
                    }}
                    >
                        <Feather name="clipboard" color="#FFF" size={30}/>
                    </TouchableOpacity>

                        <Text style={{top: 10}}>Terms of Service</Text>

                        <TouchableOpacity
                        style={{
                            width: 45,
                            height: 45,
                            borderRadius: 10,
                            backgroundColor: '#0F0F13',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: '21%',
                        }}
                        >
                            <Feather name="chevron-right" color="white" size={30} />
                        </TouchableOpacity>

                        </TouchableOpacity>
                    

                    </View>
                    

                    </View>
                    

                    

                    <View style={{
                        flexDirection: 'row',
                    }}>
                    <TouchableOpacity
                    style={{
                        width: 110,
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
                    onPress={() => navigation.navigate('Signin')}
                    >
                        <SignoutrSubmit onPress={() => navigation.navigate('Signin')}>
                        <Ionicon name="exit-outline" color="red" size={24} style={{position: 'absolute', top:-13, left: 7}}/>
                        <Text style={{color: 'red', fontSize: 16, position: 'absolute', top:-12, left: 33}}>Sign out</Text>
                        </SignoutrSubmit>
                    </TouchableOpacity>
                    </View>

                </View>
        </Container>
    )
}

export default ProfileScreen;