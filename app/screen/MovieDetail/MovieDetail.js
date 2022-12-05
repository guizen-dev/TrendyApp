import React, { useState, useRef  } from 'react';
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
import Lottie from 'lottie-react-native'

const moviesData = [
    {
        title: 'Sam Worthington',
        image: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/blKKsHlJIL9PmUQZB8f3YmMBW5Y.jpg'
    },
    {
        title: 'Sam Worthington',
        image: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/iOVbUH20il632nj2v01NCtYYeSg.jpg'
    },
    {
        title: 'Sam Worthington',
        image: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/flfhep27iBxseZIlxOMHt6zJFX1.jpg'
    }
];

function MovieDetail ({ navigation }){

    const [isLiked, setIsLiked] = React.useState(false)
    const onLikePost = () => {}

        const animation = React.useRef(null);
        const isFirstRun = React.useRef(true);
        

    React.useEffect(() => {
        
        if (isLiked) {
            animation.current.play(19, 66);
        } else {
            animation.current.play(19, 19);
        }

    }, [isLiked]);

    function renderItem({ item }){
        return(
            <View style={{justifyContent: 'center',}}>
                    
                    <TouchableOpacity onPress={() => navigation.navigate('MovieDetail')}>
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

                        source={require('../../assets/avatar.jpg')}
                        style={{width: '100%', height: 563, borderRadius: 30}}
                    />
                    
                <View style={{margin: 30}}>
                    <Title>Avatar: The Way of Water</Title>
                    <SubTitle>(2022) | 190 minutes</SubTitle>

                    <View style={{flexDirection: 'row', margin: 15}}>
                        <View style={{backgroundColor: '#36394A', borderRadius: 12, justifyContent: 'center', alignItems:'center', width: 113, padding: 2, marginLeft: -40, margin: 4}}>
                            <Text>Sciencie Fiction</Text>
                        </View>
                        <View style={{backgroundColor: '#36394A', borderRadius: 12, justifyContent: 'center', alignItems:'center', width: 113, padding: 2, margin: 4}}>
                            <Text>Adventure</Text>
                        </View>
                        <View style={{backgroundColor: '#36394A', borderRadius: 12, justifyContent: 'center', alignItems:'center', width: 113, padding: 2, margin: 4}}>
                            <Text>Action</Text>
                        </View>
                    </View>

                    <View>
                        <Title2>Original language</Title2>
                        <SubTitle2>English</SubTitle2>

                        <Title2>Budget</Title2>
                        <SubTitle2>$185,000,000.00</SubTitle2>

                        <Title2>Revenue</Title2>
                        <SubTitle2>$751,100,000.00</SubTitle2>

                        <Title2>Tags</Title2>
                        <SubTitle2>crime fighter, secret identity, nightclub, politician. police, psychopath. vigilante
superhero, based on comic, organized crime, serial killer, millionaire, social injustice, murder investigation
masked superhero, political corruption
neo-noir, vengeance, mayoral election</SubTitle2>
                    </View>

                    <View style={{marginTop: 30}}>

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
                        data={moviesData}
                        renderItem={renderItem.bind(this)}
                        sliderWidth={400}
                        itemWidth={150}
                        useScrollView={true}
                        loop={true}
                        loopClonesPerSide={4}
                    />
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