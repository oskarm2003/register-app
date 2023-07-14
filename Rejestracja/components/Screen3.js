import { Text, View, Image } from "react-native";

//timestamp prettiefier
const format_timestamp = (timestamp) => {

    let parts = timestamp.split(':')
    parts[0] = parts[0].split(' ')
    parts[0][4] = parts[0][4].length == 1 ? '0' + parts[0][4] : parts[0][4]
    parts[1] = parts[1].length == 1 ? '0' + parts[1] : parts[1]
    parts[2] = parts[2].length == 1 ? '0' + parts[2] : parts[2]

    return `${parts[0]}`.replaceAll(',', ' ') + ':' + parts[1] + ':' + parts[2]

}

//main moduele to display
const Screen3 = ({ route }) => {
    return (<>
        <View style={{ flex: 2, backgroundColor: '#55dd88', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 50, color: 'white', fontWeight: 'bold' }}>Info about</Text>
            <Text style={{ fontSize: 50, color: '#339966', fontWeight: 'bold' }}>{route.params.name}</Text>
            <Image style={{ width: 80, height: 80 }} source={route.params.img_src} />
        </View>
        <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#339966' }}>name:</Text>
            <Text style={{ fontSize: 30, fontStyle: 'italic', color: '#7f7f7f' }}>{route.params.name}{'\n'}</Text>
            <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#339966' }}>password (so secret):</Text>
            <Text style={{ fontSize: 30, fontStyle: 'italic', color: '#7f7f7f' }}>{route.params.passwd}{'\n'}</Text>
            <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#339966' }}>account created on: </Text>
            <Text style={{ fontSize: 30, fontStyle: 'italic', color: '#7f7f7f' }}>{format_timestamp(route.params.timestamp)}{'\n'}</Text>
        </View>
    </>)
}

export default Screen3;