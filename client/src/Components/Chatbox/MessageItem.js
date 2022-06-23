import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'

const MessageItem = ({ item }) => {
    const navigation = useNavigation()

    return (
        <View style={tw`flex px-3`}>
            <TouchableOpacity
                onPress={() => navigation.navigate('MessageStack', { item: item })}
                style={tw`flex flex-row items-center mb-3 `}
            >
                <Image
                    source={{ uri: item.item.image }}
                    style={tw`w-13 h-13 rounded-full`}
                />
                <View style={tw`flex flex-1 ml-3 `}>
                    <Text style={tw`text-sm font-medium`}>{item.item.name}</Text>
                    <Text style={tw`text-xs text-gray-400`}>{item.item.email}</Text>
                </View>

            </TouchableOpacity>
        </View>
    )
}

export default MessageItem