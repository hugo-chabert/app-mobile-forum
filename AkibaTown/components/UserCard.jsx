import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { getUserDataFromToken } from '../utils/jwt'
import { getData } from '../utils/storage'
const profile_picture = require('../assets/images/profile/default_profile_icon.jpg')

const UserCard = () => {
    const [userData, setUserData] = React.useState({
        id: 0,
        username: "",
        firstname: "",
        lastname: "",
        email: "",
        role: "",
        favorite_anime: "",
        profile_picture: "",
    })

    React.useEffect(() => {
        async function populateUserData() {
            setUserData(await getUserDataFromToken())
        }
        populateUserData()
    }, []);

    return (
        <View>
            <Image 
                source={ profile_picture } 
                style={{ width: 100, height: 100, borderRadius: 50 }}
            />
            <Text>{userData.username}</Text>
        </View>
    )
}

export default UserCard

const styles = StyleSheet.create({
    container: {

    }
})