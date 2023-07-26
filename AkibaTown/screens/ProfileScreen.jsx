import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { getUserDataFromToken } from '../utils/jwt'

const ProfileScreen = () => {
    const [userData, setUserData] = React.useState({
        id: 0,
        username: "",
        firstname: "",
        lastname: "",
        email: "",
        favorite_anime: "",
        profile_picture: "",
    });

    React.useEffect(() => {
        const populateData = async () => {
            setUserData(await getUserDataFromToken());
        }

        populateData();
    }, [userData])

    return (
        <View>
            <Text>ProfileScreen</Text>
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({

})