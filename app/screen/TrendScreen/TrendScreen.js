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
 import FontAwesome from 'react-native-vector-icons/FontAwesome'
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

const topAnimesData = [
    {
        image: 'https://cdn.discordapp.com/attachments/963977573241602138/1044428115914522644/689e2efcf9f192ba6c0f7a538ee99027.jpeg'
    },
    {
        image: 'https://cdn.discordapp.com/attachments/963977573241602138/1044428115914522644/689e2efcf9f192ba6c0f7a538ee99027.jpeg'
    },
    {
        image: 'https://cdn.discordapp.com/attachments/963977573241602138/1044428115914522644/689e2efcf9f192ba6c0f7a538ee99027.jpeg'
    },
    {
        image: 'https://cdn.discordapp.com/attachments/963977573241602138/1044428115914522644/689e2efcf9f192ba6c0f7a538ee99027.jpeg'
    }
];



function TrendScreen ({ navigation }){

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
                        <Input placeholder="Search" placeholderTextColor="#fff"/>
                        <Feather name="search" size={20} color="#C6C6C6" style={{marginRight: 5}} />
                    </View> 

                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
                        <GoogleSubmit 
                        onPress={() => navigation.navigate('GoogleTrendys')}
                        style={{flexDirection: 'row',}}
                        >
                            <Image  
                            source={require('../../assets/Bitcoin.png')}
                            style={{width:35, height:35}}
                            />
                        </GoogleSubmit>

                        <FacebookSubmit 
                        onPress={() => navigation.navigate('FacebookTrendys')}
                        style={{flexDirection: 'row'}}
                        >
                            <Icon name="facebook" color="white" size={35}  />
                        </FacebookSubmit> 

                        <TwitterSubmit 
                        onPress={() => navigation.navigate('TwitterTrendys')}
                        style={{flexDirection: 'row'}}
                        >
                            <FontAwesome name="twitter" color="white" size={35}  />
                        </TwitterSubmit> 
                        
                        <TikTokSubmit 
                        onPress={() => navigation.navigate('TiktokTrendys')}
                        style={{flexDirection: 'row'}}
                        >
                            <Icon name="tiktok" color="black" size={35} />
                        </TikTokSubmit> 

                        <YoutubeSubmit 
                        onPress={() => navigation.navigate('YoutubeTrendys')}
                        style={{flexDirection: 'row'}}
                        >
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
                            <SeeAll onPress={() => navigation.navigate('Catalog')}>
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
                            data={topFilmsData}
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
                            data={topAnimesData}
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
                            source={require('../../assets/Fire.png')}
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
