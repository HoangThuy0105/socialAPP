import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import tw from 'twrnc'
import { Ionicons } from '@expo/vector-icons';

const WriteMessage = () => {

    const [input, setInput] = useState("");

    const sendMessage = () => { };

    return (
        <View style={tw`flex flex-row items-center bg-gray-100 py-2 px-3 mx-3 mb-1 rounded-lg overflow-hidden`}>
            <TextInput
                placeholder='Write message..'
                style={tw`text-sm flex-1`}
                onChange={setInput}
                onSubmitEditing={sendMessage}
                value={input}
            />
            <TouchableOpacity>
                <Ionicons name='send' style={tw`text-lg px-2 text-pink-500`} />
            </TouchableOpacity>
        </View>
    );
};

export default WriteMessage;
