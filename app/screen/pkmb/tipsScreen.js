import React from 'react'
import { HeaderBox, FooterBox } from '../layout/index'
import { TipsPage } from '../content/index'
import { View, Text } from 'react-native'

export default function TipsScreen() {
    return(
        <View style={{flex: 1}}>
        <HeaderBox></HeaderBox>
            <TipsPage/>
        </View>
    )
}