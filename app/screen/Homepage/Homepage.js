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
 import axios from 'axios';
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
import { useEffect, useState } from "react";


const Drawer = createDrawerNavigator();

const trendsData = [
    {   
        image: 'https://cdn.discordapp.com/attachments/963977573241602138/1038658104537124924/mano.webp'
    },
    {   
        image: 'https://cdn.discordapp.com/attachments/963977573241602138/1038658104537124924/mano.webp'
    },
    {   
        image: 'https://cdn.discordapp.com/attachments/963977573241602138/1038658104537124924/mano.webp'
    }
]

const animesData = [
    {
        title: 'Trending Anime',
        image: 'https://cdn.discordapp.com/attachments/963977573241602138/1038658653542154290/juju.jpg'
    },
    {
        title: 'Trending Anime',
        image: 'https://cdn.discordapp.com/attachments/963977573241602138/1038658653542154290/juju.jpg'
    },
    {
        title: 'Trending Anime',
        image: 'https://cdn.discordapp.com/attachments/963977573241602138/1038658653542154290/juju.jpg'
    }
]

//const moviesData = [
//    {
//        title: 'Trending Movies',
//        image: 'https://cdn.discordapp.com/attachments/963977573241602138/1038658438856724511/eternos.jpg'
//    },
//    {
//        title: 'Trending Movies',
//        image: 'https://cdn.discordapp.com/attachments/963977573241602138/1038658438856724511/eternos.jpg'
//    },
//    {
//        title: 'Hot Movies',
//        image: 'https://cdn.discordapp.com/attachments/963977573241602138/1038658438856724511/eternos.jpg'
//    }
//];

const Tab = createBottomTabNavigator();

function Homepage({ navigation }){

    const [hastag, setHastag] = useState([]);
    const [trendyMovie, setTrendyMovie] = useState([]);
    const [trendyAnime, setTrendyANime] = useState([]);

    useEffect(() => {
        axios.get('https://trendy-tiktok-api.herokuapp.com/trend-api/wsgeral/hastag')
        .then(responseData => {
            setHastag(responseData.data)
        })
        .catch(err => {
            console.log(err);
        });

        axios.get('https://trendy-pro.herokuapp.com/trendingMovies')
        .then(response=> {
            setTrendyMovie(response.data)
            //console.log(responseData.data)
        })
        .catch(err => {
            console.log(err);
        });

        axios.get('https://trendy-pro.herokuapp.com/trendingAnimes')
        .then(response=> {
            setTrendyANime(response.data)
            //console.log(responseData.data)
        })
        .catch(err => {
            console.log(err);
        });

    }, []);

    function renderItem({ item }){
        return(
            <View style={{justifyContent: 'center',}}>
                    <Text style={{color:'white', fontWeight: 'bold'}}>{item.title}</Text>
                    <TouchableOpacity>
                    <Image style={{width:'100%', height:200, borderRadius: 10 }} source={{uri: `${item.image}`}} />
                    </TouchableOpacity>
            </View>
        );
    }
    
    let moviesData = []

    function mapTrendMovie(){
        trendyMovie.map((item)=>{
            let mapMovie = {
                title: item.title,
                image: 'https://cdn.discordapp.com/attachments/963977573241602138/1038658438856724511/eternos.jpg'
            }
            moviesData.push(mapMovie);
        })
        return moviesData;
    }

    return (
        
        <Container style={{flex:1,backgroundColor:'#16293E', }}>
            
            <ScrollView>
            
                <View style={{flexDirection:'row',justifyContent:'space-between', marginBottom:20,alignItems:'center',}}>
                <View style={{flexDirection:'column', display:'flex',}}>
                <SubTitle style={{marginBottom: -10, marginRight: 90}}>Welcome back</SubTitle>
                <Title>Mancon M.</Title>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
                    <ImageBackground 
                        source={require('../../assets/Lindo2.png')}
                        style={{width:35, height:35}}
                        imageStyle={{borderRadius: 25}}
                    />
                </TouchableOpacity>
                </View>


                <View>

                </View>

                <View
                style={{
                    marginVertical: 15,
                    marginBottom: 10, 
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
                >
                    <Text style={{color:'white', fontFamily: 'Montserrat_500Medium', fontSize:20}}>Last News</Text>
                </View>

                <Image
                    source={require('../../assets/mano.png')}
                    style={{width: 338, height: 188, borderRadius: 20}}
                />

                <View style={{marginTop: 50,}}>
                    <Title>Your Trendings</Title>
                    <View
                    style={{
                        flexDirection: 'row',
                        borderColor: '#7D4192',
                        borderWidth: 1,
                        borderRadius: 24,
                        paddingHorizontal: 10,
                        paddingVertical: 8,
                        marginTop: 10,
                        backgroundColor: '#373543',
                        alignItems:'center',
                    }}
                    >   
                        <Input placeholder="Search" placeholderTextColor="#fff"/>
                        <Feather name="search" size={20} color="#C6C6C6" style={{marginRight: 5}} />
                    </View> 

                    <View style={{marginTop: 5, flexDirection:'row', marginLeft: 10}}>
                        <View style={{alignItems: 'center', justifyContent: 'center',flexDirection: 'column', marginRight: 10}}>
                        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center',width: 42, height: 39, backgroundColor: '#3B3B3B', borderRadius: 60, borderColor: '#7D4192', border: 1, borderStyle: 'solid' }}>
                            <Feather name="plus" size={20} color="#fff" />
                        </TouchableOpacity>
                        <IconTitle>More</IconTitle>
                        </View>
                        {   
                            hastag.map((item) => {
                                return(
                                    <View style={{alignItems: 'center', justifyContent: 'center',flexDirection: 'column', marginRight: 10}}>
                                    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center',width: 42, height: 39, backgroundColor: '#3B3B3B', borderRadius: 60, borderColor: '#7D4192', border: 1, borderStyle: 'solid' }}>
                                        <Feather name="hash" size={20} color="#fff" />
                                    </TouchableOpacity>
                                    <IconTitle>
                                        {item.hastag}
                                    </IconTitle>
                                    </View>
                                )
                            })
                        } 
                    </View>
                </View>
                    
                <View style={{marginTop: 30}}>

                    <View
                    style={{
                        marginVertical: 15,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                    >
                        <Image 
                    source={require('../../assets/Fire.png')}
                    style={{width: 30, height: 30, marginRight: -60}}
                    />
                        <Text style={{color:'white', fontFamily: 'Montserrat_500Medium', fontSize:16}}>Trending Movies</Text>
                        <SeeAll>
                        <Text style={{color:'purple', fontFamily: 'Montserrat_500Medium', fontSize:16, textDecorationLine: 'underline'}}>See All</Text>
                        </SeeAll>
                    </View>

                    <Carousel 
                        data={mapTrendMovie()}
                        renderItem={renderItem.bind(this)}
                        sliderWidth={400}
                        itemWidth={150}
                        useScrollView={true}
                    />
                </View>

                <View style={{marginTop: 30, marginBottom: 200}}>
                    <View
                style={{
                    marginVertical: 15,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
                >
                    <Image 
                    source={require('../../assets/Fire.png')}
                    style={{width: 30, height: 30, marginRight: -60}}
                    />
                    <Text style={{color:'white', fontFamily: 'Montserrat_500Medium', fontSize:16}}>Trending Anime</Text>
                    <SeeAll>
                    <Text style={{color:'purple', fontFamily: 'Montserrat_500Medium', fontSize:16, textDecorationLine: 'underline'}}>See All</Text>
                    </SeeAll>
                </View>
                    <Carousel 
                        data={animesData}
                        renderItem={renderItem.bind(this)}
                        sliderWidth={400}
                        itemWidth={150}
                        useScrollView={true}
                    />
                </View>
            </ScrollView>
            
                
                
        </Container>
        
    )
}

export default Homepage;