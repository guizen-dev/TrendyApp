import React from 'react'
import { SubTitle, Title2, Image, Separador, Resultado, Twitter, View, Text, Container, Title, Hamburger, TouchableOpacity, ImageBackground, Google, Input}  from './styles'
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
import { ScrollView } from 'react-native-gesture-handler';
import { useEffect, useState, useRef } from "react";
import {Picker} from '@react-native-picker/picker';
import axios from 'axios';


const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

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




function TwitterTrendys( navigation ){

    const [results, setResults] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState();
    const pickerRef = useRef();

    const countryData = [
        "Select a country",
        "worldwide",
        "abu-dhabi",
        "acapulco",
        "accra",
        "adana",
        "adelaide",
        "aguascalientes",
        "ahmedabad",
        "ahsa",
        "albuquerque",
        "alexandria",
        "algeria",
        "algiers",
        "amman",
        "amritsar",
        "amsterdam",
        "ankara",
        "ansan",
        "antalya",
        "antipolo",
        "argentina",
        "athens",
        "atlanta",
        "auckland",
        "austin",
        "australia",
        "austria",
        "bahrain",
        "baltimore",
        "bandung",
        "bangalore",
        "bangkok",
        "barcelona",
        "barcelona_es",
        "barquisimeto",
        "barranquilla",
        "baton-rouge",
        "bekasi",
        "belarus",
        "belem",
        "belfast",
        "belgium",
        "belo-horizonte",
        "benin-city",
        "bergen",
        "berlin",
        "bhopal",
        "bilbao",
        "birmingham",
        "birmingham_us",
        "blackpool",
        "bogota",
        "bologna",
        "bordeaux",
        "boston",
        "bournemouth",
        "brasilia",
        "brazil",
        "bremen",
        "brest",
        "brighton",
        "brisbane",
        "bristol",
        "bucheon",
        "buenos-aires",
        "bursa",
        "busan",
        "cagayan-de-oro",
        "cairo",
        "calgary",
        "cali",
        "calocan",
        "campinas",
        "can-tho",
        "canada",
        "canberra",
        "cape-town",
        "caracas",
        "cardiff",
        "cebu-city",
        "changwon",
        "charlotte",
        "chelyabinsk",
        "chennai",
        "chiba",
        "chicago",
        "chihuahua",
        "chile",
        "cincinnati",
        "ciudad-guayana",
        "ciudad-juarez",
        "cleveland",
        "cologne",
        "colombia",
        "colorado-springs",
        "columbus",
        "concepcion",
        "cordoba",
        "cork",
        "coventry",
        "culiacan",
        "curitiba",
        "da-nang",
        "daegu",
        "daejeon",
        "dallas-ft.-worth",
        "dammam",
        "darwin",
        "davao-city",
        "delhi",
        "den-haag",
        "denmark",
        "denver",
        "depok",
        "derby",
        "detroit",
        "diyarbakir",
        "dnipropetrovsk",
        "dominican-republic",
        "donetsk",
        "dortmund",
        "dresden",
        "dubai",
        "dublin",
        "durban",
        "dusseldorf",
        "ecatepec-de-morelos",
        "ecuador",
        "edinburgh",
        "edmonton",
        "egypt",
        "el-paso",
        "eskisehir",
        "essen",
        "faisalabad",
        "fortaleza",
        "france",
        "frankfurt",
        "fresno",
        "fukuoka",
        "galway",
        "gaziantep",
        "gdansk",
        "geneva",
        "genoa",
        "germany",
        "ghana",
        "giza",
        "glasgow",
        "goiania",
        "gomel",
        "gothenburg",
        "goyang",
        "greece",
        "greensboro",
        "grodno",
        "guadalajara",
        "guarulhos",
        "guatemala",
        "guatemala-city",
        "guayaquil",
        "gwangju",
        "hai-phong",
        "haifa",
        "hamamatsu",
        "hamburg",
        "hanoi",
        "harrisburg",
        "hermosillo",
        "hiroshima",
        "ho-chi-minh-city",
        "honolulu",
        "houston",
        "hull",
        "hulu-langat",
        "hyderabad",
        "ibadan",
        "incheon",
        "india",
        "indianapolis",
        "indonesia",
        "indore",
        "ipoh",
        "ireland",
        "irkutsk",
        "israel",
        "istanbul",
        "italy",
        "izmir",
        "jackson",
        "jacksonville",
        "jaipur",
        "jakarta",
        "japan",
        "jeddah",
        "jerusalem",
        "johannesburg",
        "johor-bahru",
        "jordan",
        "kaduna",
        "kajang",
        "kano",
        "kanpur",
        "kansas-city",
        "karachi",
        "kawasaki",
        "kayseri",
        "kazan",
        "kenya",
        "khabarovsk",
        "kharkiv",
        "kitakyushu",
        "klang",
        "kobe",
        "kolkata",
        "konya",
        "korea",
        "krakow",
        "krasnodar",
        "krasnoyarsk",
        "kuala-lumpur",
        "kumamoto",
        "kumasi",
        "kuwait",
        "kyiv",
        "kyoto",
        "lagos",
        "lahore",
        "las-palmas",
        "las-vegas",
        "latvia",
        "lausanne",
        "lebanon",
        "leeds",
        "leicester",
        "leipzig",
        "leon",
        "lille",
        "lima",
        "liverpool",
        "lodz",
        "london",
        "long-beach",
        "los-angeles",
        "louisville",
        "lucknow",
        "lviv",
        "lyon",
        "madrid",
        "makassar",
        "makati",
        "malaga",
        "malaysia",
        "manaus",
        "manchester",
        "manila",
        "maracaibo",
        "maracay",
        "marseille",
        "maturin",
        "mecca",
        "medan",
        "medellin",
        "medina",
        "melbourne",
        "memphis",
        "mendoza",
        "merida",
        "mersin",
        "mesa",
        "mexicali",
        "mexico",
        "mexico-city",
        "miami",
        "middlesbrough",
        "milan",
        "milwaukee",
        "minneapolis",
        "minsk",
        "mombasa",
        "monterrey",
        "montpellier",
        "montreal",
        "morelia",
        "moscow",
        "multan",
        "mumbai",
        "munich",
        "murcia",
        "muscat",
        "nagoya",
        "nagpur",
        "nairobi",
        "nantes",
        "naples",
        "nashville",
        "naucalpan-de-juarez",
        "netherlands",
        "new-haven",
        "new-orleans",
        "new-york",
        "new-zealand",
        "newcastle",
        "nezahualcoyotl",
        "nigeria",
        "niigata",
        "nizhny-novgorod",
        "norfolk",
        "norway",
        "nottingham",
        "novosibirsk",
        "odesa",
        "okayama",
        "okinawa",
        "oklahoma-city",
        "omaha",
        "oman",
        "omsk",
        "orlando",
        "osaka",
        "oslo",
        "ottawa",
        "pakistan",
        "palembang",
        "palermo",
        "palma",
        "panama",
        "paris",
        "pasig",
        "patna",
        "pekanbaru",
        "perm",
        "perth",
        "peru",
        "petaling",
        "philadelphia",
        "philippines",
        "phoenix",
        "pittsburgh",
        "plymouth",
        "poland",
        "port-elizabeth",
        "port-harcourt",
        "portland",
        "porto-alegre",
        "portsmouth",
        "portugal",
        "poznan",
        "preston",
        "pretoria",
        "providence",
        "puebla",
        "puerto-rico",
        "pune",
        "qatar",
        "quebec",
        "queretaro",
        "quezon-city",
        "quito",
        "rajkot",
        "raleigh",
        "ranchi",
        "rawalpindi",
        "recife",
        "rennes",
        "richmond",
        "riga",
        "rio-de-janeiro",
        "riyadh",
        "rome",
        "rosario",
        "rostov-on-don",
        "rotterdam",
        "russia",
        "sacramento",
        "sagamihara",
        "saint-petersburg",
        "saitama",
        "salt-lake-city",
        "saltillo",
        "salvador",
        "samara",
        "san-antonio",
        "san-diego",
        "san-francisco",
        "san-jose",
        "san-luis-potosi",
        "santiago",
        "santo-domingo",
        "sao-luis",
        "sao-paulo",
        "sapporo",
        "saudi-arabia",
        "seattle",
        "semarang",
        "sendai",
        "seongnam",
        "seoul",
        "seville",
        "sharjah",
        "sheffield",
        "singapore",
        "south-africa",
        "soweto",
        "spain",
        "srinagar",
        "st.-louis",
        "stockholm",
        "stoke-on-trent",
        "strasbourg",
        "stuttgart",
        "surabaya",
        "surat",
        "suwon",
        "swansea",
        "sweden",
        "switzerland",
        "sydney",
        "taguig",
        "takamatsu",
        "tallahassee",
        "tampa",
        "tangerang",
        "tel-aviv",
        "thailand",
        "thane",
        "thessaloniki",
        "tijuana",
        "tokyo",
        "toluca",
        "toronto",
        "toulouse",
        "tucson",
        "turin",
        "turkey",
        "turmero",
        "ufa",
        "ukraine",
        "ulsan",
        "united-arab-emirates",
        "united-kingdom",
        "united-states",
        "utrecht",
        "valencia",
        "valencia_es",
        "valparaiso",
        "vancouver",
        "venezuela",
        "vienna",
        "vietnam",
        "virginia-beach",
        "vladivostok",
        "volgograd",
        "voronezh",
        "warsaw",
        "washington",
        "winnipeg",
        "wroclaw",
        "yekaterinburg",
        "yokohama",
        "yongin",
        "zamboanga-city",
        "zapopan",
        "zaporozhye",
        "zaragoza",
        "zurich",
    ];

    
    const handleSearch = (selectedCountry) => {
        axios
        .get(`https://keikoapp.herokuapp.com/twitter?country=${selectedCountry}`)
        .then((response) => {
            setResults(response.data.tweet);
        })
        .catch((err) => {
            console.log(err)
        });
    };

    selectedCountry ? handleSearch(selectedCountry) : null



    function open() {
        pickerRef.current.focus();
    }
      
      function close() {
        pickerRef.current.blur();
    }

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
            <Feather onPress={() => navigation.navigate('TrendScreen')} name="arrow-left" size={30} color="white" />
            </View>   

            <View style={{flexDirection:'row', margin: 30, alignItems: 'center'}}>
                    <Title>Twitter</Title>
                    <Twitter style={{marginLeft: 10, marginTop:5}}><Icon name="twitter" size={30} color="white" /></Twitter>
            </View>  

            <View>
                <Title2 style={{marginBottom: 10, marginLeft: 30}}>Twitter Trending Topics</Title2>
            </View>

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
                item.replace("-", " ")
                return(
                    <Picker.Item label={item} value={item}/>
                )
            })}
            </Picker>

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
                <Text style={{color:'#FFF', marginLeft: 30, fontWeight: 'bold'}}>
                        Count
                </Text>
                <Text style={{color:'#FFF', marginLeft: 60, fontWeight: 'bold'}}>
                        Trend Name
                </Text>
                </Separador>
                </Resultado>
                ) : null
            }

                {
                    results.length > 0 ? (
                        results.map((item)=>{
                            return(
                                <Resultado>
                                    <Separador>
                                        <Text style={{color:'#FFF', marginLeft: 30}}>
                                            {item.count}
                                        </Text>
                                        <Text style={{color:'#FFF', marginLeft: 60}}>
                                            {item.trend}
                                        </Text>
                                    </Separador>
                                </Resultado>
                            )
                        })
                    ) : (
                        <View>
                        <SubTitle style={{margin: 30, marginTop: 220}}>
                            Select a country and explore top trending topics on Twitter
                        </SubTitle>
                        </View>
                    )
                }


                </ScrollView>
        </Container>
        
         
        
    )
}

export default TwitterTrendys;