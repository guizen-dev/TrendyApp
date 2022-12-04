import { View, 
    Text, 
    Container, 
    Title,
    SubTitle,
    KeyboardView,
    ImageBackground
 }  from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {LinearGradient} from 'expo-linear-gradient'
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'




const Tab = createBottomTabNavigator();

function Account({ navigation }){
        return(
        
        <Container style={{flex:1, backgroundColor:'#16293E', }}>
                
            <Title style={{top:30, left: 125}}>Account</Title>
            <View>
             <Icon onPress={() => navigation.navigate('Settings')} name="arrow-left" size={30} color="white"  style={{position:'absolute', top: -5, left: 20}} />
             </View>

             <View>
             <Icon onPress={() => navigation.navigate('HubScreen')} name="check" size={30} color="white"  style={{position:'absolute', top: -5, right: 20}} />
             </View>
            
             

                <View 
                style={{
                    marginVertical: 15,
                    justifyContent: 'space-between',
                    
                }}>

                    <ImageBackground
                        source={require('../../assets/Lindo2.png')}
                        style={{width:118, 
                            height:118,
                            borderWidth: 3,
                            borderRadius: 60,
                            borderColor: '#6541F5',
                            marginVertical: 20,
                            top: 60,
                            left: 30
                            }}
                        imageStyle={{width:114, 
                                    height:114,
                                    borderRadius: 60, 
                                    top: -1,
                                    left: -1}}
                    />

                    <Title style={{position: 'absolute',
                            width: 181,
                            height: 32,
                            left: 170,
                            top: 100,
                            }}>Vinicius</Title>
                    <SubTitle style={{position: 'absolute',
                            width: 181,
                            height: 32,
                            left: 170,
                            top: 130,
                            fontSize: 30}}>Ribeiro</SubTitle>                    
                </View>


                <View style={{top: 20}}>
                <View style={{marginVertical: 20,
                              left: 20,}}>
                    <SubTitle style={{}}>Name:</SubTitle>
                    <Text style={{}}>Vinicius Ribeiro</Text>
                </View>

                <View style={{marginVertical: 20,
                              left: 20}}>
                    <SubTitle style={{}}>Age:</SubTitle>
                    <Text style={{}}>17</Text>
                </View>

                <View style={{marginVertical: 20,
                              left: 20}}>
                    <SubTitle style={{}}>Email:</SubTitle>
                    <Text style={{}}>vinicius.sr.2005@gmail.com</Text>
                </View>
                </View>

                <View style={{padding: 20, top: 50}}>

                    <View>
                <Text style={{
                    width: 300,
                    height: 60,
                    }}>@arroba_tiktok</Text>
                    </View>

                <View>
                <Text style={{
                    width: 300,
                    height: 60,
                }}>@arroba_insta</Text> 
                </View>

                <View>
                <Text style={{
                    width: 300,
                    height: 60,
                }}>nome_Youtube</Text>
                </View>

                </View>
                         
        </Container>
    );
}

export default Account;

