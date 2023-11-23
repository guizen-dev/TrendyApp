import { View, 
    Container, 
    Title, 
    ScrollView,
 }  from './styles'
 import Icon from 'react-native-vector-icons/FontAwesome';
 import Feather from 'react-native-vector-icons/Feather'
  import { useFonts } from 'expo-font';
  import Carousel from 'react-native-snap-carousel';
  import Pagination from 'react-native-snap-carousel';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NotificationComponent from './NotificationComponent';

const Tab = createBottomTabNavigator();

function NotificationScreen ({ navigation }){

    return(
        <Container style={{flex:1,backgroundColor:'#16293E'}}>
            
            <ScrollView>
            <View style={{flexDirection:'row',justifyContent:'space-between', marginBottom:20,alignItems:'center',}}>
                        <View style={{flexDirection:'column', display:'flex',}}>
                        <Title style={{marginVertical: 20, marginBottom: 20}}>Notifications</Title>
                        </View>
            </View>

            
            <Title style={{
                fontSize: 24,
                }}>Today
            </Title>
                
            <NotificationComponent title={'#richarlison'}/>
            <NotificationComponent title={'#richarlison'}/>
            <NotificationComponent title={'#richarlison'}/>
            <NotificationComponent title={'#richarlison'}/>
                
                

            <Title style={{fontSize: 24, marginTop: 20}}>Last Week</Title>     
            <NotificationComponent title={'#richarlison'}/>
            <NotificationComponent title={'#richarlison'}/>
            <NotificationComponent title={'#richarlison'}/>
            </ScrollView>
                    
        </Container>
    )
}

export default NotificationScreen