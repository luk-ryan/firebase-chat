import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home</Text>
        </View>
    )
}

export default Home

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