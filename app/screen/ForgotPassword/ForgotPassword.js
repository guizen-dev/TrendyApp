import { NavigationContainer } from "@react-navigation/native";
import react from "react";
import { KeyboardView,View, 
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
    KeySubmit
 }  from './styles'
 import Icon from 'react-native-vector-icons/FontAwesome';
 import  Feather  from 'react-native-vector-icons/Feather';
 import {LinearGradient} from 'expo-linear-gradient'


function ForgotPassword( {navigation} ){
    return(

    <KeyboardView>
        <LinearGradient colors={['#16293E', '#1D1E32']}>
            <Container>
                <Title>Forgot Password</Title>
                <SubTitle>Enter your email</SubTitle>
                
                <Icon onPress={() => navigation.navigate('Signin')} name="arrow-left" size={30} color="white"  style={{position:'absolute', top: 40, left: 25}} />

                <View style={{flexDirection: 'row'}}>
                <Input
                placeholderTextColor="#484848"
                placeholder="Email"
                maxLength={26}
                ></Input>
                <Feather name="mail" size={30} color="white" style={{position: 'absolute', top: 14, right: 15}} />
                </View>

                <KeySubmit onPress={() => navigation.navigate('NewPassword')}>
                    <TextSubmit>Send</TextSubmit>
                </KeySubmit>

            </Container>
        </LinearGradient>
    </KeyboardView>    
    )
}

export default ForgotPassword;