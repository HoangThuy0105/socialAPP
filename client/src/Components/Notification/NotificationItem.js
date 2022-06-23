import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc';

const NotificationItem = ({ item }) => {
    return (
        <View style={tw`flex px-3`}>
            <TouchableOpacity style={tw`flex flex-row items-center mt-3 `}>
                <Image
                    source={{ uri: item.item.image }}
                    style={tw`w-13 h-13 rounded-full`}
                />
                <View style={tw`flex flex-1 ml-3 `}>
                    <Text style={tw``}>{item.item.title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default NotificationItem