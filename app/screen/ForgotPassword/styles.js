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
    align-items: center;
    margin-bottom: auto; 
    margin-top: 0;
    padding-bottom: 10px;
    width: 90%;
    padding: 20px;
    margin: 30px;
`
export const StartView = styled.View`
    margin-right: auto; 
    margin-left: 3;
    widht: 100%;

`

export const KeyText = styled.Text`
    text-decoration: underline;
    color: white;
`

export const Title = styled.Text`
    color: #FFF;
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 10px;
`  

export const SubTitle = styled.Text`
    color: #FFF;
    font-size: 18px;
    opacity: 0.4;
    margin-bottom: 30px;
`   

export const SendKey = styled.Text`
    color: #FFF;
    font-size: 14px;
    opacity: 0.4;
    margin-bottom: 30px;
    text-decoration: underline;
` 

export const Input = styled.TextInput`
    background-color: #191C32;
    padding: 15px 20px; 
    color: #fff;
    font-size: 15px;
    border-radius: 18px;
    width: 350px;
    font-weight: 700;
`
export const ButtonSubmit = styled.TouchableOpacity`
    backgroundColor: #22212D;
    border: 2px solid purple;
    border-radius: 7px;
    padding: 10px 20px;
    width: 50%;
    align-items: center; 
    margin-bottom: 20px
`

export const KeySubmit = styled.TouchableOpacity`
    backgroundColor: #0D0D1F;
    border-radius: 18px;
    padding: 10px 20px;
    width: 200px;
    height: 54px;
    align-items: center; 
    margin-bottom: -500px
`

export const TextSubmit = styled.Text`
    font-size: 25px;
    color: #fff;
    font-weight: bold;
`

export const EmailKey = styled.TouchableOpacity`
    margin-top: -10px;
    margin-right: 200px;
    margin-bottom: 20px;
`

export const PhoneKey = styled.TouchableOpacity`
    margin-top: -10px;
    margin-right: 200px;
    margin-bottom: 20px;
`

export const View = styled.View`
`

