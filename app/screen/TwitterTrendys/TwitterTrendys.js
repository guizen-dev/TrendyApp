import React from 'react'
import { SubTitle, Title2, Image, Twitter, View, Text, Container, Title, Hamburger, TouchableOpacity, ImageBackground, Google}  from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather'
 import { useFonts } from 'expo-font';
 import Carousel from 'react-native-snap-carousel';
 import Pagination from 'react-native-snap-carousel';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {LinearGradient} from 'expo-linear-gradient'
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

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

function TwitterTrendys( navigation ){

    function renderItem({ item }){
        return(
            <View style={{justifyContent: 'center',}}>
                    <Text style={{color:'white', fontWeight: 'bold'}}>{item.title}</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('MovieDetail')}>
                    <Image style={{width:'90%', height:200, borderRadius: 10 }} source={{uri: `${item.image}`}} />
                    </TouchableOpacity>
            </View>
        );
    }

    return(
        
        
        
        <Container style={{flex:1,backgroundColor:'#16293E', }}>

            <ScrollView>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20, marginLeft: 20, position: 'relative'}}>
                <Feather onPress={() => navigation.navigate('TrendScreen')} name="arrow-left" size={30} color="white" />  
            </View>   

            <View style={{flexDirection:'row', margin: 30, alignItems: 'center'}}>
                    <Twitter style={{marginRight: 10}}><Icon name="twitter" size={50} color="white" /></Twitter>
                    <Title>Twitter</Title>
            </View>  

            <View>
                <Title2 style={{marginBottom: 10, marginLeft: 30}}>More Relevance</Title2>

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
            </View>

            <View style={{marginTop: 40, }}>
                <Title2 style={{marginBottom: 10, marginLeft: 30}}>Assunts</Title2>

                
            </View>

             <View
            style={{
                margin: 30, 
                flexDirection: 'column',
                
            }}
            >
                <View style={{flexDirection:'row', alignItems:'center'}}>                       
                                <View style={{flexDirection:'column'}}>
                                    <SubTitle>Serach Engine</SubTitle>
                                    <Title>Today</Title>
                                    <View style={{
                                        width: 312,
                                        height: 26,
                                        backgroundColor: '#0D0D1F',
                                        borderRadius: 10,
                                        marginTop: 15
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
                </View>
                </ScrollView>
        </Container>
        
         
        
    )
}

export default TwitterTrendys;