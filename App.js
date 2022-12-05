import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Signin from './app/screen/Signin';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './app/screen/Register/Register';
import ForgotPassword from './app/screen/ForgotPassword/ForgotPassword';
import NewPassword from './app/screen/NewPassword/NewPassword';
import PasswordUpdated from './app/screen/PasswordUpdated/PasswordUpdated';
import Homepage from './app/screen/Homepage/Homepage';
import ProfileScreen from "./app/screen/ProfileScreen/ProfileScreen";
import HubScreen from './app/screen/HubScreen/HubScreen';
import NotificationScreen from './app/screen/NotificationScreen/NotificationScreen';
import TrendScreen from './app/screen/TrendScreen/TrendScreen';
import Catalog from './app/screen/Catalog/Catalog';
import MovieDetail from './app/screen/MovieDetail/MovieDetail';
import EditProfile from './app/screen/EditProfile/EditProfile';
import GoogleTrendys from './app/screen/GoogleTrendys/GoogleTrendys';
import FacebookTrendys from './app/screen/FacebookTrendys/FacebookTrendys';
import TiktokTrendys from './app/screen/TiktokTrendys/TiktokTrendys'
import YoutubeTrendys from './app/screen/YoutubeTrendys/YoutubeTrendys';
import TwitterTrendys from './app/screen/TwitterTrendys/TwitterTrendys';
import AboutUs from './app/screen/AboutUs/AboutUs';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { 
  Montserrat_100Thin,
  Montserrat_100Thin_Italic,
  Montserrat_200ExtraLight,
  Montserrat_200ExtraLight_Italic,
  Montserrat_300Light,
  Montserrat_300Light_Italic,
  Montserrat_400Regular,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium,
  Montserrat_500Medium_Italic,
  Montserrat_600SemiBold,
  Montserrat_600SemiBold_Italic,
  Montserrat_700Bold,
  Montserrat_700Bold_Italic,
  Montserrat_800ExtraBold,
  Montserrat_800ExtraBold_Italic,
  Montserrat_900Black,
  Montserrat_900Black_Italic,
  useFonts 
} from '@expo-google-fonts/montserrat';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import AppLoading from 'expo-app-loading';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// const Drawer = createDrawerNavigator({
//   ProfileScreen
// })


export default function App() {

  let [fontsLoaded, error] = useFonts({
    Montserrat_100Thin,
    Montserrat_100Thin_Italic,
    Montserrat_200ExtraLight,
    Montserrat_200ExtraLight_Italic,
    Montserrat_300Light,
    Montserrat_300Light_Italic,
    Montserrat_400Regular,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold,
    Montserrat_600SemiBold_Italic,
    Montserrat_700Bold,
    Montserrat_700Bold_Italic,
    Montserrat_800ExtraBold,
    Montserrat_800ExtraBold_Italic,
    Montserrat_900Black,
    Montserrat_900Black_Italic
});

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <>  
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Signin" screenOptions={{headerShown: false}}>
          <Stack.Screen name='Signin' component={Signin} />
          <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
          <Stack.Screen name='NewPassword' component={NewPassword} />
          <Stack.Screen name='PasswordUpdated' component={PasswordUpdated} />
          <Stack.Screen name='Register' component={Register} />
          <Stack.Screen name='Homepage' component={Homepage} />
          <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
          <Stack.Screen name='HubScreen' component={HubScreen} />
          <Stack.Screen name='TrendScreen' component={TrendScreen} />
          <Stack.Screen name='NotificationScreen' component={NotificationScreen} />
          <Stack.Screen name='Catalog' component={Catalog} />
          <Stack.Screen name='MovieDetail' component={MovieDetail}/>
          <Stack.Screen name='EditProfile' component={EditProfile} />
          <Stack.Screen name='GoogleTrendys' component={GoogleTrendys} />
          <Stack.Screen name='TwitterTrendys' component={TwitterTrendys} />
          <Stack.Screen name='FacebookTrendys' component={FacebookTrendys} />
          <Stack.Screen name='TiktokTrendys' component={TiktokTrendys} />
          <Stack.Screen name='YoutubeTrendys' component={YoutubeTrendys} />
          <Stack.Screen name='AboutUs' component={AboutUs} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}


