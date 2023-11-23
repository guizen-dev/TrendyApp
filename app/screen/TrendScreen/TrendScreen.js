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
    TwitterSubmit,
    CenteredView,
    modalView,
    Button,
    SubTitleCard,
    Linha
 }  from './styles'
 import Icon from 'react-native-vector-icons/FontAwesome';
 import Feather from 'react-native-vector-icons/Feather'
  import Carousel from 'react-native-snap-carousel';
import { useEffect, useState } from "react";
import Modal from "react-native-modal";
import { Skeleton } from '@rneui/themed';
import axios from 'axios';


function TrendScreen ({ navigation }){
    const [trendyMovie, setTrendyMovie] = useState([]);
    const [trendyAnime, setTrendyAnime] = useState([]);
    const [tvShow, setTvShow] = useState([]);
    const [isModalVisible, setModalVisible] = useState(false);
    const [value, setValue] = useState("");
    const [results, setResults] = useState([]);
    const [error, setError] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
      };

    useEffect(() => {
         axios.get('https://trendy-app-api.onrender.com/trendingMovies')
         .then(response=> {
             setTrendyMovie(response.data)
             //console.log(responseData.data)
         })
         .catch(err => {
             console.log(err);
         });

        axios.get('https://trendy-app-api.onrender.com/trendingAnimes')
        .then(response=> {
            setTrendyAnime(response.data)
            //console.log(responseData.data)
        })
        .catch(err => {
            console.log(err);
        });

        axios.get('https://trendy-app-api.onrender.com/trendingTV')
        .then(response=> {
            setTvShow(response.data)
        })
        .catch(err => {
            console.log(err);
        });
    }, []);

    const handleSearch = (keyword) => {
        axios
          .get(`https://trendy-app-api.onrender.com/relatedQueries?keyword=${keyword}`)
          .then((response) => {
            setResults(response.data), setError(false), console.log(results)
          })
          .catch((err) => {
            console.log(err)
            setError(true);
            toggleModal
          });
          error ? console.log('Erro') : null
    };


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
                    <Image style={{width:'90%', height:200, borderRadius: 13, borderWidth: 0.5, borderColor:'#6541F5', alignItems: 'center',}} source={{uri: `${item.image}`}} />
                    </TouchableOpacity>
                    <Text style={{color:'white', fontWeight: 'bold',}}>{item.title}</Text>
            </View>
        );
    };

    function renderItem2({ item }){
        return(
            <View style={{justifyContent: 'center',}}>
                    <TouchableOpacity onPress={() => navigate(item)}>
                    <Image style={{width:'90%', height:190, borderRadius: 13, borderWidth: 0.5, borderColor:'#6541F5', alignItems: 'center'  }} source={{uri: `${item.image}`}} />
                    </TouchableOpacity>
                    <Text style={{color:'white', fontWeight: 'bold',}}>{item.title}</Text>
            </View>
        );
    };

    function WrapperComponent() {
        return (
          <View>
            <Modal isVisible={isModalVisible}>
                <ScrollView>
                    <View style={{ flex: 1 , justifyContent: 'center', alignItems: 'center'}}>
                        
                        {
                            error ? (
                                <Title style={{color:"#FFF"}}>For some reason we can't find any result.</Title>
                            ) : null
                        }
                        {
                            results.normal ? (
                                <>
                                <Title style={{color:"#FFF"}}>Keywords Found</Title>
                                <View>
                                <View style={{margin:50, justifyContent:'center'}}>
                                    <View style={{flexDirection:'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor:'#16293E', width: 500, marginTop: 10}}>
                                        <SubTitleCard style={{marginLeft: 100, marginTop:10}}>
                                            Nomal
                                        </SubTitleCard>
                                    </View>
                                        {

                                        results.normal.map((item)=>{
                                            return(
                                                    <View style={{flexDirection:'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor:'#16293E', width: 500, marginTop: 10}}>
                                                        <SubTitle style={{marginLeft: 100}}>
                                                            {item}
                                                        </SubTitle>
                                                    </View>
                                            )
                                        })
                                    }
                                </View>
                                
                                <View style={{margin:50, justifyContent:'center'}}>
                                    <View style={{flexDirection:'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor:'#16293E', width: 500, marginTop: 10}}>
                                        <SubTitleCard style={{marginLeft: 100, marginTop:10}}>
                                            Are
                                        </SubTitleCard>
                                    </View>
                                        {

                                        results.are.map((item)=>{
                                            return(
                                                    <View style={{flexDirection:'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor:'#16293E', width: 500, marginTop: 10}}>
                                                        <SubTitle style={{marginLeft: 100}}>
                                                            {item}
                                                        </SubTitle>
                                                    </View>
                                            )
                                        })
                                    }
                                </View>
                                <View style={{margin:50, justifyContent:'center'}}>
                                    <View style={{flexDirection:'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor:'#16293E', width: 500, marginTop: 10}}>
                                        <SubTitleCard style={{marginLeft: 100, marginTop:10}}>
                                            How
                                        </SubTitleCard>
                                    </View>
                                        {

                                        results.how.map((item)=>{
                                            return(
                                                    <View style={{flexDirection:'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor:'#16293E', width: 500, marginTop: 10}}>
                                                        <SubTitle style={{marginLeft: 100}}>
                                                            {item}
                                                        </SubTitle>
                                                    </View>
                                            )
                                        })
                                    }
                                </View>
                                <View style={{margin:50, justifyContent:'center'}}>
                                    <View style={{flexDirection:'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor:'#16293E', width: 500, marginTop: 10}}>
                                        <SubTitleCard style={{marginLeft: 100, marginTop:10}}>
                                            Which
                                        </SubTitleCard>
                                    </View>
                                        {

                                        results.which.map((item)=>{
                                            return(
                                                    <View style={{flexDirection:'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor:'#16293E', width: 500, marginTop: 10}}>
                                                        <SubTitle style={{marginLeft: 100}}>
                                                            {item}
                                                        </SubTitle>
                                                    </View>
                                            )
                                        })
                                    }
                                </View>
                                <View style={{margin:50, justifyContent:'center'}}>
                                    <View style={{flexDirection:'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor:'#16293E', width: 500, marginTop: 10}}>
                                        <SubTitleCard style={{marginLeft: 100, marginTop:10}}>
                                            Where
                                        </SubTitleCard>
                                    </View>
                                        {

                                        results.where.map((item)=>{
                                            return(
                                                    <View style={{flexDirection:'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor:'#16293E', width: 500, marginTop: 10}}>
                                                        <SubTitle style={{marginLeft: 100}}>
                                                            {item}
                                                        </SubTitle>
                                                    </View>
                                            )
                                        })
                                    }
                                </View>
                                <View style={{margin:50, justifyContent:'center'}}>
                                    <View style={{flexDirection:'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor:'#16293E', width: 500, marginTop: 10}}>
                                        <SubTitleCard style={{marginLeft: 100, marginTop:10}}>
                                            Who
                                        </SubTitleCard>
                                    </View>
                                        {

                                        results.who.map((item)=>{
                                            return(
                                                    <View style={{flexDirection:'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor:'#16293E', width: 500, marginTop: 10}}>
                                                        <SubTitle style={{marginLeft: 100}}>
                                                            {item}
                                                        </SubTitle>
                                                    </View>
                                            )
                                        })
                                    }
                                </View>
                                <View style={{margin:50, justifyContent:'center'}}>
                                    <View style={{flexDirection:'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor:'#16293E', width: 500, marginTop: 10}}>
                                        <SubTitleCard style={{marginLeft: 100, marginTop:10}}>
                                            Why
                                        </SubTitleCard>
                                    </View>
                                        {

                                        results.why.map((item)=>{
                                            return(
                                                    <View style={{flexDirection:'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor:'#16293E', width: 500, marginTop: 10}}>
                                                        <SubTitle style={{marginLeft: 100}}>
                                                            {item}
                                                        </SubTitle>
                                                    </View>
                                            )
                                        })
                                    }
                                </View>
                                <View style={{margin:50, justifyContent:'center'}}>
                                    <View style={{flexDirection:'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor:'#16293E', width: 500, marginTop: 10}}>
                                        <SubTitleCard style={{marginLeft: 100, marginTop:10}}>
                                            When
                                        </SubTitleCard>
                                    </View>
                                        {

                                        results.when.map((item)=>{
                                            return(
                                                    <View style={{flexDirection:'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor:'#16293E', width: 500, marginTop: 10}}>
                                                        <SubTitle style={{marginLeft: 100}}>
                                                            {item}
                                                        </SubTitle>
                                                    </View>
                                            )
                                        })
                                    }
                                </View>




                                </View>
                                </>
                            ) : null
                        }
                    
                        <Button title='Close' onPress={toggleModal} />
                    </View>
                </ScrollView>
            </Modal>
          </View>
        );
      }

      const handleClick = () => {
        handleSearch(value);
      };

    return(
                <Container style={{flex:1,backgroundColor:'#16293E'}}>
                    {WrapperComponent()}

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
                        <Input
                            placeholder="Type a Website URL"
                            placeholderTextColor="grey"
                            onChangeText={setValue}
                            value={value}    
                        />
                        <TouchableOpacity onPress={() => console.log('ok')}>                         
                            <Feather name="search" size={20} color="#C6C6C6" style={{marginRight: 5}} onPress={(handleClick, toggleModal)}/>
                        </TouchableOpacity>
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
                            marginVertical: 20,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}
                        >
                            <Text style={{color:'white', fontFamily: 'Montserrat_500Medium', fontSize:16}}>Top Movies</Text>
                        </View>

                        {
                            trendyMovie.length > 0 && trendyMovie !== null ? (
                            <Carousel 
                                data={mapTrendMovie()}
                                renderItem={renderItem2.bind(this)}
                                sliderWidth={400}
                                itemWidth={200}
                                useScrollView={true}
                                enableSnap={true}
                                loop={true}
                                loopClonesPerSide={4}
                                activeSlideAlignment="start"
                                
                            />
                            ) : (
                                <>
                                    <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                                        <Skeleton animation="pulse" style={{opacity: 0.2, width: '48%', height: 190, borderRadius: 10}}/>
                                        <Skeleton animation="pulse" style={{opacity: 0.2, width: '48%', height: 190, borderRadius: 10}}/>
                                    </View>
                                </>
                            )
                        }
                    </View>

                    <View
                    style={{
                        marginTop: 5,
                    }}
                    >
                        <View
                        style={{
                            marginVertical: 5,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}
                        >
                            <Text style={{color:'white', fontFamily: 'Montserrat_500Medium', fontSize:16}}>Top Animes</Text>
                        </View>
                        {
                           trendyAnime.length > 0 && trendyMovie !== null ? ( 
                               <Carousel 
                                   data={mapTrendAnime()}
                                   renderItem={renderItem2.bind(this)}
                                   sliderWidth={400}
                                   itemWidth={200}
                                   useScrollView={true}
                                   enableSnap={true}
                                   loop={true}
                                   loopClonesPerSide={4}
                                   activeSlideAlignment="start"   
                               />
                            ) : (
                                <>
                                    <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                                        <Skeleton animation="pulse" style={{opacity: 0.2, width: '48%', height: 190, borderRadius: 10}}/>
                                        <Skeleton animation="pulse" style={{opacity: 0.2, width: '48%', height: 190, borderRadius: 10}}/>
                                    </View>
                                </>
                           )
                        }
                    </View>
                    
                    <View
                    style={{
                        marginTop: 5,
                    }}
                    >
                        <View
                        style={{
                            marginVertical: 5,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}
                        >
                            <Text style={{color:'white', fontFamily: 'Montserrat_500Medium', fontSize:16}}>Top TV Show</Text>
                        </View>
                        {
                            tvShow.length > 0 && trendyMovie !== null ? (
                                <Carousel 
                                    data={mapTvShow()}
                                    renderItem={renderItem2.bind(this)}
                                    sliderWidth={400}
                                    itemWidth={200}
                                    useScrollView={true}
                                    enableSnap={true}
                                    loop={true}
                                    loopClonesPerSide={4}
                                    activeSlideAlignment="start" 
                                />
                            ) : (
                                <>
                                    <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                                        <Skeleton animation="pulse" style={{opacity: 0.2, width: '48%', height: 190, borderRadius: 10}}/>
                                        <Skeleton animation="pulse" style={{opacity: 0.2, width: '48%', height: 190, borderRadius: 10}}/>
                                    </View>
                                </>
                            )
                        }
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