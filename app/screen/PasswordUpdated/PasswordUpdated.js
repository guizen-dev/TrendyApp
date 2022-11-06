import { KeyboardView, View, 
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
    Afirmativo,
 }  from './styles'
import  AfirmativoImg  from '../../assets/Afirmativo.png';
import {LinearGradient} from 'expo-linear-gradient'

function PasswordUpdated({ navigation }) {
    return(
        <KeyboardView>
            <LinearGradient colors={['#16293E', '#1D1E32']}>
                <Container>
                    <Title>Password Updated!</Title>
                    <Afirmativo source={AfirmativoImg} />
                    <SubTitle style={{marginTop: 20}}>You Password has been updated!</SubTitle>
                    <ButtonSubmit onPress={() => navigation.navigate('Signin')}>
                        <TextSubmit>Login</TextSubmit>
                    </ButtonSubmit>
                </Container>
            </LinearGradient>
        </KeyboardView>
    )
}      

export default PasswordUpdated;