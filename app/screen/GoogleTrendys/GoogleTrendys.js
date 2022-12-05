import React from 'react'
import { View, Text, Container, Title, Hamburger, TouchableOpacity, ImageBackground, Google, Image, SubTitle, Title2}  from './styles'
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
import TrendScreen from '../TrendScreen/TrendScreen';
import { ScrollView } from 'react-native-gesture-handler';

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

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator()

function GoogleTrendys( navigation ){

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
                <Feather onPress={() => navigation.navigate('Homepage')} name="arrow-left" size={30} color="white" />  
            </View>   

            <View style={{flexDirection:'row', margin: 30, alignItems: 'center'}}>
                    <Google style={{marginRight: 10}}><Icon name="google" size={50} color="white" /></Google>
                    <Title>Google</Title>
            </View>  

            <View 
            style={{
                marginVertical: 15,
                marginBottom: 10, 
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}
            >
                <Title style={{marginLeft: 30}}>News</Title>
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

                <View style={{flexDirection:'column', alignItems:'center', marginTop: 30}}>
                <Title>News of the Week</Title>

                <View
                style={{width: 338, height: 130, backgroundColor: '#2C2C2C', borderRadius: 8, marginTop: 10, flexDirection: 'row', alignItems: 'center'}}
                >
                    <View
                    style={{width: 100, height: 98, backgroundColor: '#3C3C3C', borderRadius: 8, margin: 15}}
                    >

                    </View>

                    <View style={{flexDirection:'column'}}>
                    <Title2>The Verge</Title2>
                    <Text style={{width: 200}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus augue molestie purus turpis nunc aliquet sollicitudin pulvinar.</Text>
                    </View>
                </View>

                <View
                style={{width: 338, height: 130, backgroundColor: '#2C2C2C', borderRadius: 8, marginTop: 10, flexDirection: 'row', alignItems: 'center'}}
                >
                    <View
                    style={{width: 100, height: 98, backgroundColor: '#3C3C3C', borderRadius: 8, margin: 15}}
                    >

                    </View>

                    <View style={{flexDirection:'column'}}>
                    <Title2>The Verge</Title2>
                    <Text style={{width: 200}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus augue molestie purus turpis nunc aliquet sollicitudin pulvinar.</Text>
                    </View>
                </View>

                <View
                style={{width: 338, height: 130, backgroundColor: '#2C2C2C', borderRadius: 8, marginTop: 10, flexDirection: 'row', alignItems: 'center'}}
                >
                    <View
                    style={{width: 100, height: 98, backgroundColor: '#3C3C3C', borderRadius: 8, margin: 15}}
                    >

                    </View>

                    <View style={{flexDirection:'column'}}>
                    <Title2>The Verge</Title2>
                    <Text style={{width: 200}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus augue molestie purus turpis nunc aliquet sollicitudin pulvinar.</Text>
                    </View>
                </View>
            </View>

            </View>

            
        </ScrollView>
        </Container>
        
         
        
    )
}

export default GoogleTrendys;