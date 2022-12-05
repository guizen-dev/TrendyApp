import styled from 'styled-components/native';

//to tentando usar o "<View></View>" pra colocar os icones mas quando eu coloco n vai, se souber resolver me fala prf --vini
// Problema resolvido


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
    width: 100%;
    padding: 10px;
    margin: 40px;
    
`

export const View = styled.View`
`


export const Title = styled.Text`
    color: #FFF;
    font-size: 48px;
    font-weight: 700;
`  

export const SubTitle = styled.Text`
    color: #FFF;
    font-size: 16px;
    opacity: 0.4;
    margin-bottom: 30px;
    text-align: center;
`   

export const Text = styled.Text`
    color: white;
`
export const TextSubmit = styled.Text`
    font-weight: 700;
    font-size: 24px;
    color: #fff;
    font-weight: bold;
`

export const Input = styled.TextInput`
    margin-bottom: 20px;
    padding: 15px 20px; 
    background-color: #191C32;
    color: #fff;
    font-size: 15px;
    border-radius: 28px;
    width: 90%;
    font-weight: 700;
`
export const RegisterSubmit = styled.TouchableOpacity`
backgroundColor: #0D0D1F;
border-radius: 28px;
padding: 15px 20px;
width: 300px;
align-items: center;
margin-bottom: 20px

`
export const LoginSubmit = styled.TouchableOpacity`
    
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

export const Image = styled.Image`
    
`