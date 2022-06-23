import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux'


const CommentItem = ({ item }) => {
    const listUser = useSelector((state) => state.user.listUser)
    const [userComment, setUserComment] = useState('')

    useEffect(() => {
        listUser.map((user) => {
            if (user._id == item.item.userId) {
                setUserComment(user)
            }
        })
    }, [])

    return (
        <View style={tw`flex flex-1`}>
            <TouchableOpacity
                style={tw`flex flex-row mt-3`}
            >
                <Image
                    source={userComment.avatar ? { uri: `data:image/png;base64,${userComment.avatar}` } : require('../../images/defaultAvatar.png')}
                    style={tw`h-8 w-8 rounded-full`}
                />
                <View style={tw`flex-1 ml-3`}>
                    <Text style={tw`text-sm font-medium`}>{userComment.firstName + ' ' + userComment.lastName}</Text>
                    <Text style={tw`text-xs text-gray-400`}>{item.item.comment}</Text>
                </View>
                <TouchableOpacity
                    style={tw`ml-2`}
                >
                    <Ionicons name="heart-outline" style={tw`text-xl text-gray-400`} />
                </TouchableOpacity>
            </TouchableOpacity>
        </View>
    )
}

export default CommentItem