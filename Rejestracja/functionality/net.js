import { Alert } from "react-native"

const server_address = 'http://192.168.1.13:3000/'

export const post_data = async (data) => {

    let options = {
        method: 'POST',
        body: JSON.stringify(data)
    }

    let response = await fetch(server_address, options)

    if (!response.ok) {
        return false
    }
    return response.text()

}

export const get_data = async () => {

    let options = { method: 'GET' }

    let response = await fetch(server_address, options)

    if (!response.ok) {
        return false
    }
    return response.text()
}

export const delete_data = async (data) => {

    let options = { method: 'DELETE', body: JSON.stringify(data) }

    let response = await fetch(server_address, options)

    if (!response.ok) {
        return false
    }
    return response.text()

}