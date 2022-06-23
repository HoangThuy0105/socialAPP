import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../../redux/actions/user'

const SearchItem = ({ item }) => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const currentUserId = useSelector((state) => state.auth.currentUser._id)

    const handleSelect = () => {
        dispatch(actions.checkFollowUserStart({ userId: item.item._id, currentUserId }))
        navigation.navigate('ProfileGuestStack', {
            userId: item.item._id,
            avatar: item.item.avatar,
            firstName: item.item.firstName,
            lastName: item.item.lastName,
            email: item.item.email,
            totalFollowers: item.item.followers.length,
            totalFollowings: item.item.following.length
        })
    }

    return (
        <View style={tw`flex px-3`}>
            <TouchableOpacity
                onPress={handleSelect}
                style={tw`flex flex-row items-center mb-3 `}
            >
                <Image
                    source={item.item.avatar ? { uri: `data:image/png;base64,${item.item.avatar}` } : require('../../images/defaultAvatar.png')}
                    style={tw`w-13 h-13 rounded-full`}
                />
                <View style={tw`flex flex-1 ml-3 `}>
                    <Text style={tw`text-sm font-medium`}>{item.item.firstName + ' ' + item.item.lastName}</Text>
                    <Text style={tw`text-xs text-gray-400`}>{item.item.email}</Text>
                </View>

            </TouchableOpacity>
        </View>
    )
}

export default SearchItem