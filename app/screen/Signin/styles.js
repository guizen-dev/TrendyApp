import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const KeyboardView = styled.KeyboardAvoidingView`
    background-color: #25252D;
    flex: 1; 
    align-items: center;
    justify-content: center;
`
export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding-bottom: 10px;
    width: 90%;
    padding: 20px;
    margin: 30px;
`

export const View = styled.View`

`

export const Title = styled.Text`
    color: #FFF;
    font-size: 48px;
    font-weight: 700;
    line-height: 59px;
    display: flex;
    align-items: center;
    text-align: center;
    
    
`  

export const SubTitle = styled.Text`
    color: #FFF;
    font-size: 20px;
    opacity: 0.4;
    margin-bottom: 30px;
`   

export const Input = styled.TextInput`
    background-color: #191C32;
    padding: 15px 20px; 
    color: #fff;
    font-size: 15px;
    border-radius: 28px;
    width: 100%;
    font-weight: 700;

`

export const Image = styled.Image`
    
`

export const ButtonSubmit = styled.TouchableOpacity`
    backgroundColor: #6541F5;
    border-radius: 28px;
    padding: 15px 20px;
    width: 280px;
    align-items: center;
    margin-bottom: 20px
`

export const RegisterSubmit = styled.TouchableOpacity`
    
`

export const ForgotSubmit = styled.TouchableOpacity`

`

export const GoogleSubmit = styled.TouchableOpacity`
    width: 54px;
    height: 54px;
    align-items: center;
    justify-content: center;
    background: #FFFFFF;
    box-shadow: 0px 20px 60px rgba(55, 62, 125, 0.05);
    border-radius: 25px;
`
export const FacebookSubmit = styled.TouchableOpacity`
    width: 54px;
    height: 54px;
    align-items: center;
    justify-content: center;
    background: #77ADFF;
    box-shadow: 0px 20px 60px rgba(55, 62, 125, 0.05);
    border-radius: 25px;
`

export const TextSubmit = styled.Text`
    font-size: 24px;
    color: #fff;
    font-weight: bold;
`

export const COLORS = {
    black: "#171717",
    white: "#FFFFFF",
    background: "#252C4A"
}