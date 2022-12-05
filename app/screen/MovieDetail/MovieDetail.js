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
    TouchableOpacity,
    ButtonLike,
    Title2,
    SubTitle2
 }  from './styles'
 import { StyleSheet} from 'react-native';
 import Icon from 'react-native-vector-icons/FontAwesome';
 import Feather from 'react-native-vector-icons/Feather'
  import { useFonts } from 'expo-font';
  import Carousel from 'react-native-snap-carousel';
  import { useLocation } from "react-router-dom";
  import Pagination from 'react-native-snap-carousel';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import ProfileScreen from '../ProfileScreen/ProfileScreen';
import Signin from '../Signin/Signin';
import Register from '../Register/Register';
import ForgotPassword from '../ForgotPassword/ForgotPassword';
import PasswordUpdated from '../PasswordUpdated/PasswordUpdated'
import { Ionicons } from '@expo/vector-icons'
import Lottie from 'lottie-react-native'
import axios from 'axios';
import React, { useEffect, useState, useRef } from "react"
import App from '../WebView/webview'

const image = '';

function MovieDetail ({ navigation }){

    const api = axios.create({
        baseURL: "https://keikoapp.herokuapp.com",
      });

    const [isLiked, setIsLiked] = React.useState(false)
    const onLikePost = () => {}
    const animation = React.useRef(null);
    const isFirstRun = React.useRef(true);
    const [movie, setMovie] = useState([]);
    const [actors, setActors] = useState([]);
    const [keywords, setKeywords] = useState([]);
    const [queries, setQueries] = useState([]);
    const [topics, setTopics] = useState([]);   
    const [error, setError] = useState([]);
    const route = useRoute().params
        

    React.useEffect(() => {
        
        if (isLiked) {
            animation.current.play(19, 66);
        } else {
            animation.current.play(19, 19);
        }

    }, [isLiked]);

    const formatNumber = (n) => {
      if (n < 1e3) return n;
      if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
      if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
      if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
      if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
    };


    useEffect(() => {
        if (route.type == "anime") {
          api
            .get(`/anime/${route.id}`)
            .then((response) => {
              setMovie(response.data.data.Media);
            })
            .catch((err) => {
              console.error("ops! ocorreu um erro" + err);
              setError(err);
            })
            .finally(() => {
              api
                .get(`/relatedQueries?keyword=${route.name}`)
                .then((response) => {
                  setQueries(response.data);
                })
                .catch((err) => {
                  console.error("ops! ocorreu um erro" + err);
                });
    
              api
                .get(`/relatedTopics?keyword=${route.name}`)
                .then((response) => {
                  setTopics(response.data);
                })
                .catch((err) => {
                  console.error("ops! ocorreu um erro" + err);
                });
            });
        } else if (route.type == "movie") {
          api
            .get(`/movie/${route.id}`)
            .then((response) => {
              setMovie(response.data);
            })
            .catch((err) => {
              console.error("ops! ocorreu um erro" + err);
              setError(err);
            })
            .finally(() => {
              api
                .get(`/moviecredit/${route.id}`)
                .then((response) => {
                  setActors(response.data);
                })
                .catch((err) => {
                  console.error("ops! ocorreu um erro" + err);
                  setError(err);
                });
              api
                .get(`/moviekeywords/${route.id}`)
                .then((response) => {
                  response.data.results
                    ? setKeywords(response.data.results)
                    : setKeywords(response.data.keywords)
                })
                .catch((err) => {
                  console.error("ops! ocorreu um erro" + err);
                  setError(err);
                });
              api
                .get(`/relatedQueries?keyword=${route.name}`)
                .then((response) => {
                  setQueries(response.data);
                })
                .catch((err) => {
                  console.error("ops! ocorreu um erro" + err);
                });
    
              api
                .get(`/relatedTopics?keyword=${route.name}`)
                .then((response) => {
                  setTopics(response.data);
                })
                .catch((err) => {
                  console.error("ops! ocorreu um erro" + err);
                });
            });
        } else {
          api
            .get(`/TV/${route.id}`)
            .then((response) => {
              setMovie(response.data);
            })
            .catch((err) => {
              console.error("ops! ocorreu um erro" + err);
              setError(err);
            })
            .finally(() => {
              chart();
    
              api
                .get(`/tvcredit/${route.id}`)
                .then((response) => {
                  setActors(response.data);
                })
                .catch((err) => {
                  console.error("ops! ocorreu um erro" + err);
                  setError(err);
                });
              api
                .get(`/tvkeywords/${route.id}`)
                .then((response) => {
                  response.data.results
                    ? setKeywords(response.data.results)
                    : setKeywords(response.data.keywords)
                })
                .catch((err) => {
                  console.error("ops! ocorreu um erro" + err);
                  setError(err);
                });
              api
                .get(`/relatedQueries?keyword=${route.name}`)
                .then((response) => {
                  setQueries(response.data);
                })
                .catch((err) => {
                  console.error("ops! ocorreu um erro" + err);
                });
    
              api
                .get(`/relatedTopics?keyword=${route.name}`)
                .then((response) => {
                  setTopics(response.data);
                })
                .catch((err) => {
                  console.error("ops! ocorreu um erro" + err);
                });
            });
        }
    }, []);

    let movieData = []
    let actorsData = []

    

    if(route.type == 'movie' || route.type == 'tvShow'){
      actors.length !== 0 ? (
        actors.cast.map((item)=>{
          try{
            if(item.profile_path !== null){
              let mapActor = {
                title: item.name,
                image: 'https://image.tmdb.org/t/p/original'+item.profile_path
              }
                actorsData.push(mapActor)
            }else{
              let mapActor = {
                title: item.name,
                image: 'https://media.istockphoto.com/id/1357365823/vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo.jpg?s=612x612&w=0&k=20&c=PM_optEhHBTZkuJQLlCjLz-v3zzxp-1mpNQZsdjrbns=',
              }
              actorsData.push(mapActor)
            }
          }
          catch(err){

          }
        })
      ) : null
    }

    function renderItem({ item }){
        return(
            <View style={{justifyContent: 'center',}}>
                    
                    <TouchableOpacity onPress={() => App(item.title)}>
                    <Image style={{width:'90%', height:200, borderRadius: 10 }} source={{uri: `${item.image}`}} />
                    </TouchableOpacity>
                    <Text style={{color:'white', fontWeight: 'bold'}}>{item.title}</Text>
            </View>
        );
    }

    return(
        <Container style={{flex:1,backgroundColor:'#16293E'}}>
            <ScrollView>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10, marginLeft: 50, position: 'relative'}}>
                    <Feather onPress={() => navigation.navigate('HubScreen')} name="arrow-left" size={30} color="white" />
                    <Title>Detail</Title>
                    <ButtonLike onPress={() =>{
                        setIsLiked(!isLiked)
                    }}>
                        <Lottie 
                            ref={animation}
                            style={styles.heartLottie}
                            source={require('../../assets/lottie/like.json')}
                            autoPlay={true}
                            loop={false}                        
                        />
                    </ButtonLike>
                </View>

                <Image 
                        source={{uri:route.image}}
                        style={{width: '100%', height: 563, borderRadius: 30}}
                    />
                <View style={{margin: 30}}>
                    <Title>{route.name}</Title>

                    {
                      movie.release_date ? (
                        <SubTitle>
                          {JSON.stringify(movie.release_date).substr(1, 4)} | {movie.runtime ? movie.runtime+' minutes' : null}
                        </SubTitle>
                      ) : movie.startDate ? (
                        <SubTitle>
                          {JSON.stringify(movie.startDate.year)} | {movie.episodes ? movie.episodes+' episodes' : null}
                        </SubTitle>
                      ) : movie.last_air_date ? (
                        <SubTitle>
                          {JSON.stringify(movie.last_air_date).substr(1, 4)} | {movie.episode_run_time ? movie.episode_run_time+' minutes per ep' : null}
                        </SubTitle>
                      ) : null
                    }

                    <View style={{flexDirection: 'row', margin: 15, justifyContent: 'center'}}>

                        {movie.genres ? movie.genres.map((item) => (
                          <View style={{backgroundColor: '#36394A', borderRadius: 12, justifyContent: 'center', alignItems:'center', width: 120, height: 30, padding: 2, margin: 4}}>
                            {
                              item.name ? (
                                <Text>{item.name}</Text>
                              ) : (
                                <Text>{item}</Text>
                              )
                            }
                          </View>
                        ))
                        : null
                        }
                        
                    </View>

                    <View>
                        {
                          movie.original_language ? (
                            <>
                            <Title2>Original language</Title2>
                            <SubTitle2>{JSON.stringify(movie.original_language).toLocaleUpperCase().substr(1, 2)}</SubTitle2>
                            </>
                          ): movie.countryOfOrigin ? (
                            <>
                            <Title2>Country</Title2>
                            <SubTitle2>{JSON.stringify(movie.countryOfOrigin).toLocaleUpperCase().substr(1, 2)}</SubTitle2>
                            </>    
                          ) : null
                        }

                        {
                          movie.budget ? (
                            <>
                            <Title2>Budget</Title2>
                            <SubTitle2>${formatNumber(movie.budget)}</SubTitle2>

                            <Title2>Revenue</Title2>
                            <SubTitle2>${formatNumber(movie.revenue)}</SubTitle2>
                            </>
                          ) : null
                        }

                        {
                          keywords.length !== 0 ? (
                            <>
                              <Title2 style={{padding: 2}}>Tags</Title2>
                              <SubTitle2>
                                {
                                  keywords.map((item) =>{
                                    return (item.name+" | ")
                                  })
                                }
                              </SubTitle2>
                            </>

                          ) : movie.description ? (
                            <>
                              <Title2 style={{padding: 2}}>Description</Title2>
                              <SubTitle2>
                                {movie.description}
                              </SubTitle2>
                            </>
                          ) : null
                        }
                        {
                          movie.overview ? (
                            <>
                            <Title2 style={{padding: 2}}>Overview</Title2>
                            <SubTitle2>
                              {movie.overview}
                            </SubTitle2>
                            </>
                            ) : null
                        }
                    </View>

                    <View style={{marginTop: -20}}>
                    
                    {
                      actors.length !== 0 ? (
                        <>
                        <View
                        style={{
                            marginVertical: 15,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}
                        >
                            <Text style={{color:'white', fontFamily: 'Montserrat_500Medium', fontSize:16}}>Cast</Text>
                        </View>
    
                        <Carousel 
                            data={actorsData}
                            renderItem={renderItem.bind(this)}
                            sliderWidth={400}
                            itemWidth={150}
                            useScrollView={true}
                            loop={true}
                            loopClonesPerSide={4}
                        />
                        </>
                      ) : null
                    }

                </View>
                </View>
                
            </ScrollView>
        </Container>
    )
}

const styles = StyleSheet.create({
    heartLottie:{
        width: 50,
        height: 50,
        position: 'relative',
        marginTop: 13
    }
})

export default MovieDetail;