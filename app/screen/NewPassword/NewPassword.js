import react from "react";
import { render } from "react-dom";
import {LinearGradient} from 'expo-linear-gradient'
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
 }  from './styles'


function NewPassword({ navigation }){
    return(
    <KeyboardView>
        <LinearGradient colors={['#16293E', '#1D1E32']}>
        <Container>
            <Title>New password</Title>
            <SubTitle>Your identity has been verified! Set your new password.</SubTitle>
            <Input
            placeholderTextColor="#fff"
            placeholder="New Password"
            ></Input>

            <Input
            placeholderTextColor="#fff"
            placeholder="Confirm Password"
            ></Input>

            <ButtonSubmit onPress={() => navigation.navigate('PasswordUpdated')}>
                <TextSubmit>Update</TextSubmit>
            </ButtonSubmit>
        </Container>
        </LinearGradient>
    </KeyboardView>
    )
}

export default NewPassword;