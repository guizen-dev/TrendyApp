import { View, 
    KeyboardView,
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
    GoogleSubmit,
    FacebookSubmit,
    YoutubeSubmit,
    TikTokSubmit,
    TwitterSubmit
 }  from './styles'
 import Icon from 'react-native-vector-icons/FontAwesome';
 import Feather from 'react-native-vector-icons/Feather'
  import { useFonts } from 'expo-font';
  import Carousel from 'react-native-snap-carousel';
  import Pagination from 'react-native-snap-carousel';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ProfileScreen from '../ProfileScreen/ProfileScreen';
import Signin from '../Signin/Signin';
import Register from '../Register/Register';
import ForgotPassword from '../ForgotPassword/ForgotPassword';
import PasswordUpdated from '../PasswordUpdated/PasswordUpdated'
import { Ionicons } from '@expo/vector-icons'
import {LinearGradient} from 'expo-linear-gradient'
import { useEffect, useState } from "react";
import axios from 'axios';

const catalogData = [
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

const topFilmsData = [
    {
        image: 'https://cdn.discordapp.com/attachments/963977573241602138/1044428114555568199/blob-3r9t-1654861963.jpg'
    },
    {
        image: 'https://cdn.discordapp.com/attachments/963977573241602138/1044428114555568199/blob-3r9t-1654861963.jpg'
    },
    {
        image: 'https://cdn.discordapp.com/attachments/963977573241602138/1044428114555568199/blob-3r9t-1654861963.jpg'
    },
    {
        image: 'https://cdn.discordapp.com/attachments/963977573241602138/1044428114555568199/blob-3r9t-1654861963.jpg'
    }
];



function TrendScreen ({ navigation }){
    const [trendyMovie, setTrendyMovie] = useState([]);
    const [trendyAnime, setTrendyAnime] = useState([]);

    useEffect(() => {
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
            setTrendyAnime(response.data)
            //console.log(responseData.data)
        })
        .catch(err => {
            console.log(err);
        });
    }, []);


    let topFilmsData = [];
    let topAnimesData = [];

    function mapTrendMovie(){
        trendyMovie.map((item)=>{
            let mapMovie = {
            title: item.title,
                image: 'https://image.tmdb.org/t/p/original'+item.backdrop_path
            }
            topFilmsData.push(mapMovie);
        })
        return topFilmsData;
    }

    function mapTrendAnime(){
        trendyAnime.map((item)=>{
            try{
                let resultTitle = item.title
                let mapAnime = {
                    title: resultTitle['english'],
                    image: item.bannerImage,
                }
                if(mapAnime.image == null){
                    console.log('No image')
                    let mapAnime = {
                        title: resultTitle['english'],
                        image: 'https://media.istockphoto.com/id/1357365823/vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo.jpg?s=612x612&w=0&k=20&c=PM_optEhHBTZkuJQLlCjLz-v3zzxp-1mpNQZsdjrbns=',
                    }
                    topAnimesData.push(mapAnime)
                }
                topAnimesData.push(mapAnime);
            }
            catch(err){
                console.log('error')
            }
        })
        return topAnimesData;
    }


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

    function renderItem2({ item }){
        return(
            <View style={{justifyContent: 'center',}}>
                    <TouchableOpacity>
                    <Image style={{width:328, height:190, borderRadius: 13, borderWidth: 2, borderColor:'#6541F5', alignItems: 'center'  }} source={{uri: `${item.image}`}} />
                    </TouchableOpacity>
                    <Text style={{color:'white', fontWeight: 'bold',}}>{item.title}</Text>
            </View>
        );
    };

    return(
                <Container style={{flex:1,backgroundColor:'#16293E'}}>
                    <ScrollView>
                    <View style={{flexDirection:'row',justifyContent:'space-between', marginBottom:20,alignItems:'center',}}>
                        <View style={{flexDirection:'column', display:'flex',}}>
                        <Title>DAY Trends</Title>
                        <SubTitle style={{marginBottom: -10, marginRight: 150}}>Home</SubTitle>
                        </View>
                    </View>

                        <View
                    style={{
                        flexDirection: 'row',
                        borderColor: '#7D4192',
                        borderWidth: 1,
                        borderRadius: 24,
                        paddingHorizontal: 10,
                        paddingVertical: 8,
                        marginTop: 60,
                        backgroundColor: '#373543',
                        alignItems:'center',
                    }}
                    >   
                        <Input placeholder="Search" placeholderTextColor="#fff"/>
                        <Feather name="search" size={20} color="#C6C6C6" style={{marginRight: 5}} />
                    </View> 

                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
                        <GoogleSubmit style={{flexDirection: 'row',}}>
                            <Image  
                            source={require('../../assets/Bitcoin.png')}
                            style={{width:35, height:35}}
                            />
                        </GoogleSubmit>

                        <FacebookSubmit style={{flexDirection: 'row'}}>
                            <Icon name="facebook" color="white" size={35}  />
                        </FacebookSubmit> 

                        <TwitterSubmit style={{flexDirection: 'row'}}>
                            <Icon name="twitter" color="white" size={35}  />
                        </TwitterSubmit> 
                        
                        <TikTokSubmit style={{flexDirection: 'row'}}>
                            <Icon name="tiktok" color="black" size={35} />
                        </TikTokSubmit> 

                        <YoutubeSubmit style={{flexDirection: 'row'}}>
                            <Icon name="youtube" color="white" size={35}  />
                        </YoutubeSubmit> 
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
                            <Text style={{color:'white', fontFamily: 'Montserrat_500Medium', fontSize:16}}>Catalog</Text>
                            <SeeAll>
                            <Text style={{color:'purple', fontFamily: 'Montserrat_500Medium', fontSize:16, textDecorationLine: 'underline'}}>See All</Text>
                            </SeeAll>
                        </View>

                        <Carousel 
                            data={catalogData}
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
                            <Text style={{color:'white', fontFamily: 'Montserrat_500Medium', fontSize:16}}>Top Movies</Text>
                        </View>

                        <Carousel 
                            data={mapTrendMovie()}
                            renderItem={renderItem2.bind(this)}
                            sliderWidth={400}
                            itemWidth={350}
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
                            <Text style={{color:'white', fontFamily: 'Montserrat_500Medium', fontSize:16}}>Top Movies</Text>
                        </View>

                        <Carousel 
                            data={mapTrendAnime()}
                            renderItem={renderItem2.bind(this)}
                            sliderWidth={400}
                            itemWidth={350}
                            useScrollView={true}
                            enableSnap={true}
                            loop={true}
                            loopClonesPerSide={4}
                            
                        />
                    </View>
                       
                        <View
                        style={{
                            marginBottom: 100,
                            flexDirection: 'column',
                        }}
                        >
                            <Image 
                            style={{width: 30, height: 30, marginRight: -60}}
                            />
                            <Title>Affairs of the Day</Title>
                            <View>
                                <View style={{
                                    width: 312,
                                    height: 26,
                                    backgroundColor: '#0D0D1F',
                                    borderRadius: 10,
                                    marginTop: 5
                                }}
                                ></View>
                                <View style={{
                                    width: 312,
                                    height: 26,
                                    backgroundColor: '#0D0D1F',
                                    borderRadius: 10,
                                    marginTop: 5
                                }}
                                ></View>
                                <View style={{
                                    width: 312,
                                    height: 26,
                                    backgroundColor: '#0D0D1F',
                                    borderRadius: 10,
                                    marginTop: 5
                                }}
                                ></View>
                                <View style={{
                                    width: 312,
                                    height: 26,
                                    backgroundColor: '#0D0D1F',
                                    borderRadius: 10,
                                    marginTop: 5
                                }}
                                ></View>
                                <View style={{
                                    width: 312,
                                    height: 26,
                                    backgroundColor: '#0D0D1F',
                                    borderRadius: 10,
                                    marginTop: 5
                                }}
                                ></View>
                                <View style={{
                                    width: 312,
                                    height: 26,
                                    backgroundColor: '#0D0D1F',
                                    borderRadius: 10,
                                    marginTop: 5
                                }}
                                ></View>
                                <View style={{
                                    width: 312,
                                    height: 26,
                                    backgroundColor: '#0D0D1F',
                                    borderRadius: 10,
                                    marginTop: 5
                                }}
                                ></View>
                                <View style={{
                                    width: 312,
                                    height: 26,
                                    backgroundColor: '#0D0D1F',
                                    borderRadius: 10,
                                    marginTop: 5
                                }}
                                ></View>
                            </View>
                        </View>

                    </ScrollView>
                </Container>
    )
}

export default TrendScreen;
