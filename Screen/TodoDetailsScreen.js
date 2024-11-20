import React, { useContext, useState, useEffect } from "react"
import { View, StyleSheet } from "react-native"

import Todolist from "../components/ui/TodoList"
import { getTodos } from "../components/api/todo"

import { TokenContext } from '../Context/Context'

export default function TodoDetailsScreen({ route, navigation }) {
    const [token] = useContext(TokenContext)

    const [todos, setTodos] = useState([])

    useEffect(() => { //because react don't want async on the global function -_-
        async function fetchTodos() {
            let fetchedTodos = await getTodos(route.params.id, token)
            setTodos(fetchedTodos.map(todo => ({ ...todo })))
        }

        fetchTodos()
    }, [route.params.id, token])

    return (
        <View style={styles.container}>
            <Todolist
                data={todos}
                listId={route.params.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
    },
})