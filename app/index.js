import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const StartPage = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="gray" />
        </View>
    )
}

export default StartPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: "center",
        paddingTop: 40
    },
    title: {
        fontSize: 28
    }
})