import React from 'react'
import { ClientList } from '../content/index'
import { HeaderBox, FooterBox } from '../layout/index'
import { View, Text } from 'react-native'

export default function ClientScreen() {
    return(
        <View style={{flex: 1}}>
            <HeaderBox></HeaderBox>
            <ClientList></ClientList>
        </View>
    )
}