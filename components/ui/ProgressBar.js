import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

export default function ProgressBar({ progress }) {
    const animatedWidth = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const validProgress = isNaN(progress) ? 0 : progress;
        Animated.timing(animatedWidth, {
            toValue: validProgress,
            duration: 500,
            useNativeDriver: false,
        }).start();
    }, [progress]);

    const getProgressColor = (progress) => {
        if (progress < 30) return '#ff0000'
        if (progress < 70) return '#ff9800'
        return '#4caf50'
    };

    return (
        <View style={styles.container}>
            <Animated.View
                style={[
                    styles.progress,
                    {
                        width: animatedWidth.interpolate({
                            inputRange: [0, 100],
                            outputRange: ['0%', '100%'],
                        }),
                        backgroundColor: getProgressColor(progress),
                    },
                ]}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '80%',
        height: 30,
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
        overflow: 'hidden',
    },
    progress: {
        height: '100%',
    },
});

/*
            <Text style={styles.text}>{progress}%</Text>

                text: {
                    position: 'absolute',
                    width: '100%',
                    textAlign: 'center',
                    color: '#000',
                    },

                    plus jolie sans 
*/