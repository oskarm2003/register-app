import { Text, View, KeyboardAvoidingView, TextInput, Alert, Platform } from "react-native"
import MyButton from "./MyButton"
import { post_data } from "../functionality/net"
import { useState } from "react"

//some fancy styles
const styles = {
    view1: {
        flex: 2,
        backgroundColor: '#55dd88',
        justifyContent: 'center',
        alignItems: 'center'
    },
    view2: {
        flex: 3,
        bakcgroundColor: 'efefef',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'column'
    },
    textInput: {
        textAlign: 'center',
        fontSize: 20,
        padding: 5,
        width: '55%',
        borderBottomWidth: 1,
        borderColor: '#cfcfcf',
        transition: 'all 0.5ms'
    }
}

//main screen component to display
const Screen1 = ({ navigation }) => {

    const [nameColor, setNameColor] = useState('#cfcfcf')
    const [passwdColor, setPasswdColor] = useState('#cfcfcf')

    let name = ''
    let passwd = ''

    return (<KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <View style={styles.view1}>
            <Text style={{ fontSize: 50, color: '#ffffff', textAlign: 'center', fontWeight: 'bold' }}>Register App</Text>
            <Text style={{ fontSize: 30, color: '#339966', textAlign: 'center' }}>Happy registering!</Text>
        </View>
        <View style={styles.view2}>
            <Text style={{ fontSize: 25 }}>Please register 👉👈</Text>
            <TextInput style={styles.textInput} placeholderTextColor={nameColor} placeholder='username' underlineColorAndroid='black' onChangeText={text => name = text}></TextInput>
            <TextInput style={styles.textInput} placeholderTextColor={passwdColor} placeholder='password (very secret)' underlineColorAndroid='black' onChangeText={text => passwd = text}></TextInput>
            <MyButton text="REGISTER!" color='#ffaa00' whenClick={() => { register_attempt(name, passwd, navigation, setNameColor, setPasswdColor) }} />
        </View>
    </KeyboardAvoidingView>)
}

//attemps to register and if so, goes to the second page
const register_attempt = async (name, passwd, navigation, setNameColor, setPasswdColor) => {

    if (name == '' || passwd == '') {
        if (name == '') {
            setNameColor('#cf2f2f')
        }
        if (passwd == '') {
            setPasswdColor('#cf2f2f')
        }
        return 0
    }

    let response = await post_data({ name: name, passwd: passwd, timestamp: get_formatted_date() })

    if (response == '200') {
        navigation.navigate('s2')
    }
    else if (response == '403') {
        Alert.alert('User already exists \nPlease insert different name')
    }

}

//gets current date
const get_formatted_date = () => {
    let output = ''
    let date = new Date()
    output += date.toDateString() + ' '
    output += date.getHours() + ':'
    output += date.getMinutes() + ':'
    output += date.getSeconds()
    return output
}

export default Screen1;