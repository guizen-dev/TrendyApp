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
    KeySubmit,
    StartView,
    SendKey
 }  from './styles'
 import Icon from 'react-native-vector-icons/FontAwesome';
 import  Feather  from 'react-native-vector-icons/Feather';
 import {LinearGradient} from 'expo-linear-gradient'
 import { useEffect, useState } from "react"
 import ToastManager, { Toast } from 'toastify-react-native'


function ForgotPassword( {navigation} ){
    const [email, setEmail] = useState("")
    const [key, setKey] = useState("")

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
                <StartView>
                    <Icon onPress={() => navigation.navigate('Signin')} name="arrow-left" size={30} color="white"  style={{marginBottom: 70}} />
                </StartView>         
                <Title style={{}}>Forgot Password</Title>
                <SubTitle style={{marginBottom: 60}}>Enter a valid email wait for the key and use the correct key</SubTitle>
            

                <View style={{flexDirection: 'row'}}>
                    <Input
                    placeholderTextColor="#484848"
                    placeholder="Email"
                    maxLength={100}
                    onChangeText={setEmail}
                    value={email} 
                    style={{marginBottom: 20}}
                    >
                    </Input>
                    <Feather name="mail" size={30} color='white' style={{position: 'absolute', top: 15, right: 15, flex: 1}} />

                </View>    
                    <StartView style={{marginTop: -15}}>
                        
                        <SendKey onPress={() => console.log('key sent')}>Send Key</SendKey>
                    </StartView> 

                    <View style={{flexDirection: 'row'}}>
                    <Input
                    placeholderTextColor="#FFFFFF"
                    placeholder="Enter the Key"
                    maxLength={100}
                    onChangeText={setKey}
                    value={key} 
                    style={{marginBottom: 20}}
                    >
                    </Input>
                    <Feather name="key" size={30} color='white' style={{position: 'absolute', top: 15, right: 15, flex: 1}} />

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