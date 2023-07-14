import { Text, View, TouchableOpacity } from "react-native"

const MyButton = ({ text, whenClick, color }) => {

    return (
        <TouchableOpacity onPress={() => { whenClick() }}>
            <View style={{ backgroundColor: color, padding: 10, borderRadius: 10, margin: 2 }}>
                <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>{text}</Text>
            </View>
        </TouchableOpacity>
    )

}

export default MyButton