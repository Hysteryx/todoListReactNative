import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TodoListScreen from '../Screen/TodoListScreen'
import TodoDetailsScreen from '../Screen/TodoDetailsScreen'

const Stack = createNativeStackNavigator()

export default function TodoListStack() {
    return (
        <Stack.Navigator initialRouteName="TodoList">
            <Stack.Screen name="List" component={TodoListScreen} />
            <Stack.Screen name="Details" component={TodoDetailsScreen} options={{ title: 'Détails de la Tâche' }} />
        </Stack.Navigator>
    )
}