import { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { UsernameContext } from '../Context/Context';

export default function HomeScreen () {
    const [username] = useContext(UsernameContext)
    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Welcome !</Text>
            <Text style={styles.usernameText}>You are logged as {username}</Text>
            <View style={styles.classicTextContainer}>
                <Text style={styles.classicText}>🇫🇷 Cette app (faite en react-native) permet de faire des todolists pour tout est n'importe quoi </Text>
                <Text style={styles.classicText}>🇬🇧 This app (build with react-native) allows you to create todolists for anything and everything</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        paddingTop: 50, 
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    usernameText: {
        fontSize: 18,
    },
    classicTextContainer: {
        marginTop: 80,
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        maxWidth: '80%',
    },
    classicText: {
        fontSize: 16,
        marginVertical: 10,
    },
})