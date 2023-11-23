import Feather from 'react-native-vector-icons/Feather'
import React from 'react';
import { View, TouchableOpacity, TextNotification, HashtagTextComponent } from './styles'

export default function NotificationComponent(props){{
    return(
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
                style={{
                    width: 45,
                    height: 45,
                    borderRadius: 50,
                    backgroundColor: '#6541F5',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginVertical: 10,
                }}
                >
                <Feather name="info" color="white" size={30}/>
            </TouchableOpacity>
            <View style={{flexDirection: 'row', marginLeft: 10}}>
                <TextNotification>{props.title}</TextNotification>
                <HashtagTextComponent>is now on trend!</HashtagTextComponent>
            </View>
        </View>
        )
    };
}