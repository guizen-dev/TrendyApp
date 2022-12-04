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

export const KeyText = styled.Text`
    text-decoration: underline;
    color: white;
`

export const Title = styled.Text`
    color: #FFF;
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 30px;
`  

export const SubTitle = styled.Text`
    color: #FFF;
    font-size: 20px;
    opacity: 0.4;
    margin-bottom: 30px;
    text-align: center;
`   
export const Input = styled.TextInput`
    margin-bottom: 20px;
    background-color: #191C32;
    padding: 15px 20px; 
    color: #fff;
    font-size: 15px;
    border-radius: 28px;
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
    border-radius: 28px;
    padding: 10px 20px;
    width: 300px;
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

