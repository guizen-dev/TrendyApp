import react from "react";
import { render } from "react-dom";
import {LinearGradient} from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
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
    ButtonSubmit
 }  from './styles'
import { useEffect, useState } from "react"
import ToastManager, { Toast } from 'toastify-react-native'


function NewPassword({ navigation }){
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    function passwordValid() {
        let res = /(?=.*[A-Z])(?=.*[!@#\$%])/;
        if (res.test(password)) {
            return true
        } else {
            console.log('Example: Password123@')
            Toast.error('Example: Password123@')
            return false
        }
    }

    function confirmPasswordValid() {
        if (password == confirmPassword) {
            return true
        } else {
            console.log('Passwords are not matching!')
            Toast.error('Passwords are not matching!')
            return false
        }
    }

    const sleep = (duration) => {
        return new Promise(resolve => setTimeout(resolve, duration));
    }

    function ValidatePasswordUpdate(){
        if (passwordValid()){
            if (confirmPasswordValid()){
                navigation.navigate('PasswordUpdated') 
            }
        }
    }

    return(
    <KeyboardView>
        <LinearGradient colors={['#16293E', '#1D1E32']}>
        <Container>
            <ToastManager position="top"/>

            <Title style={{bottom: 420}}>New password</Title>
            <SubTitle style={{bottom: 410}}>Your identity has been verified! Set your new password.</SubTitle>

                <View>
                <Icon onPress={() => navigation.navigate('ForgotPassword')} name="arrow-left" size={30} color="white"  style={{position:'absolute', right: 140, bottom: 500}} />
                </View>

            <View style={{flexDirection: 'row', bottom: 400}}>   
            <Input
            placeholderTextColor="#484848"
            placeholder="New Password"
            secureTextEntry={true}
            maxLength={30}
            onChangeText={setPassword}
            value={password}
            ></Input>
            <Icon name="eye-slash" size={30} color="white"  style={{position: 'absolute', right: 15, marginTop: 14, marginLeft: 7}} />
            </View>

            <View style={{flexDirection: 'row', bottom: 400}}>
            <Input
            placeholderTextColor="#484848"
            placeholder="Confirm Password"
            secureTextEntry={true}
            maxLength={30}
            onChangeText={setConfirmPassword}
            value={confirmPassword}
            ></Input>
            <Icon name="eye-slash" size={30} color="white"  style={{position: 'absolute', right: 15, marginTop: 14, marginLeft: 7}} />
            </View>

            <ButtonSubmit onPress={() => ValidatePasswordUpdate()}>
                <TextSubmit>Update</TextSubmit>
            </ButtonSubmit>
        </Container>
        </LinearGradient>
    </KeyboardView>
    )
}

export default NewPassword;