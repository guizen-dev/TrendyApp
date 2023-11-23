import react from "react";
import { KeyboardView, View, Text, Container, Title, SubTitle, Input, RegisterSubmit, TextSubmit, LoginSubmit, GoogleSubmit, FacebookSubmit, Image, ExampleText, StartView } from './styles'
import { registerRootComponent } from "expo";
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather'
import { LinearGradient } from 'expo-linear-gradient'
import { useEffect, useState } from "react"
import ToastManager, { Toast } from 'toastify-react-native'

function Register({ navigation }) {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [passwordShown, setPasswordShown] = useState(true)

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    }

    function usernameValid() {
        var username_lenght = username.length
        if (username_lenght > 30 || username_lenght == 0) {
            console.log('Username not valid')
            Toast.error('Username not valid')
            return false
        } else {
            return true
        }
    }

    function emailValid(){
        let res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (res.test(email)) {
            return true
        } else {
            console.log('Email not valid')
            Toast.error('Email not valid')

        }
    }

    function phoneValid() {
        let res = /^[0-9]*$/;
        if (res.test(phone)) {
            return true
        } else {
            console.log('Number not valid')
            Toast.error('Number not valid')
            return false
        }
    }

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

    function ValidateRegister(){
        if(usernameValid() && emailValid() && phoneValid() && passwordValid() && confirmPasswordValid()){
            Toast.success('User registered')
            sleep(3000).then(() => {
                navigation.navigate('Signin')
            }) 
        }else{
            console.log('Error')
        }
    }

    return (

        <KeyboardView>
            <LinearGradient colors={['#16293E', '#1D1E32']}>
                <Container>

                <StartView>
                    <Icon onPress={() => navigation.navigate('Signin')} name="arrow-left" size={30} color="white"  style={{marginBottom: 15}} />
                </StartView>

                <ToastManager position="top"/>

                <Title style={{marginBottom: 10}}>Register</Title>
                <SubTitle>Provide your Email and choose a Password of at least 8 characters</SubTitle>
                




                    <View style={{ flexDirection: 'row', width: '100%'}}>
                        <Input placeholderTextColor="#484848"
                            placeholder="Username"
                            maxLength={30}
                            onChangeText={setUsername}
                            value={username}
                            style={{width: '100%'}}
                        >
                        </Input>
                        <Feather name="user" size={30} color="white" style={{ position: 'absolute', top: 14, right: 15 }} />
                    </View>

                    <View style={{ flexDirection: 'row', }}>
                        <Input placeholderTextColor="#484848"
                            placeholder="Email"
                            maxLength={30}
                            onChangeText={setEmail}
                            value={email}
                            style={{width: '100%'}}
                        >
                        </Input>
                        <Feather name="mail" size={30} color="white" style={{ position: 'absolute', top: 14, right: 15 }} />
                    </View>
                    

                    <View style={{ flexDirection: 'row', }}>
                        <Input placeholderTextColor="#484848"
                            placeholder="Phone Number"
                            onChangeText={setPhone}
                            value={phone}
                            maxLength={13}
                            style={{width: '100%'}}
                        >
                        </Input>
                        <Feather name="phone" type="number" size={30} color="white" style={{ position: 'absolute', top: 14, right: 15 }} />
                    </View>

                    <View style={{ flexDirection: 'row', }}>
                        <Input placeholderTextColor="#484848"
                            secureTextEntry={passwordShown ? true : false}
                            placeholder="Password"
                            onChangeText={setPassword}
                            value={password}
                            maxLength={30}
                            style={{width: '100%'}}
                        >
                        </Input>
                        <Icon name={passwordShown ? "eye-slash" : "eye"} size={30} color="white" style={{ position: 'absolute', right: 15, marginTop: 14, marginLeft: 7 }} onPress={togglePassword} />
                    </View>

                    <View style={{ flexDirection: 'row', position:'relative' }}>
                        <Input placeholderTextColor="#484848"
                            secureTextEntry={passwordShown ? true : false}
                            placeholder="Confirm Password"
                            onPress={togglePassword}
                            onChangeText={setConfirmPassword}
                            value={confirmPassword}
                            maxLength={30}
                            style={{width: '100%'}}
                        >
                        </Input>
                        <Icon name={passwordShown ? "eye-slash" : "eye"} size={30} color="white"  style={{position: 'absolute', right: 15, marginTop: 14, marginLeft: 7}} onPress={togglePassword} />
                    </View>

                    <View style={{flexDirection: 'row', position: 'relative'}}>
                        <RegisterSubmit onPress={() => ValidateRegister()}>
                                <TextSubmit>Register</TextSubmit>
                        </RegisterSubmit>
                    </View>

                    <LoginSubmit onPress={() => navigation.navigate('Signin')}>
                        <Text style={{ textDecorationLine: 'underline', color: 'white', marginBottom: 25, }}>already have an account? Login now.</Text>
                    </LoginSubmit>

                </Container>
            </LinearGradient>
        </KeyboardView>
    )
}

export default Register;

