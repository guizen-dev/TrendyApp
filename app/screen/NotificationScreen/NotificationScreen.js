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
    HashtagText
 }  from './styles'
 import Icon from 'react-native-vector-icons/FontAwesome';
 import Feather from 'react-native-vector-icons/Feather'
  import { useFonts } from 'expo-font';
  import Carousel from 'react-native-snap-carousel';
  import Pagination from 'react-native-snap-carousel';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

function NotificationScreen ({ navigation }){

    return(
        <Container style={{flex:1,backgroundColor:'#16293E'}}>
            
            <View style={{flexDirection:'row',justifyContent:'space-between', marginBottom:20,alignItems:'center',}}>
                        <View style={{flexDirection:'column', display:'flex',}}>
                        <Title style={{marginVertical: 20, marginBottom: 20}}>Notifications</Title>
                        </View>
            </View>

            
            <Title style={{
                fontSize: 24,
                width: 76,
                top: 20,
                }}>Today
            </Title>
                

                <View style={{top: 10,  marginVertical: 2}}>
                <TouchableOpacity
                    style={{
                        width: 45,
                        height: 45,
                        borderRadius: 50,
                        backgroundColor: '#6541F5',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                        marginVertical: 20,
                        top: 10
                    }}
                    >
                <Feather name="info" color="white" size={30}/>
                </TouchableOpacity>

                    <Text styles={{left: 100, top: 20, position:'absolute', padding: 10}}>#guiguizen</Text>
                    <HashtagText styles={{}}>is now on trend!</HashtagText>
                </View>
                

                <Title style={{
                    fontSize: 24,
                    width: 160,
                    top: 30,
                    marginVertical: 20,
                    marginBottom: 10,
                    marginTop: 60
                    }}>Last Week
                </Title>

                <View style={{top: 10,  marginVertical: 2}}>
                <TouchableOpacity
                    style={{
                        width: 45,
                        height: 45,
                        borderRadius: 50,
                        backgroundColor: '#6541F5',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                        marginVertical: 20,
                        top: 10
                    }}
                    >
                    <Feather name="info" color="white" size={30}/>
                    </TouchableOpacity>

                    <Text styles={{left: 100, top: 20, position:'absolute', padding: 10}}>#Neymar</Text>
                    <HashtagText styles={{}}>is now on trend!</HashtagText>
                </View>           
            
        </Container>
    )
}

export default NotificationScreen;