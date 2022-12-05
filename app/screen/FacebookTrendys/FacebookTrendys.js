import React from 'react'
import { ScrollView, Image, Input, Inp, ButtonSubmit, Resultado, Separador, SubTitle, Google, Facebook, Title2, View, Text, Container, Title, Hamburger, TouchableOpacity, ImageBackground}  from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather'
 import { useFonts } from 'expo-font';
 import Carousel from 'react-native-snap-carousel';
 import Pagination from 'react-native-snap-carousel';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {LinearGradient} from 'expo-linear-gradient'
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'
import {Picker} from '@react-native-picker/picker';
import axios from 'axios';
import { useEffect, useState, useRef } from "react";
import { keyword } from 'color-convert';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator()

const lastNewsData = [
    {
        image: 'https://cdn.discordapp.com/attachments/963977573241602138/1038658104537124924/mano.webp'
    },
    {
        image: 'https://cdn.discordapp.com/attachments/963977573241602138/1038658104537124924/mano.webp'
    },
    {
        image: 'https://cdn.discordapp.com/attachments/963977573241602138/1038658104537124924/mano.webp'
    }
];


function FacebookTrendys( navigation ){

    const [selectedCountry, setSelectedCountry] = useState();
    const [results, setResults] = useState([]);
    const [value, setValue] = useState("");
    const [keyword, setKeyword] = useState([]);

    const pickerRef = useRef();

    const countryData = [
        { code: '', country: 'Select a country'},
        { code: "af_ZA", country: "Afrikaans 🇿🇦 " },
        { code: "gn_PY", country: "Guaraní" },
        { code: "ay_BO", country: "Aymara" },
        { code: "az_AZ", country: "Azeri" },
        { code: "id_ID", country: "Indonesian 🇮🇩 " },
        { code: "ms_MY", country: "Malay 🇲🇾 " },
        { code: "jv_ID", country: "Javanese 🇮🇩 " },
        { code: "bs_BA", country: "Bosnian 🇧🇦 " },
        { code: "ca_ES", country: "Catalan" },
        { code: "cs_CZ", country: "Czech" },
        { code: "ck_US", country: "Cherokee" },
        { code: "cy_GB", country: "Welsh" },
        { code: "da_DK", country: "Danish 🇩🇰" },
        { code: "se_NO", country: "Northern Sámi" },
        { code: "de_DE", country: "German 🇩🇪" },
        { code: "et_EE", country: "Estonian 🇪🇪" },
        { code: "en_IN", country: "🇮🇳 English (India)" },
        { code: "en_GB", country: "English (UK) 🇬🇧" },
        { code: "en_UD", country: "English (Upside Down) 🇺🇸 " },
        { code: "en_US", country: "English (US) 🇺🇸" },
        { code: "es_LA", country: "Spanish 🇱🇦" },
        { code: "es_CL", country: "Spanish (Chile) 🇨🇱" },
        { code: "es_CO", country: "Spanish (Colombia) 🇨🇴" },
        { code: "es_ES", country: "Spanish (Spain) 🇪🇸" },
        { code: "es_MX", country: "Spanish (Mexico) 🇲🇽" },
        { code: "es_VE", country: "Spanish (Venezuela) 🇻🇪" },
        { code: "eo_EO", country: "Esperanto 🇪🇪" },
        { code: "tl_PH", country: "Filipino 🇵🇭" },
        { code: "fr_FR", country: "French (France) 🇫🇷" },
        { code: "fr_CA", country: "French (Canada) 🇨🇦" },
        { code: "ga_IE", country: "Irish 🇮🇪" },
        { code: "gl_ES", country: "Galician" },
        { code: "ko_KR", country: "Korean 🇰🇷 " },
        { code: "hr_HR", country: "Croatian" },
        { code: "xh_ZA", country: "Xhosa" },
        { code: "zu_ZA", country: "Zulu" },
        { code: "is_IS", country: "Icelandic" },
        { code: "it_IT", country: "Italian 🇮🇹" },
        { code: "ka_GE", country: "Georgian" },
        { code: "sw_KE", country: "Swahili" },
        { code: "tl_ST", country: "Klingon" },
        { code: "ku_TR", country: "Kurdish" },
        { code: "lv_LV", country: "Latvian" },
        { code: "fb_LT", country: "Leet Speak" },
        { code: "lt_LT", country: "Lithuanian" },
        { code: "li_NL", country: "Limburgish" },
        { code: "la_VA", country: "Latin" },
        { code: "hu_HU", country: "Hungarian" },
        { code: "mg_MG", country: "Malagasy" },
        { code: "mt_MT", country: "Maltese" },
        { code: "nl_NL", country: "Dutch" },
        { code: "nl_BE", country: "Dutch (België)" },
        { code: "ja_JP", country: "Japanese 🇯🇵" },
        { code: "nb_NO", country: "Norwegian (bokmal)" },
        { code: "nn_NO", country: "Norwegian (nynorsk)" },
        { code: "uz_UZ", country: "Uzbek" },
        { code: "pl_PL", country: "Polish" },
        { code: "pt_BR", country: "Portuguese (Brazil) 🇧🇷" },
        { code: "pt_PT", country: "Portuguese (Portugal) 🇵🇹" },
        { code: "qu_PE", country: "Quechua" },
        { code: "ro_RO", country: "Romanian" },
        { code: "rm_CH", country: "Romansh" },
        { code: "ru_RU", country: "Russian" },
        { code: "sq_AL", country: "Albanian" },
        { code: "sk_SK", country: "Slovak" },
        { code: "sl_SI", country: "Slovenian" },
        { code: "so_SO", country: "Somali" },
        { code: "fi_FI", country: "Finnish" },
        { code: "sv_SE", country: "Swedish" },
        { code: "th_TH", country: "Thai 🇹🇭" },
        { code: "vi_VN", country: "Vietnamese" },
        { code: "tr_TR", country: "Turkish" },
        { code: "zh_CN", country: "Simplified Chinese (China) 🇨🇳" },
        { code: "zh_TW", country: "Traditional Chinese (Taiwan) 🇹🇼 " },
        { code: "zh_HK", country: "Traditional Chinese (Hong Kong) 🇭🇰 " },
        { code: "el_GR", country: "Greek 🇬🇷 " },
        { code: "gx_GR", country: "Classical Greek 🇬🇷 " },
        { code: "be_BY", country: "Belarusian" },
        { code: "bg_BG", country: "Bulgarian" },
        { code: "kk_KZ", country: "Kazakh" },
        { code: "mk_MK", country: "Macedonian" },
        { code: "mn_MN", country: "Mongolian 🇲🇳 " },
        { code: "sr_RS", country: "Serbian 🇷🇸 " },
        { code: "tt_RU", country: "Tatar" },
        { code: "tg_TJ", country: "Tajik" },
        { code: "uk_UA", country: "Ukrainian 🇺🇦 " },
        { code: "hy_AM", country: "Armenian 🇦🇲 " },
        { code: "yi_DE", country: "Yiddish" },
        { code: "he_IL", country: "Hebrew" },
        { code: "ur_PK", country: "Urdu" },
        { code: "ar_AR", country: "Arabic" },
        { code: "ps_AF", country: "Pashto" },
        { code: "fa_IR", country: "Persian" },
        { code: "sy_SY", country: "Syriac" },
        { code: "ne_NP", country: "Nepali" },
        { code: "mr_IN", country: "Marathi" },
        { code: "sa_IN", country: "Sanskrit" },
        { code: "hi_IN", country: "Hindi 🇮🇳" },
        { code: "bn_IN", country: "Bengali" },
        { code: "pa_IN", country: "Punjabi" },
        { code: "gu_IN", country: "Gujarati" },
        { code: "ta_IN", country: "Tamil" },
        { code: "te_IN", country: "Telugu" },
        { code: "kn_IN", country: "Kannada" },
        { code: "ml_IN", country: "Malayalam" },
        { code: "km_KH", country: "Khmer" },
    ];
    
    const handleSearch = (keyword, selectedCountry) => {
        axios
          .get(`https://keikoapp.herokuapp.com/interests?query=${keyword}&country=${selectedCountry}`)
          .then((response) => {
            setResults(response.data)
          })
          .catch((err) => {
            console.log(err)
          });
    };

    //handleSearch(value, selectedCountry);

    function open() {
        pickerRef.current.focus();
    }
      
    function close() {
        pickerRef.current.blur();
    }

    const formatNumber = (n) => {
        if (n < 1e3) return n;
        if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
        if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
        if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
        if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
      };

    function renderItem({ item }){
        return(
            <View style={{justifyContent: 'center',}}>
                    <Text style={{color:'white', fontWeight: 'bold'}}>{item.title}</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('MovieDetail')}>
                    <Image style={{width:'90%', height:200, borderRadius: 10 }} source={{uri: `${item.image}`}} />
                    </TouchableOpacity>
            </View>
        );
    }

    return(
        
        
        
        <Container style={{flex:1,backgroundColor:'#16293E', }}>
            <ScrollView>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20, marginLeft: 20, position: 'relative'}}>
            <Feather onPress={() => navigation.navigate('Homepage')} name="arrow-left" size={30} color="white" />
            </View>   

            <View style={{flexDirection:'row', margin: 30, alignItems: 'center'}}>
                    <Title>Facebook</Title>
                    <Facebook style={{marginLeft: 10, marginTop:5}}><Icon name="facebook" size={30} color="white" /></Facebook>
            </View>  

            <View>
                <Title2 style={{marginBottom: 10, marginLeft: 30}}>Facebook ADS Interests</Title2>
            </View>


            <View>
            <Inp
                placeholderTextColor="grey"
                secureTextEntry={false}
                placeholder="Type a keyword"
                onChangeText={setKeyword}
                value={keyword}    
            >
            </Inp>

            </View>
            <View>
                <Picker
                    style={{backgroundColor:'#1F334D', fontSize:'20px', fontWeight:700, margin: 30, color:'#FFF', borderRadius: '30px'}}
                    ref={pickerRef}
                    selectedValue={selectedCountry}
                    onValueChange={(itemValue, itemIndex) =>
                    {
                        setSelectedCountry(itemValue)
                    }
                }>
                {countryData.map((item)=>{
                    return(
                        <Picker.Item label={item.country} value={item.code}/>
                    )
                })}
                </Picker>
            </View>    
            <View style={{alignItems: 'center', marginBottom: 20}}>
            <ButtonSubmit onPress={() => handleSearch(keyword, selectedCountry)}>               
                <Title2>
                    Search
                </Title2>
            </ButtonSubmit>       
            </View>
            {
                results.length > 0 ? (
                <Title2 style={{marginLeft: 30, marginBottom: 10}}>
                    {results.length} results found
                </Title2>
                ) : null
            }
            {
                results.length > 0 ? (
            <Resultado>
                <Separador>
                <Text style={{color:'#FFF', marginLeft: 15, fontWeight: 'bold', marginTop: 15}}>
                        Audience Size
                </Text>
                <View>    
                <Text style={{color:'#FFF', marginLeft: 60, fontWeight: 'bold', marginTop: 7}}>
                        Name
                </Text>
                <Text style={{color:'#FFF', marginLeft: 60, marginTop: 2}}>
                        Topic
                </Text>
                </View>
                </Separador>
            </Resultado>
                ) : null
            }
            {
                results.length > 0 ? (
                    results.map((item, index)=>{
                        return(
                            <Resultado>
                                <Separador>
                                    <Text style={{color: '#FFF', marginLeft: 15}}>
                                        {formatNumber(item.audience_size_upper_bound)}
                                    </Text>
                                    <View>
                                    <Text style={{color:'#FFF', marginLeft: 110}}>
                                        {item.name}
                                    </Text>
                                    <Text style={{marginLeft: 60, marginLeft: 110}}>
                                        {item.topic}
                                    </Text>
                                    </View>
                                </Separador>
                            </Resultado>
                        )
                    })
                ) : (
                    <View>
                        <SubTitle style={{margin: 30, marginTop: 220}}>
                            Insert a keyword and explore.
                        </SubTitle>
                    </View>
                )
            }
            
        </ScrollView>
        </Container>
        
         
        
    )
}

export default FacebookTrendys;