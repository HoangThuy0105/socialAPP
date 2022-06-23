import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc';


const BlockedItem = ({ item }) => {
    return (
        <View style={tw`flex px-3`}>
            <TouchableOpacity
                style={tw`flex flex-row items-center mt-3`}
            >
                <Image
                    source={{ uri: item.item.image }}
                    style={tw`h-13 w-13 rounded-full`}
                />
                <View style={tw`flex-1 ml-3`}>
                    <Text style={tw`text-sm font-medium`}>{item.item.name}</Text>
                    <Text style={tw`text-xs text-gray-400`}>{item.item.email}</Text>
                </View>
                <TouchableOpacity
                    style={tw`px-2.5 py-1.5 bg-pink-500 rounded-md`}
                >
                    <Text style={tw`text-white font-medium`}>Unblock</Text>
                </TouchableOpacity>
            </TouchableOpacity>
        </View>
    )
}

export default BlockedItem