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


function NewPassword({ navigation }){
    return(
    <KeyboardView>
        <LinearGradient colors={['#16293E', '#1D1E32']}>
        <Container>
            
            <Title style={{bottom: 420}}>New password</Title>
            <SubTitle style={{bottom: 410}}>Your identity has been verified!                       Set your new password.</SubTitle>

                <View>
                <Icon onPress={() => navigation.navigate('ForgotPassword')} name="arrow-left" size={30} color="white"  style={{position:'absolute', right: 140, bottom: 500}} />
                </View>

            <View style={{flexDirection: 'row', bottom: 400}}>   
            <Input
            placeholderTextColor="#484848"
            placeholder="New Password"
            secureTextEntry={true}
            maxLength={30}
            ></Input>
            <Icon name="eye-slash" size={30} color="white"  style={{position: 'absolute', right: 15, marginTop: 14, marginLeft: 7}} />
            </View>

            <View style={{flexDirection: 'row', bottom: 400}}>
            <Input
            placeholderTextColor="#484848"
            placeholder="Confirm Password"
            secureTextEntry={true}
            maxLength={30}
            ></Input>
            <Icon name="eye-slash" size={30} color="white"  style={{position: 'absolute', right: 15, marginTop: 14, marginLeft: 7}} />
            </View>

            <ButtonSubmit onPress={() => navigation.navigate('PasswordUpdated')}>
                <TextSubmit>Update</TextSubmit>
            </ButtonSubmit>
        </Container>
        </LinearGradient>
    </KeyboardView>
    )
}

export default NewPassword;