import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TokenContext } from '../Context/Context'

import HomeScreen from '../Screen/HomeScreen'
import SignOutScreen from '../Screen/SignOutScreen'
import SignInScreen from '../Screen/SignInScreen'
import SignUpScreen from '../Screen/SignUpScreen'

import TodoListStack from './TodoListStack'

const Tab = createBottomTabNavigator()

export default function Navigation() {
    return (
        <TokenContext.Consumer>
            {([token, setToken]) => (
                <NavigationContainer>
                    {token == null ? (
                        <Tab.Navigator>
                            <Tab.Screen name='Sign In' component={SignInScreen} />
                            <Tab.Screen name='Sign Up' component={SignUpScreen} />
                        </Tab.Navigator>
                    ) : (
                        <Tab.Navigator>
                            <Tab.Screen name='Home' component={HomeScreen} />
                            <Tab.Screen name='TodoLists' component={TodoListStack} />
                            <Tab.Screen name='Sign Out' component={SignOutScreen} />
                        </Tab.Navigator>
                    )}
                </NavigationContainer>
            )}
        </TokenContext.Consumer>
    )
}