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

const onfireData = [
    {
        title: '#Birds',
        image: 'https://cdn.discordapp.com/attachments/963977573241602138/1044428116174573628/Arara-Vermelha-2.jpg'
    },
    {
        title: '#Foods',
        image: 'https://cdn.discordapp.com/attachments/963977573241602138/1044428115566399518/Que-comida-saudavel-que-nada-brasileiro-gosta-de-fast-food.webp'
    },
    {
        title: '#FootBall',
        image: 'https://cdn.discordapp.com/attachments/963977573241602138/1044428114807230464/futebol-brasil.webp'
    },
    {
        title: '#Gaming',
        image: 'https://cdn.discordapp.com/attachments/963977573241602138/1044428115155353690/Perifericos_Gamers.webp'
    }
];

const favoritesData = [
    {
        title: '#Birds',
        image: 'https://cdn.discordapp.com/attachments/963977573241602138/1044428116174573628/Arara-Vermelha-2.jpg'
    },
    {
        title: '#Foods',
        image: 'https://cdn.discordapp.com/attachments/963977573241602138/1044428115566399518/Que-comida-saudavel-que-nada-brasileiro-gosta-de-fast-food.webp'
    },
    {
        title: '#FootBall',
        image: 'https://cdn.discordapp.com/attachments/963977573241602138/1044428114807230464/futebol-brasil.webp'
    },
    {
        title: '#Gaming',
        image: 'https://cdn.discordapp.com/attachments/963977573241602138/1044428115155353690/Perifericos_Gamers.webp'
    }
];


const Tab = createBottomTabNavigator();

function Catalog({ navigation }){

        function renderItem({ item }){
            return(
                <View style={{justifyContent: 'center',}}>
                        <TouchableOpacity>
                        <Image style={{width:96, height:100, borderRadius: 13, borderWidth: 2, borderColor:'#6541F5', alignItems: 'center',}} source={{uri: `${item.image}`}} />
                        </TouchableOpacity>
                        <Text style={{color:'white', fontWeight: 'bold',}}>{item.title}</Text>
                </View>
            );
        };


        return(
        <Container style={{flex:1,backgroundColor:'#16293E',}}>
            <ScrollView>       
                <View style={{margin: 30}}>      
                    <Title>Catalog</Title>

                    <View
                    style={{
                        marginTop: 30,
                    }}
                    >
                        <View
                        style={{
                            marginVertical: 15,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}
                        >
                            <Text style={{color:'white', fontFamily: 'Montserrat_500Medium', fontSize:16}}>On Fire!</Text>
                            <SeeAll onPress={() => navigation.navigate('Catalog')}>
                            <Text style={{color:'purple', fontFamily: 'Montserrat_500Medium', fontSize:16, textDecorationLine: 'underline'}}>See All</Text>
                            </SeeAll>
                        </View>

                        <Carousel 
                            data={onfireData}
                            renderItem={renderItem.bind(this)}
                            sliderWidth={400}
                            itemWidth={100}
                            useScrollView={true}
                            enableSnap={true}
                            loop={true}
                            loopClonesPerSide={4}
                            
                        />
                    </View>

                    <View
                    style={{
                        flexDirection: 'row',
                        borderColor: '#6541F5',
                        borderWidth: 1,
                        borderRadius: 24,
                        paddingHorizontal: 10,
                        paddingVertical: 8,
                        marginTop: 60,
                        backgroundColor: '#373543',
                        alignItems:'center',
                    }}
                    >   
                        <Input placeholder="A-Z" placeholderTextColor="#fff"/>
                        <Feather name="search" size={20} color="#C6C6C6" style={{marginRight: 5}} />
                    </View> 


                    <View
                    style={{
                        marginTop: 30,
                    }}
                    >
                        <View
                        style={{
                            marginVertical: 15,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}
                        >
                            <Text style={{color:'white', fontFamily: 'Montserrat_500Medium', fontSize:16}}>Favorites!</Text>
                            <Image 
                            style={{marginRight: 160}}
                            source={require('../../assets/Vector2.png')} />
                            <SeeAll onPress={() => navigation.navigate('Catalog')}>
                            <Text style={{color:'purple', fontFamily: 'Montserrat_500Medium', fontSize:16, textDecorationLine: 'underline'}}>See All</Text>
                            </SeeAll>
                        </View>

                        <Carousel 
                            data={favoritesData}
                            renderItem={renderItem.bind(this)}
                            sliderWidth={400}
                            itemWidth={100}
                            useScrollView={true}
                            enableSnap={true}
                            loop={true}
                            loopClonesPerSide={4}
                            
                        />
                    </View>

                    <View
                    style={{
                        marginTop: 30,
                    }}
                    >
                        <View
                        style={{
                            marginVertical: 15,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}
                        >
                            <Text style={{color:'white', fontFamily: 'Montserrat_500Medium', fontSize:16}}>All</Text>
                            
                        </View>

                        <Carousel 
                            data={favoritesData}
                            renderItem={renderItem.bind(this)}
                            sliderWidth={400}
                            itemWidth={100}
                            useScrollView={true}
                            enableSnap={true}
                            loop={true}
                            loopClonesPerSide={4}
                        />
                    </View>

                </View> 
            </ScrollView>              
        </Container>
        
    );
}

export default Catalog;