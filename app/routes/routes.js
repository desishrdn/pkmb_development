import React from 'react'
import {useNavigation,NavigationContainer, StackActions} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {Home, BackTest} from '../index'

function Route(){
    const Stack = createStackNavigator()
    
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="home" component={Home} options={{ headerShown : false}} />
                <Stack.Screen name="backtest" component={BackTest} options={{ headerShown : false}} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default Route