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
 import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
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
    const [tvShow, setTvShow] = useState([]);

    useEffect(() => {
        axios.get('https://keikoapp.herokuapp.com/trendingMovies')
        .then(response=> {
            setTrendyMovie(response.data)
            //console.log(responseData.data)
        })
        .catch(err => {
            console.log(err);
        });

        axios.get('https://keikoapp.herokuapp.com/trendingAnimes')
        .then(response=> {
            setTrendyAnime(response.data)
            //console.log(responseData.data)
        })
        .catch(err => {
            console.log(err);
        });

        axios.get('https://keikoapp.herokuapp.com/trendingTV')
        .then(response=> {
            setTvShow(response.data)
        })
        .catch(err => {
            console.log(err);
        });
    }, []);


    let topFilmsData = [];
    let topAnimesData = [];
    let tvshowData = [];

    function mapTrendMovie(){
        trendyMovie.map((item)=>{
            let mapMovie = {
                title: item.title,
                image: 'https://image.tmdb.org/t/p/original'+item.backdrop_path,
                type: "movie",
                id: item.id

            }
            topFilmsData.push(mapMovie);
        })
        return topFilmsData;
    }

    function mapTvShow(){
        tvShow.map((item)=>{
            let mapTv = {
                title: item.name,
                image: 'https://image.tmdb.org/t/p/original'+item.backdrop_path,
                type: "tvShow",
                id: item.id
            }
            tvshowData.push(mapTv);
        })
        return tvshowData;
    }

    let push = true

    function mapTrendAnime(){
        trendyAnime.map((item)=>{
            try{
                if(item.coverImage.extraLarge !== null){

                    let resultTitle = item.title
                    let resultImage = item.coverImage
                    let mapAnime = {
                        title: resultTitle['english'],
                        image: resultImage['extraLarge'],
                        type: "anime",
                        id: item.id
                    }
                    topAnimesData.push(mapAnime)
                }else{
                    console.log('No image')
                    let resultTitle = item.title
                    let mapAnime = {
                        title: resultTitle['english'],
                        image: 'https://media.istockphoto.com/id/1357365823/vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo.jpg?s=612x612&w=0&k=20&c=PM_optEhHBTZkuJQLlCjLz-v3zzxp-1mpNQZsdjrbns=',
                        id: item.id,
                        type: "anime"
                    }
                    topAnimesData.push(mapAnime)
                }
            }
            catch(err){
                console.log(err)
            }
        })
        return topAnimesData;
    }

    function navigate(item){
        navigation.navigate("MovieDetail",{
            name: item.title,
            type: item.type,
            id: item.id,
            image: item.image,
            release_date: item.release_date
        })
    }


    function renderItem({ item }){
        return(
            <View style={{justifyContent: 'center',}}>
                    <TouchableOpacity>
                    <Image style={{width:96, height:100, borderRadius: 13, borderWidth: 0.5, borderColor:'#6541F5', alignItems: 'center',}} source={{uri: `${item.image}`}} />
                    </TouchableOpacity>
                    <Text style={{color:'white', fontWeight: 'bold',}}>{item.title}</Text>
            </View>
        );
    };

    function renderItem2({ item }){
        return(
            <View style={{justifyContent: 'center',}}>
                    <TouchableOpacity onPress={() => navigate(item)}>
                    <Image style={{width:328, height:190, borderRadius: 13, borderWidth: 0.5, borderColor:'#6541F5', alignItems: 'center'  }} source={{uri: `${item.image}`}} />
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
                        <Title>Day Trends</Title>
                        <SubTitle style={{marginBottom: -10, marginRight: 150}}>Home</SubTitle>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
                        <SubTitle style={{marginBottom: 5, marginTop: 70}}>Keyword Tool</SubTitle>
                    </View>
                    

                        <View
                    style={{
                        flexDirection: 'row',
                        borderColor: '#7D4192',
                        borderWidth: 1,
                        borderRadius: 24,
                        paddingHorizontal: 10,
                        paddingVertical: 8,
                        marginTop: 0,
                        backgroundColor: '#373543',
                        alignItems:'center',
                    }}
                    >   
                        <Input placeholder="Type a Website URL" placeholderTextColor="grey"/>
                        <Feather name="search" size={20} color="#C6C6C6" style={{marginRight: 5}} />
                    </View> 

                    <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>
                        <GoogleSubmit style={{marginRight: 50}} onPress={() => navigation.navigate('GoogleTrendys')}>
                        <Icon name="music" color="black" size={35}  style={{marginRight: 6}}/>
                        </GoogleSubmit>

                        <FacebookSubmit onPress={() => navigation.navigate('FacebookTrendys')} style={{flexDirection: 'row'}}>
                            <Icon name="facebook" color="white" size={35}  />
                        </FacebookSubmit> 

                        <TwitterSubmit style={{marginLeft: 50}}  onPress={() => navigation.navigate('TwitterTrendys')}>
                            <Icon name="twitter" color="white" size={35}  />
                        </TwitterSubmit> 
                    
                    </View>

                    <View
                    style={{
                        marginTop: 10,
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
                            <Text style={{color:'white', fontFamily: 'Montserrat_500Medium', fontSize:16}}>Top Animes</Text>
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
                            <Text style={{color:'white', fontFamily: 'Montserrat_500Medium', fontSize:16}}>Top TV Show</Text>
                        </View>

                        <Carousel 
                            data={mapTvShow()}
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
                    
                        </View>                   
                    </ScrollView>
                </Container>
    )
}

export default TrendScreen;
