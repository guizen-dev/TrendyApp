import { View, 
    Text, 
    Container, 
    Title, 
    SubTitle, 
    Input, 
    RegisterSubmit, 
    TextSubmit, 
    EmailKey,
    PhoneKey,
    KeyText,
    ButtonSubmit,
    Hamburger,
    SafeAreaView,
    ScrollView,
    ImageBackground,
    SeeAll,
    Image,
    StyleSheet,
    TouchableOpacity,
    IconTitle
 }  from './styles'
 import Icon from 'react-native-vector-icons/FontAwesome';
 import Feather from 'react-native-vector-icons/Feather'
  import { useFonts } from 'expo-font';
  import Carousel from 'react-native-snap-carousel';
  import Pagination from 'react-native-snap-carousel';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {LinearGradient} from 'expo-linear-gradient'
import { NavigationContainer } from '@react-navigation/native';
import ProfileScreen from '../ProfileScreen/ProfileScreen';
import Signin from '../Signin/Signin';
import Register from '../Register/Register';
import ForgotPassword from '../ForgotPassword/ForgotPassword';
import PasswordUpdated from '../PasswordUpdated/PasswordUpdated'
import { Ionicons } from '@expo/vector-icons'






function Settings({ navigation }){
        return(
        <Container style={{flex:1,backgroundColor:'#16293E', }}>
                
            <Title style={{top:30, left: 130}}>Settings</Title>
            <View>
             <Icon onPress={() => navigation.navigate('ProfileScreen')} name="arrow-left" size={30} color="white"  style={{position:'absolute', top: -5, left: 20}} />
             </View>

             <Title style={{left: 20,fontSize: 20, top: 50}}>Account</Title>

             <View 
                style={{
                    marginVertical: 20,
                    justifyContent: 'space-between',
                    flexDirection: 'column',
                    height: 200
                }}>

                    <TouchableOpacity
                    style={{
                        width: '100%',
                        padding: 20,
                        flexDirection: 'row',
                        marginBottom: 25,
                        marginVertical: 20
                    }} onPress={() => navigation.navigate('Account')}
                    ><ImageBackground
                    source={require('../../assets/Lindo2.png')}
                    style={{width:50, height:50, borderColor: '#FFF'}}
                    imageStyle={{borderRadius: 15, borderColor: ''}}/>


                        <View style={{marginLeft: 15}}>
                        <Title style={{fontSize: 20, top: 10}}>Vinicius Ribeiro</Title>
                        <SubTitle style={{position:'absolute',fontSize: 12, top: 30}}>Personal Info</SubTitle>
                        </View>
                        
                        <TouchableOpacity
                        style={{
                            width: 45,
                            height: 45,
                            borderRadius: 10,
                            backgroundColor: '#0F0F13',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: '22%',
                        }}
                        >
                            <Feather name="chevron-right" color="white" size={30} />
                        </TouchableOpacity>

                    </TouchableOpacity>


                    <Title style={{left: 20,fontSize: 20, top: -20}}>Settings</Title>

                   

                    

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

                        <Title style={{fontSize: 20, top: 8}}>Language</Title>

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

                        <Title style={{fontSize: 20, top: 8}}>Help</Title>
                        
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

                        <Title style={{fontSize: 20, top: 8}}>Terms of Service</Title>

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
                    

                    </View>
                    </View>

            
                         
        </Container>
        
    );
}

export default Settings;

