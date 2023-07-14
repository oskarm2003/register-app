import { useEffect, useState } from "react";
import { View, Text, Alert, FlatList, Image } from "react-native";
import { delete_data, get_data } from "../functionality/net";
import MyButton from "./MyButton";

//personal user tress (based on its firmed characteristics ex. name, index)
const TREES = [require('../assets/cactus.png'), require('../assets/deciduous_tree.png'), require('../assets/evergreen_tree.png'), require('../assets/palm_tree.png')]
const personal_tree = (a, b) => {
    let seed = (a * b) % TREES.length
    return TREES[seed]
}

//user component for data formatting
const User = ({ index, name, timestamp, passwd, setContent, navigation }) => {

    let mytree = personal_tree(index, name.length)

    return (
        <View style={{ flexDirection: 'row', backgroundColor: '#ffffff', margin: 3, justifyContent: "space-between" }}>
            <View style={{ flexDirection: 'row', width: '40%', alignItems: 'center' }}>
                <Image style={{ width: 50, height: 50 }} source={mytree} />
                <Text style={{ marginLeft: 10, fontSize: 30, textAlignVertical: 'center', height: 50 }}>{index}. {name}</Text>
            </View>
            <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center', justifySelf: 'end' }}>
                <MyButton color='#339966' text='details' whenClick={() => { navigation.navigate('s3', { name: name, passwd: passwd, timestamp: timestamp, img_src: mytree }) }}></MyButton>
                <MyButton color='#ff5555' text='delete' whenClick={() => { onDelete(index, setContent) }}></MyButton>
            </View>
        </View>
    )
}

//on delete button click
const onDelete = async (index, setContent) => {

    let response = await delete_data(index)
    if (response == '200') {
        get_server_users(setContent)
    }
    else if (response == '404') {
        Alert.alert('Sorry, could not remove user. \nUser does not exist')
    }

}

//get users from server and display on screen
const get_server_users = async (setContent) => {

    let response = await get_data()
    setContent(JSON.parse(response))

}

//main screen component to display
const Screen2 = ({ navigation }) => {

    const [content, setContent] = useState('')

    useEffect(() => {
        get_server_users(setContent)
    }, [])

    const renderItem = ({ item }) => {
        <User index={item.index} name={item.name} timestamp={item.timestamp} passwd={item.passwd} />
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly', paddingTop: 20 }}>
            <MyButton color='#ffaa00' text='back to registering' whenClick={() => { navigation.navigate('s1') }} />
            <FlatList style={{ margin: 20, flex: 1, width: '100%' }} data={content} renderItem={({ item }) => <User index={item.index} name={item.name} timestamp={item.timestamp} passwd={item.passwd} setContent={setContent} navigation={navigation} />} />
        </View>
    )
}

export default Screen2;