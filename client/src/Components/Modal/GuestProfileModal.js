import { View, Text, Modal, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const GuestProfileModal = ({ handleVisible, isVisible }) => {
    return (
        <Modal
            visible={isVisible}
            transparent={true}
            animationType="fade"
        >
            <View style={[tw`w-full h-full`, { backgroundColor: 'rgba(0,0,0,0.5)' }]}>
                <TouchableOpacity
                    style={tw`w-full h-full flex-1`}
                    onPress={handleVisible}
                />
                <View style={tw`px-3 my-3 `}>
                    <View style={tw`bg-white rounded-lg my-2 overflow-hidden`}>
                        <TouchableOpacity
                            style={tw`w-full p-3 border-b border-gray-200`}
                        >
                            <Text style={tw`text-base text-center text-red-500`}>Block</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={tw`w-full p-3 border-b border-gray-200`}
                        >
                            <Text style={tw`text-base text-center text-red-500`}>Report</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={tw`w-full p-3 border-b border-gray-200`}
                        >
                            <Text style={tw`text-base text-center`}>Share this profile</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style={tw`bg-white rounded-lg items-center justify-center py-3`}
                        onPress={handleVisible}
                    >
                        <Text style={tw`text-base`}>Cancel</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </Modal>
    )
}

export default GuestProfileModal