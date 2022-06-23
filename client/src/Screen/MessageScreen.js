import { View, Text, SafeAreaView, TouchableOpacity, KeyboardAvoidingView, Image, ScrollView } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { FontAwesome } from '@expo/vector-icons';
import MessageUser1 from '../Components/Chatbox/MessageUser1'
import MessageUser2 from '../Components/Chatbox/MessageUser2'
import WriteMessage from '../Components/Chatbox/WriteMessage'

const MessageScreen = ({ navigation, route }) => {
    const { item } = route.params
    console.log(item)
    return (
        <SafeAreaView style={tw`flex flex-1 bg-white`}>
            <View style={tw`flex flex-row items-center border-b border-gray-200`}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Text style={tw`py-2 px-4`}>
                        <FontAwesome name="angle-left" style={tw`text-gray-400 text-2xl`} />
                    </Text>
                </TouchableOpacity>
                <Image
                    style={tw`w-10 h-10 rounded-full mr-2`}
                    source={{ uri: item.item.image }}
                />
                <View style={tw`flex flex-1 pb-1.5`}>
                    <Text style={tw`text-base font-medium`}>{item.item.name}</Text>
                    <Text style={tw`text-xs text-gray-400`}>Active 2 minutes ago</Text>
                </View>
            </View>
            <ScrollView style={tw`px-5 py-2 flex-1`}>
                <MessageUser1 />
                <MessageUser2 />
                <MessageUser1 />
                <MessageUser2 />
                <MessageUser1 />
                <MessageUser1 />
                <MessageUser2 />
                <MessageUser2 />
                <MessageUser2 />
                <MessageUser1 />
                <MessageUser2 />
                <MessageUser1 />
            </ScrollView>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={5}
            >
                <WriteMessage />
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default MessageScreen