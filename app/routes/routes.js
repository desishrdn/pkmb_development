import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { ClientScreen, SurveyScreen, TipsScreen } from '../screen/index'

function Route(){
    const Stack = createStackNavigator()
    
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="TipsScreen" component={TipsScreen} options={{ headerShown : false}} />
                <Stack.Screen name="ClientScreen" component={ClientScreen} options={{ headerShown : false}} />
                <Stack.Screen name="SurveyScreen" component={SurveyScreen} options={{ headerShown : false}} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default Route