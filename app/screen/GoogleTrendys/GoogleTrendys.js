import React from 'react'
import { View, Text, Container, Title, Billboard, Youtube, Hamburger, TouchableOpacity, SongTitle, ImageBackground, Resultado, Separador, GoogleSubmit, Google, Image, SubTitle, Title2}  from './styles'
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
import { useEffect, useState, useRef } from "react";
import axios from 'axios';

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
    const [songs, setSongs] = useState([])


    useEffect(()=>{
        axios.get('https://keikoapp.herokuapp.com/billboard-top-100').then((response) => {setSongs(response.data)}).catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
    },[])

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
                    <Title>Billboard</Title>
                    <GoogleSubmit style={{marginLeft: 10, marginTop:5}}><Icon name="music" size={30} color="black" /></GoogleSubmit>
            </View>  

            {
                songs ? (
                    songs.map((item)=>{
                        return(
                            <Resultado>
                                <Separador>
                                    <Text style={{color:'#FFF', marginLeft: 30, marginTop: 15}}>
                                        {item.rank}
                                    </Text>
                                    <Image style={{width:45, height:45, borderRadius: 8, marginTop: 1, marginLeft: 15}} source={{uri: `${item.cover}`}} />
                                    <View>
                                    <SongTitle style={{color:'#FFF', marginLeft: 15, marginTop: 5, size: 5}}>
                                        {item.artist}
                                    </SongTitle>
                                    <Text style={{color:'#FFF', marginLeft: 15}}>
                                        {item.title}
                                    </Text>
                                    </View>
                                    
                                </Separador>
                            </Resultado>
                        )
                    })
                ) : null
            }

            
        </ScrollView>
        </Container>
        
         
        
    )
}

export default GoogleTrendys;