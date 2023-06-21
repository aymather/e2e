import React from 'react'
import Config from 'react-native-config'
import {
    StyleSheet,
    View,
    Text,
    SafeAreaView
} from 'react-native'


const App = () => {

	console.log(Config)

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.text}>Hello World</Text>
				<Text style={styles.text}>ENV: {Config.ENV}</Text>
				<Text style={styles.text}>Api URL: {Config.API_URL}</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000'
    }
})

export default App