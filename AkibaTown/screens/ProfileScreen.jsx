import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { getUserDataFromToken } from '../utils/jwt'
import UserCard from '../components/UserCard.jsx'
import { deleteData, getData } from '../utils/storage'


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


    return (
        <View>
            <UserCard />

            <Button
                title='Logout'
                onPress={async () => {
                    deleteData('token')
                    console.log(await getData('token'))
                }}
            />
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({

})