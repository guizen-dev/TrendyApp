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

const Tab = createBottomTabNavigator();

const lastNewsData = [
    {
        image: 'https://cdn.discordapp.com/attachments/963977573241602138/1038658104537124924/mano.webp'
    },
    {
        image: 'https://cdn.discordapp.com/attachments/963977573241602138/1038658104537124924/mano.webp'
    },
    {
        image: 'https://cdn.discordapp.com/attachments/963977573241602138/1038658104537124924/mano.webp'
    }
];

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
                    <Image style={{width:'90%', height:200, borderRadius: 10 }} source={{uri: `${item.image}`}} />
                    </TouchableOpacity>
            </View>
        );
    }
    
    let moviesData = [];
    let animesData = [];

    function mapTrendMovie(){
        i = 0;
        trendyMovie.map((item)=>{
            if (i < 5){
                let mapMovie = {
                    title: item.title,
                    image: 'https://image.tmdb.org/t/p/original'+item.backdrop_path
                }
                moviesData.push(mapMovie);
                i++;
            }
        })
        return moviesData;
    }

    function mapTrendAnime(){
        i = 0;
        trendyAnime.map((item)=>{
            try{
                if (i < 5){
                    let resultTitle = item.title
                    let resultImage = item.coverImage
                    let mapAnime = {
                        title: resultTitle['english'],
                        image: resultImage['extraLarge']
                    }
                    animesData.push(mapAnime);
                    i++;
                }
            }
            catch(err){
                console.log('error')
            }
        })
        return animesData;
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

                <Carousel 
                    data={lastNewsData}
                    renderItem={renderItem.bind(this)}
                    sliderWidth={400}
                    itemWidth={350}
                    useScrollView={true}
                    enableSnap={true}
                    loop={true}
                    loopClonesPerSide={3}
                            
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
                        loop={true}
                        loopClonesPerSide={4}
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
                        data={mapTrendAnime()}
                        renderItem={renderItem.bind(this)}
                        sliderWidth={400}
                        itemWidth={150}
                        useScrollView={true}
                        loop={true}
                        loopClonesPerSide={4}
                    />
                </View>
            </ScrollView>                
        </Container>
    )
}

export default Homepage;