import { View, Text, Modal, SafeAreaView, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import tw from 'twrnc';

const Password = ({ visible, handleVisible }) => {
    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent={false}
        >
            <SafeAreaView style={tw`flex flex-1 bg-white`}>
                <View>
                    <View style={tw`relative flex flex-row  border-b border-gray-200 p-2`}>
                        <TouchableOpacity
                            style={tw`absolute top-0 left-0`}
                            onPress={handleVisible}
                        >
                            <Text style={tw`py-2.5 pl-4 pr-8 text-base text-gray-400`}>Cancel</Text>
                        </TouchableOpacity>
                        <Text style={tw`flex-1 text-lg font-bold text-center`}>Change password</Text>
                        <TouchableOpacity
                            style={tw`absolute top-0 right-0`}
                            onPress={handleVisible}
                        >
                            <Text style={tw`py-2.5 pl-8 pr-4 font-medium text-base text-pink-500`}>Save</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={tw`p-3`}>
                        <Text style={tw`text-gray-400`}>Your password must be at least 6 characters and should include a combination of
                            numbers, letters and special characters.
                        </Text>
                        <View style={tw`flex`}>
                            <TextInput
                                placeholder='Current password'
                                placeholderTextColor='#ccc'
                                style={tw`text-base py-3 border-b border-gray-200`}
                            />
                            <TextInput
                                placeholder='New password'
                                placeholderTextColor='#ccc'
                                style={tw`text-base py-3 border-b border-gray-200`}
                            />
                            <TextInput
                                placeholder='New password, again'
                                placeholderTextColor='#ccc'
                                style={tw`text-base py-3 border-b border-gray-200`}
                            />
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </Modal>
    )
}

export default Password