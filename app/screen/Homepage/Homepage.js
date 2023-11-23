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
 import Feather from 'react-native-vector-icons/Feather'
import { useFonts } from 'expo-font';
import Carousel from 'react-native-snap-carousel';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Skeleton } from '@rneui/themed';
import { useEffect, useState } from "react";


const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();

function Homepage({ navigation }){

    const [hastag, setHastag] = useState([]);
    const [trendyMovie, setTrendyMovie] = useState([]);
    const [trendyAnime, setTrendyAnime] = useState([]);
    const [tvShow, setTvShow] = useState([]);
    const [posts, setPosts] = useState([]);
    const rssFeeds = useState([]);
    const rssFeedLink = ["https://cms.qz.com/feed"];

    useEffect(() => {
    // api not working
    //     axios.get('https://trendy-tiktok-api.herokuapp.com/trend-api/wsgeral/hastag')
    //     .then(responseData => {
    //         setHastag(responseData.data)
    //     })
    //     .catch(err => {
    //         console.log(err+' Hastag Err');
    //     });

        axios.get('https://trendy-app-api.onrender.com/trendingMovies')
        .then(response=> {
            setTrendyMovie(response.data)
        })
        .catch(err => {
            console.log(err);
        });

         axios.get('https://trendy-app-api.onrender.com/trendingAnimes')
         .then(response=> {
             setTrendyAnime(response.data)
         })
         .catch(err => {
        //     console.log(err);
         });

        axios.get('https://trendy-app-api.onrender.com/trendingTV')
        .then(response=> {
            setTvShow(response.data)
        })
        .catch(err => {
            console.log(err);
        });

         rssFeeds.map((url) => {
             axios.get(`https://api.rss2json.com/v1/api.json?rss_url=${rssFeedLink}`).then(
               (data) => {
                 setPosts((prev) => [...data.data.items]);
               }
             );
         });

    }, []);

    
    let moviesData = [];
    let tvshowData = [];
    let animesData = [];
    let newsData = [];

    function mapTrendMovie(){
        let i = 0;
        trendyMovie.map((item)=>{
            if (i < 5){
                let mapMovie = {
                    title: item.title,
                    image: 'https://image.tmdb.org/t/p/original'+item.backdrop_path,
                    type: "movie",
                    id: item.id
                }
                moviesData.push(mapMovie);
                i++;
            }
        })
        return moviesData;
    }

    function mapTvShow(){
        let i = 0;
        tvShow.map((item)=>{
            if (i < 5){
                let mapTvShow = {
                    title: item.name,
                    image: 'https://image.tmdb.org/t/p/original'+item.backdrop_path,
                    type: "tvShow",
                    id: item.id
                }
                tvshowData.push(mapTvShow);
                i++;
            }
        })
        return tvshowData;
    }

    function mapNews(){
        let i = 0;
        posts.map((item)=>{
            if (i < 10){
                let mapNews = {
                    title: item.title,
                    image: item.thumbnail,
                    type: "news",
                    id: null
                }
                newsData.push(mapNews);
                i++;
            }
        })
        return newsData;
    }

    function mapTrendAnime(){
        let i = 0;
        trendyAnime.map((item)=>{
            try{
                if (i < 5){
                    let resultTitle = item.title
                    let resultImage = item.coverImage
                    let mapAnime = {
                        title: resultTitle['english'],
                        image: resultImage['extraLarge'],
                        type: "anime",
                        id: item.id
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

    function emailValid(){
        let res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (res.test(email)) {
            return true
        } else {
            console.log('Email not valid')
            Toast.error('Email not valid')

        }
    }

    function passwordValid() {
        let res = /(?=.*[A-Z])(?=.*[!@#\$%])/;
        if (res.test(password)) {
            return true
        } else {
            console.log('Example: Password123@')
            Toast.error('Example: Password123@')
            return false
        }
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
                    <Text style={{color:'white', fontWeight: 'bold'}}>{item.title}</Text>
                    <TouchableOpacity onPress={() => navigate(item)}>
                    <Image style={{width:'90%', height:200, borderRadius: 10 }} source={{uri: `${item.image}`}} />
                    </TouchableOpacity>
            </View>
        );
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
                {
                    posts.length > 0 && posts !== null ? (
                        <Carousel 
                            data={mapNews()}
                            renderItem={renderItem.bind(this)}
                            sliderWidth={400}
                            itemWidth={350}
                            useScrollView={true}
                            enableSnap={true}
                            loop={true}
                            loopClonesPerSide={3}
                            activeSlideAlignment="start"
                                    
                        />
                    ) : (
                        <Skeleton animation="pulse" style={{opacity: 0.2, width: '100%', height: 150, borderRadius: 10}}/>
                    )
                }

                <View style={{marginTop: 50,}}>
                    <Title style={{marginBottom: 30, marginTop: -30}}>Your Trendings</Title>

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
                        <Text style={{color:'white', fontFamily: 'Montserrat_500Medium', fontSize:16}}>Trending Movies</Text>
                        <SeeAll onPress={() => navigation.navigate('TrendScreen')}>
                        <Text style={{color:'grey', fontFamily: 'Montserrat_500Medium', fontSize:16, textDecorationLine: 'underline'}}>See All</Text>
                        </SeeAll>
                    </View>
                    {
                        trendyMovie.length > 0 && trendyMovie !== null ? (
                            <Carousel 
                                data={mapTrendMovie()}
                                renderItem={renderItem.bind(this)}
                                sliderWidth={400}
                                itemWidth={150}
                                useScrollView={true}
                                loop={true}
                                loopClonesPerSide={4}
                                activeSlideAlignment="start"
                            />
                        ) : (
                            <>
                                <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                                    <Skeleton animation="pulse" style={{opacity: 0.2, width: '30%', height: 170, borderRadius: 10}}/>
                                    <Skeleton animation="pulse" style={{opacity: 0.2, width: '30%', height: 170, borderRadius: 10}}/>
                                    <Skeleton animation="pulse" style={{opacity: 0.2, width: '30%', height: 170, borderRadius: 10}}/>
                                </View>
                            </>
                        )
                    }
                </View>

                <View style={{marginTop: 30}}>
                    <View
                style={{
                    marginVertical: 15,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
                >
                    <Text style={{color:'white', fontFamily: 'Montserrat_500Medium', fontSize:16}}>Trending Anime</Text>
                    <SeeAll onPress={() => navigation.navigate('TrendScreen')}>
                    <Text style={{color:'grey', fontFamily: 'Montserrat_500Medium', fontSize:16, textDecorationLine: 'underline'}}>See All</Text>
                    </SeeAll>
                </View>
                    {
                        trendyAnime !== null && trendyAnime.length > 0? (
                            <Carousel 
                                data={mapTrendAnime()}
                                renderItem={renderItem.bind(this)}
                                sliderWidth={400}
                                itemWidth={150}
                                useScrollView={true}
                                loop={true}
                                loopClonesPerSide={4}
                                activeSlideAlignment="start"
                            />
                        ) : (
                            <>
                                <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                                    <Skeleton animation="pulse" style={{opacity: 0.2, width: '30%', height: 170, borderRadius: 10}}/>
                                    <Skeleton animation="pulse" style={{opacity: 0.2, width: '30%', height: 170, borderRadius: 10}}/>
                                    <Skeleton animation="pulse" style={{opacity: 0.2, width: '30%', height: 170, borderRadius: 10}}/>
                                </View>
                            </>
                        )
                    }
                </View>

                <View style={{marginTop: 30, marginBottom: 100}}>

                    <View
                    style={{
                        marginVertical: 15,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                    >
                        <Text style={{color:'white', fontFamily: 'Montserrat_500Medium', fontSize:16}}>Trending TV Show</Text>
                        <SeeAll onPress={() => navigation.navigate('TrendScreen')}>
                        <Text style={{color:'grey', fontFamily: 'Montserrat_500Medium', fontSize:16, textDecorationLine: 'underline'}}>See All</Text>
                        </SeeAll>
                    </View>
                    {
                        tvShow.length > 0 && tvShow !== null ? (
                            <Carousel 
                                data={mapTvShow()}
                                renderItem={renderItem.bind(this)}
                                sliderWidth={400}
                                itemWidth={150}
                                useScrollView={true}
                                loop={true}
                                loopClonesPerSide={4}
                                activeSlideAlignment="start"
                            />
                        ) : (
                            <>
                                <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                                    <Skeleton animation="pulse" style={{opacity: 0.2, width: '30%', height: 170, borderRadius: 10}}/>
                                    <Skeleton animation="pulse" style={{opacity: 0.2, width: '30%', height: 170, borderRadius: 10}}/>
                                    <Skeleton animation="pulse" style={{opacity: 0.2, width: '30%', height: 170, borderRadius: 10}}/>
                                </View>
                            </>
                        )
                    }
                </View>
            </ScrollView>                
        </Container>
    )
}

export default Homepage;