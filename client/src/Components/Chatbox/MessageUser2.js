import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const MessageUser2 = () => {
    return (
        <View style={tw`w-full items-end`}>
            <View style={tw`items-end w-6/7`}>
                <View style={tw`rounded-lg bg-pink-400 mb-[6]`}>
                    <Text style={tw`p-2 text-white text-sm`}>
                        hello. Chao ban, cho minh lam quen duoc khong
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default MessageUser2