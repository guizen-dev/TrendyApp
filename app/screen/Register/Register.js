import react from "react";
import { KeyboardView, View, Text, Container, Title, SubTitle, Input, RegisterSubmit, TextSubmit, LoginSubmit, GoogleSubmit, FacebookSubmit, Image  }  from './styles'
import { registerRootComponent } from "expo";
import Icon from 'react-native-vector-icons/FontAwesome';
import  Feather  from 'react-native-vector-icons/Feather'
import {LinearGradient} from 'expo-linear-gradient'


function Register({ navigation }) {

    return(
    
        <KeyboardView>
        <LinearGradient colors={['#16293E', '#1D1E32']}>
    <Container>
        
            <Title>Register</Title>
            

            <Icon onPress={() => navigation.navigate('Signin')} name="arrow-left" size={30} color="white"  style={{position:'absolute', top: 40, left: 25}} />
            
        
            <View style={{flexDirection: 'row',}}>
            <Input placeholderTextColor="#484848"
                placeholder="Username"
                maxLength={30}
                
                >
            
            </Input>       
            <Feather name="user" size={30} color="white" style={{position: 'absolute', top: 14, right: 15}} />
            </View>

            <View style={{flexDirection: 'row',}}>
            <Input placeholderTextColor="#484848"
                    placeholder="Email"
                    maxLength={30}></Input>
                    <Feather name="mail" size={30} color="white" style={{position: 'absolute', top: 14, right: 15}} />
                    </View>

            <View style={{flexDirection: 'row',}}>
            <Input placeholderTextColor="#484848"
                    placeholder="Phone Number"
                    maxLength={13}></Input>  
                    <Feather name="phone" type="number" size={30} color="white" style={{position: 'absolute', top: 14, right: 15}} />
                    </View>

            <View style={{flexDirection: 'row',}}> 
            <Input placeholderTextColor="#484848"
                    secureTextEntry={true}
                    placeholder="Password" 
                    maxLength={30}></Input> 
                <Icon name="eye-slash" size={30} color="white"  style={{position: 'absolute', right: 15, marginTop: 14, marginLeft: 7}} />
                    </View>
            <View style={{flexDirection: 'row',}}>
            <Input placeholderTextColor="#484848"
                    secureTextEntry={true}
                    placeholder="Confirm Password" 
                    maxLength={30}></Input>   
                <Icon name="eye-slash" size={30} color="white"  style={{position: 'absolute', right: 15, marginTop: 14, marginLeft: 7}} />
                    </View>  

            <RegisterSubmit onPress={() => navigation.navigate('Signin')}><TextSubmit>Register</TextSubmit></RegisterSubmit>     

            <LoginSubmit onPress={() => navigation.navigate('Signin')}>
                    <Text style={{textDecorationLine: 'underline', color: 'white', marginBottom: 25,}}>already have an account? Login now.</Text>
                </LoginSubmit>  

                <View
                style={{
                    flexDirection: 'row'
                }}
                >
                <GoogleSubmit style={{flexDirection: 'row', marginRight: 30}}>
                    <Image  
                    source={require('../../assets/Bitcoin.png')}
                    style={{width:35, height:35}}
                    imageStyle={{borderRadius: 25}}
                    />
                </GoogleSubmit>

                <FacebookSubmit style={{flexDirection: 'row'}}>
                    <Icon name="facebook" color="white" size={35}  />
                </FacebookSubmit> 
                </View>
            
    </Container>
    </LinearGradient>
    </KeyboardView>
    )
}

export default Register;

