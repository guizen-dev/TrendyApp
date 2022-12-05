import React from 'react';
import { View, Text, Container, Title, Hamburger, TouchableOpacity, ImageBackground, SignoutrSubmit, SubTitle, Input, ScrollView}  from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ionicon from 'react-native-vector-icons/Ionicons'
import { borderBottomColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Signin from '../Signin/Signin';
import Register from '../Register/Register';
import ForgotPassword from '../ForgotPassword/ForgotPassword';
import PasswordUpdated from '../PasswordUpdated/PasswordUpdated'
import Homepage from '../Homepage/Homepage';
import { Touchable } from 'react-native-web';

function AboutUs( {navigation} ){
    return(
        <Container style={{flex:1,backgroundColor:'#16293E'}}>
            <ScrollView>
            <Feather name="arrow-left" color="white" size={30} style={{position: 'absolute', marginVertical: '7%', marginLeft: '3%'}} onPress={() => navigation.navigate('HubScreen')}/>
            <Title style={{fontSize: 26, marginVertical: '6%', left: 130}}>About Us</Title>

            <View style={{
                            width:350, 
                            height:245,
                            borderRadius: 20, 
                            backgroundColor: '#2C2C2C',
                            marginLeft: '5%',
                            bottom: 30,
                            marginTop: 30
                            }}>
            <ImageBackground
                        source={require('../../assets/nana.png')}
                        

                        imageStyle={{
                            width:60, 
                            height:60,
                            borderRadius: 140, 
                            top: 170,
                            left: 10}}
                    />

                    <View style={{flexDirection: 'row', marginLeft: '3%'}}>
                    <ImageBackground
                        source={require('../../assets/rate.png')}
                        style={{
                            width:20, 
                            height:20,
                            }}

                        imageStyle={{
                            width:20, 
                            height:20,
                            borderRadius: 140, 
                            top: 20,
                            }}
                    />

                    <ImageBackground
                        source={require('../../assets/rate.png')}
                        style={{
                            width:20, 
                            height:20,
                            }}

                        imageStyle={{
                            width:20, 
                            height:20,
                            borderRadius: 140, 
                            top: 20,
                            }}
                    />
                    <ImageBackground
                        source={require('../../assets/rate.png')}
                        style={{
                            width:20, 
                            height:20,
                            }}

                        imageStyle={{
                            width:20, 
                            height:20,
                            borderRadius: 140, 
                            top: 20,
                            }}
                    />
                    <ImageBackground
                        source={require('../../assets/rate.png')}
                        style={{
                            width:20, 
                            height:20,
                            }}

                        imageStyle={{
                            width:20, 
                            height:20,
                            borderRadius: 140, 
                            top: 20,
                            }}
                    />
                    <ImageBackground
                        source={require('../../assets/rate.png')}
                        style={{
                            width:20, 
                            height:20,
                            }}

                        imageStyle={{
                            width:20, 
                            height:20,
                            borderRadius: 140, 
                            top: 20,
                            }}
                    />
                    </View>

                    <Text> "Quando se mostra ao mundo e exibe 
                            os seus talentos, naturalmente desperta 
                            todo tipo de ressentimento, inveja e 
                            outras manifestações de insegurança."{'\n'}              
                            - Robert Greene</Text>
                    <Title style={{
                             
                            top: 20,
                            left: 80}}
                    >Nailton Vital</Title>
                    <SubTitle style={{     
                             top: 20,
                             left: 80}}>Full Stack Developer</SubTitle>

            </View>


            <View style={{
                            width:350, 
                            height:290,
                            borderRadius: 20, 
                            backgroundColor: '#2C2C2C',
                            marginLeft: '5%',
                            bottom: 30,
                            marginTop: 20
                            }}>
            <ImageBackground
                        source={require('../../assets/luccas.png')}
                        

                        imageStyle={{
                            width:60, 
                            height:60,
                            borderRadius: 140, 
                            top: 215,
                            left: 10}}
                    />

                    <View style={{flexDirection: 'row', marginLeft: '3%'}}>
                    <ImageBackground
                        source={require('../../assets/rate.png')}
                        style={{
                            width:20, 
                            height:20,
                            }}

                        imageStyle={{
                            width:20, 
                            height:20,
                            borderRadius: 140, 
                            top: 20,
                            }}
                    />

                    <ImageBackground
                        source={require('../../assets/rate.png')}
                        style={{
                            width:20, 
                            height:20,
                            }}

                        imageStyle={{
                            width:20, 
                            height:20,
                            borderRadius: 140, 
                            top: 20,
                            }}
                    />
                    <ImageBackground
                        source={require('../../assets/rate.png')}
                        style={{
                            width:20, 
                            height:20,
                            }}

                        imageStyle={{
                            width:20, 
                            height:20,
                            borderRadius: 140, 
                            top: 20,
                            }}
                    />
                    <ImageBackground
                        source={require('../../assets/rate.png')}
                        style={{
                            width:20, 
                            height:20,
                            }}

                        imageStyle={{
                            width:20, 
                            height:20,
                            borderRadius: 140, 
                            top: 20,
                            }}
                    />
                    <ImageBackground
                        source={require('../../assets/rate.png')}
                        style={{
                            width:20, 
                            height:20,
                            }}

                        imageStyle={{
                            width:20, 
                            height:20,
                            borderRadius: 140, 
                            top: 20,
                            }}
                    />
                    </View>

                    <Text> "Um dia azul, tenho um sonho 
                            Ir pra Cancún, viver longe
                            Todo mal dessa gente
                            Plantar um pé, colher e ser feliz
                            Hoje eu tenho andado bem distante
                            Dessa vida solta, dez mil na roupa
                            Vinte na bolsa
                            Pra minha moça, deixo ela solta"{'\n'}
                            - Teto</Text>
                    <Title style={{
                             
                            top: 20,
                            left: 80}}
                    >Luccas Anjos</Title>
                    <SubTitle style={{     
                             top: 20,
                             left: 80}}>Developer</SubTitle>

            </View>

            <View style={{
                            width:350, 
                            height:290,
                            borderRadius: 20, 
                            backgroundColor: '#2C2C2C',
                            marginLeft: '5%',
                            bottom: 30,
                            marginTop: 20
                            }}>
            <ImageBackground
                        source={require('../../assets/maicon.png')}
                        

                        imageStyle={{
                            width:60, 
                            height:60,
                            borderRadius: 140, 
                            top: 220,
                            left: 10}}
                    />

                    <View style={{flexDirection: 'row', marginLeft: '3%'}}>
                    <ImageBackground
                        source={require('../../assets/rate.png')}
                        style={{
                            width:20, 
                            height:20,
                            }}

                        imageStyle={{
                            width:20, 
                            height:20,
                            borderRadius: 140, 
                            top: 20,
                            }}
                    />

                    <ImageBackground
                        source={require('../../assets/rate.png')}
                        style={{
                            width:20, 
                            height:20,
                            }}

                        imageStyle={{
                            width:20, 
                            height:20,
                            borderRadius: 140, 
                            top: 20,
                            }}
                    />
                    <ImageBackground
                        source={require('../../assets/rate.png')}
                        style={{
                            width:20, 
                            height:20,
                            }}

                        imageStyle={{
                            width:20, 
                            height:20,
                            borderRadius: 140, 
                            top: 20,
                            }}
                    />
                    <ImageBackground
                        source={require('../../assets/rate.png')}
                        style={{
                            width:20, 
                            height:20,
                            }}

                        imageStyle={{
                            width:20, 
                            height:20,
                            borderRadius: 140, 
                            top: 20,
                            }}
                    />
                    <ImageBackground
                        source={require('../../assets/rate.png')}
                        style={{
                            width:20, 
                            height:20,
                            }}

                        imageStyle={{
                            width:20, 
                            height:20,
                            borderRadius: 140, 
                            top: 20,
                            }}
                    />
                    </View>

                    <Text> "Eu sou a continuação de um sonho
                            Da minha mãe do meu pai
                            De todos que vieram antes de mim
                            Eu sou a continuação de um sonho
                            Da minha vó, do meu vô
                            Quem sangrou pra gente poder sorrir"{'\n'}  
                            - BK</Text>
                    <Title style={{
                             
                            top: 20,
                            left: 80}}
                    >Maicon Oliveira</Title>
                    <SubTitle style={{     
                             top: 20,
                             left: 80}}>Full Stack Developer</SubTitle>

            </View>

            <View style={{
                            width:350, 
                            height:245,
                            borderRadius: 20, 
                            backgroundColor: '#2C2C2C',
                            marginLeft: '5%',
                            bottom: 30,
                            marginTop: 20
                            }}>
            <ImageBackground
                        source={require('../../assets/genu.png')}
                        

                        imageStyle={{
                            width:60, 
                            height:60,
                            borderRadius: 140, 
                            top: 170,
                            left: 10}}
                    />

                    <View style={{flexDirection: 'row', marginLeft: '3%'}}>
                    <ImageBackground
                        source={require('../../assets/rate.png')}
                        style={{
                            width:20, 
                            height:20,
                            }}

                        imageStyle={{
                            width:20, 
                            height:20,
                            borderRadius: 140, 
                            top: 20,
                            }}
                    />

                    <ImageBackground
                        source={require('../../assets/rate.png')}
                        style={{
                            width:20, 
                            height:20,
                            }}

                        imageStyle={{
                            width:20, 
                            height:20,
                            borderRadius: 140, 
                            top: 20,
                            }}
                    />
                    <ImageBackground
                        source={require('../../assets/rate.png')}
                        style={{
                            width:20, 
                            height:20,
                            }}

                        imageStyle={{
                            width:20, 
                            height:20,
                            borderRadius: 140, 
                            top: 20,
                            }}
                    />
                    <ImageBackground
                        source={require('../../assets/rate.png')}
                        style={{
                            width:20, 
                            height:20,
                            }}

                        imageStyle={{
                            width:20, 
                            height:20,
                            borderRadius: 140, 
                            top: 20,
                            }}
                    />
                    <ImageBackground
                        source={require('../../assets/rate.png')}
                        style={{
                            width:20, 
                            height:20,
                            }}

                        imageStyle={{
                            width:20, 
                            height:20,
                            borderRadius: 140, 
                            top: 20,
                            }}
                    />
                    </View>

                    <Text> "Nos sentindo melhor que os outros
                            Por ter mais coisas que os outros
                            Vê que o inimigo ganhou?
                            A gente se tornou tudo
                            Aquilo que sempre odiou"{'\n'}
                            -BK</Text>
                    <Title style={{
                             
                            top: 20,
                            left: 80}}
                    >Lucas Genú</Title>
                    <SubTitle style={{     
                             top: 20,
                             left: 80}}>Designer</SubTitle>

            </View>

            <View style={{
                            width:350, 
                            height:205,
                            borderRadius: 20, 
                            backgroundColor: '#2C2C2C',
                            marginLeft: '5%',
                            bottom: 30,
                            marginTop: 20
                            }}>
            <ImageBackground
                        source={require('../../assets/Campos.png')}
                        

                        imageStyle={{
                            width:60, 
                            height:60,
                            borderRadius: 140, 
                            top: 130,
                            left: 10}}
                    />

                    <View style={{flexDirection: 'row', marginLeft: '3%'}}>
                    <ImageBackground
                        source={require('../../assets/rate.png')}
                        style={{
                            width:20, 
                            height:20,
                            }}

                        imageStyle={{
                            width:20, 
                            height:20,
                            borderRadius: 140, 
                            top: 20,
                            }}
                    />

                    <ImageBackground
                        source={require('../../assets/rate.png')}
                        style={{
                            width:20, 
                            height:20,
                            }}

                        imageStyle={{
                            width:20, 
                            height:20,
                            borderRadius: 140, 
                            top: 20,
                            }}
                    />
                    <ImageBackground
                        source={require('../../assets/rate.png')}
                        style={{
                            width:20, 
                            height:20,
                            }}

                        imageStyle={{
                            width:20, 
                            height:20,
                            borderRadius: 140, 
                            top: 20,
                            }}
                    />
                    <ImageBackground
                        source={require('../../assets/rate.png')}
                        style={{
                            width:20, 
                            height:20,
                            }}

                        imageStyle={{
                            width:20, 
                            height:20,
                            borderRadius: 140, 
                            top: 20,
                            }}
                    />
                    <ImageBackground
                        source={require('../../assets/rate.png')}
                        style={{
                            width:20, 
                            height:20,
                            }}

                        imageStyle={{
                            width:20, 
                            height:20,
                            borderRadius: 140, 
                            top: 20,
                            }}
                    />
                    </View>

                    <Text> "Pra quem tem pensamento forte 
                            o impossível é só questão de opinião"{'\n'}
                            - Charlie Brown Jr</Text>
                    <Title style={{
                             
                            top: 20,
                            left: 80}}
                    >Guilherme Campos</Title>
                    <SubTitle style={{     
                             top: 20,
                             left: 80}}>Developer</SubTitle>

            </View>

            <View style={{
                            width:350, 
                            height:220,
                            borderRadius: 20, 
                            backgroundColor: '#2C2C2C',
                            marginLeft: '5%',
                            bottom: 30,
                            marginTop: 20
                            }}>
            <ImageBackground
                        source={require('../../assets/Vinicius.png')}
                        

                        imageStyle={{
                            width:60, 
                            height:60,
                            borderRadius: 140, 
                            top: 150,
                            left: 10}}
                    />

                    <View style={{flexDirection: 'row', marginLeft: '3%'}}>
                    <ImageBackground
                        source={require('../../assets/rate.png')}
                        style={{
                            width:20, 
                            height:20,
                            }}

                        imageStyle={{
                            width:20, 
                            height:20,
                            borderRadius: 140, 
                            top: 20,
                            }}
                    />

                    <ImageBackground
                        source={require('../../assets/rate.png')}
                        style={{
                            width:20, 
                            height:20,
                            }}

                        imageStyle={{
                            width:20, 
                            height:20,
                            borderRadius: 140, 
                            top: 20,
                            }}
                    />
                    <ImageBackground
                        source={require('../../assets/rate.png')}
                        style={{
                            width:20, 
                            height:20,
                            }}

                        imageStyle={{
                            width:20, 
                            height:20,
                            borderRadius: 140, 
                            top: 20,
                            }}
                    />
                    <ImageBackground
                        source={require('../../assets/rate.png')}
                        style={{
                            width:20, 
                            height:20,
                            }}

                        imageStyle={{
                            width:20, 
                            height:20,
                            borderRadius: 140, 
                            top: 20,
                            }}
                    />
                    <ImageBackground
                        source={require('../../assets/rate.png')}
                        style={{
                            width:20, 
                            height:20,
                            }}

                        imageStyle={{
                            width:20, 
                            height:20,
                            borderRadius: 140, 
                            top: 20,
                            }}
                    />
                    </View>

                    <Text> "A vida me ensinou a nunca desistir 
                            Nem ganhar, nem perder mas procurar evoluir"{'\n'}
                            - Charlie Brown Jr</Text>
                    <Title style={{
                             
                            top: 20,
                            left: 80}}
                    >Vinicius Ribeiro</Title>
                    <SubTitle style={{     
                             top: 20,
                             left: 80}}>Developer</SubTitle>

            </View>

            <View style={{
                            width:350, 
                            height:205,
                            borderRadius: 20, 
                            backgroundColor: '#2C2C2C',
                            marginLeft: '5%',
                            bottom: 30,
                            marginTop: 20
                            }}>
            <ImageBackground
                        source={require('../../assets/Ilan.png')}
                        

                        imageStyle={{
                            width:60, 
                            height:60,
                            borderRadius: 140, 
                            top: 130,
                            left: 10}}
                    />

                    <View style={{flexDirection: 'row', marginLeft: '3%'}}>
                    <ImageBackground
                        source={require('../../assets/rate.png')}
                        style={{
                            width:20, 
                            height:20,
                            }}

                        imageStyle={{
                            width:20, 
                            height:20,
                            borderRadius: 140, 
                            top: 20,
                            }}
                    />

                    <ImageBackground
                        source={require('../../assets/rate.png')}
                        style={{
                            width:20, 
                            height:20,
                            }}

                        imageStyle={{
                            width:20, 
                            height:20,
                            borderRadius: 140, 
                            top: 20,
                            }}
                    />
                    <ImageBackground
                        source={require('../../assets/rate.png')}
                        style={{
                            width:20, 
                            height:20,
                            }}

                        imageStyle={{
                            width:20, 
                            height:20,
                            borderRadius: 140, 
                            top: 20,
                            }}
                    />
                    <ImageBackground
                        source={require('../../assets/rate.png')}
                        style={{
                            width:20, 
                            height:20,
                            }}

                        imageStyle={{
                            width:20, 
                            height:20,
                            borderRadius: 140, 
                            top: 20,
                            }}
                    />
                    <ImageBackground
                        source={require('../../assets/rate.png')}
                        style={{
                            width:20, 
                            height:20,
                            }}

                        imageStyle={{
                            width:20, 
                            height:20,
                            borderRadius: 140, 
                            top: 20,
                            }}
                    />
                    </View>

                    <Text> “Os que vencem, não importa como vençam, 
                            nunca conquistam a vergonha”{'\n'}
                            - Nicolau Maquiavel</Text>
                    <Title style={{
                             
                            top: 20,
                            left: 80}}
                    >ilan Costa</Title>
                    <SubTitle style={{     
                             top: 20,
                             left: 80}}>Full Stack Developer</SubTitle>

            </View>

            <View style={{
                            width:350, 
                            height:290,
                            borderRadius: 20, 
                            backgroundColor: '#2C2C2C',
                            marginLeft: '5%',
                            bottom: 30,
                            marginTop: 20
                            }}>
            <ImageBackground
                        source={require('../../assets/goda.png')}
                        

                        imageStyle={{
                            width:60, 
                            height:60,
                            borderRadius: 140, 
                            top: 215,
                            left: 10}}
                    />

                    <View style={{flexDirection: 'row', marginLeft: '3%'}}>
                    <ImageBackground
                        source={require('../../assets/rate.png')}
                        style={{
                            width:20, 
                            height:20,
                            }}

                        imageStyle={{
                            width:20, 
                            height:20,
                            borderRadius: 140, 
                            top: 20,
                            }}
                    />

                    <ImageBackground
                        source={require('../../assets/rate.png')}
                        style={{
                            width:20, 
                            height:20,
                            }}

                        imageStyle={{
                            width:20, 
                            height:20,
                            borderRadius: 140, 
                            top: 20,
                            }}
                    />
                    <ImageBackground
                        source={require('../../assets/rate.png')}
                        style={{
                            width:20, 
                            height:20,
                            }}

                        imageStyle={{
                            width:20, 
                            height:20,
                            borderRadius: 140, 
                            top: 20,
                            }}
                    />
                    <ImageBackground
                        source={require('../../assets/rate.png')}
                        style={{
                            width:20, 
                            height:20,
                            }}

                        imageStyle={{
                            width:20, 
                            height:20,
                            borderRadius: 140, 
                            top: 20,
                            }}
                    />
                    <ImageBackground
                        source={require('../../assets/rate.png')}
                        style={{
                            width:20, 
                            height:20,
                            }}

                        imageStyle={{
                            width:20, 
                            height:20,
                            borderRadius: 140, 
                            top: 20,
                            }}
                    />
                    </View>

                    <Text> "Não importa o que você seja, quem você seja,
                            ou que deseja na vida, a ousadia em ser di ferente reflete 
                            na sua personalidade, no seu caráter, naquilo que você é. 
                            E é assim que as pessoas lembrarão de você um dia."{'\n'}
                            - Ayrton Senna</Text>
                    <Title style={{
                             
                            top: 20,
                            left: 80}}
                    >Maria Goda</Title>
                    <SubTitle style={{     
                             top: 20,
                             left: 80}}>Archivist</SubTitle>

            </View>
            

    

            </ScrollView>        
        </Container>
    )
}

export default AboutUs;