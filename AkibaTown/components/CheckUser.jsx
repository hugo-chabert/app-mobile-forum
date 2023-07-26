import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { useUserContext } from '../context/userContext'
import { deleteData, getData } from '../utils/storage'
import { getUserDataFromToken } from '../utils/jwt'

const CheckUser = ({ navigation }) => {

    const [userData, setUserData] = React.useState({})

    const userContext = useUserContext()
    
    // const checkUser = async () => {
    //     // console.log("checkUser called")

    //     const token = await getData('token')
    //     if (token === undefined) {
    //         navigation.replace('AuthNav')
    //     }
    //     else {
    //         try {
    //             const response = await userContext.login(userData?.email, userData?.password)
    //             if (response === undefined) {
    //                 deleteData('token');
    //             }
    //         }
    //         catch(error) {
    //             console.log(error.message)
    //         }
    //     }
    // }

    // useFocusEffect(() => {
    //     checkUser()
    // })

    // const checkForToken = async () => {
    //     const token = await getData('token');
    //     return token ? true : false;
    // }
    
    // React.useEffect(() => {
    //     const populateData = async () => {
    //         setUserData(await getUserDataFromToken());
    //     }

    //     if(checkForToken()) populateData();
    //     else navigation.replace('AuthNav');
    // }, [])
}

export default CheckUser

const styles = StyleSheet.create({})