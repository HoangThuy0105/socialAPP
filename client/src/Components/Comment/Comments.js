import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import tw from 'twrnc'


const Comments = ({ item }) => {
    const listUser = useSelector((state) => state.user.listUser)
    const [userComment, setUserComment] = useState('')

    useEffect(() => {
        listUser.map((user) => {
            if (user._id == item.userId) {
                setUserComment(user)
            }
        })
    }, [])

    const handleLongPress = () => {

    }

    const handleGetProfile = () => {

    }

    return (
        <TouchableOpacity style={tw`w-full flex flex-row my-1 items-center`}
            onLongPress={handleLongPress}
        >
            <TouchableOpacity
                onPress={handleGetProfile}
            >
                <Image
                    source={userComment.avatar ? { uri: `data:image/png;base64,${userComment.avatar}` } : require('../../images/defaultAvatar.png')}
                    style={tw`w-13 h-13 rounded-full mr-2 bg-gray-200 border-2 border-gray-200`}
                />
            </TouchableOpacity>
            <View style={tw`w-full`}>
                <View style={tw`flex flex-row items-center`}>
                    <Text style={tw`font-bold my-1`}>{userComment.firstName + ' ' + userComment.lastName}</Text>
                    {/* <Text style={tw`text-gray-500 text-xs`}></Text> */}
                </View>
                <Text>{item.comment}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Comments