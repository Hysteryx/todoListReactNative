import React from "react"

import {StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'

export default function Item(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.title}</Text>
            <TouchableOpacity onPress={props.delete}>
                <Image source={require('../../assets/trash-can-outline.png')} style={{ height: 24, width: 24 }} />
            </TouchableOpacity>
        </View>
    )
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    text: {
        fontSize: 16,
    }
})