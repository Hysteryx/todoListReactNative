import React, { useEffect, useState, useContext } from "react"
import { View, StyleSheet } from "react-native"

import { UsernameContext, TokenContext } from "../Context/Context"
import Input from "../components/ui/Input"
import { getTodoLists, deleteTodoList } from "../components/api/todoList"

import TodoLists from "../components/ui/TodoLists"


export default function TodoListScreen({ navigation, route }) {

    const [username] = useContext(UsernameContext)
    const [token] = useContext(TokenContext)

    const [todoList, setTodoList] = useState([])

    useEffect(() => {
        getTodoLists(username, token).then(todoLists => {
            setTodoList(todoLists)
        })
    })

    const itemHandler = (id) => {
        setTodoList(todoList.filter((item) => {
            item.id !== id 
        }))
        deleteTodoList(id, token)
    }

    return (
        <View style={styles.container}>
            <Input />
            <TodoLists data={todoList} delete={itemHandler} navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
        display: 'grid',
        gridTemplateRows: '1fr',
        padding: 10,
    },
})