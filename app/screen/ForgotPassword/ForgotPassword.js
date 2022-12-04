import { NavigationContainer } from "@react-navigation/native";
import react from "react";
import { KeyboardView,
    View, 
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
 import { useEffect, useState } from "react"
 import ToastManager, { Toast } from 'toastify-react-native'


function ForgotPassword( {navigation} ){
    const [email, setEmail] = useState("")

    //FUNÇÃO RETORNANDO FALSO 

    function emailValid() {
        let res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (res.test(email)) {
            return true
        }
        Toast.error('Email not valid')
        return false
    }

    function ValidateEmail(){
        if(emailValid()){
            Toast.success('Valid Email')
            navigation.navigate('NewPassword')
            return
        }
        console.log('Error')
    }

    return(

    <KeyboardView>
        <LinearGradient colors={['#16293E', '#1D1E32']}>
            <Container>
                <ToastManager position="top"/>
                <Title style={{bottom: 465}}>Forgot Password</Title>
                <SubTitle style={{bottom: 490}}>Enter your email</SubTitle>
            
                <View>
                <Icon onPress={() => navigation.navigate('Signin')} name="arrow-left" size={30} color="white"  style={{position:'absolute', right: 145, bottom: 560}} />
                </View>          

                <View style={{flexDirection: 'row', bottom: 480}}>
                    <Input
                    placeholderTextColor="#484848"
                    placeholder="Email"
                    maxLength={100}
                    onChangeText={setEmail}
                    value={email} >
                    </Input>
                    <Feather name="mail" size={30} color='white' style={{position: 'absolute', top: 14, right: 15, flex: 1}} />
                </View>    

                <KeySubmit onPress={() => ValidateEmail()}>
                    <TextSubmit>Send</TextSubmit>
                </KeySubmit>

            </Container>
        </LinearGradient>
    </KeyboardView>    
    )
}

export default ForgotPassword;