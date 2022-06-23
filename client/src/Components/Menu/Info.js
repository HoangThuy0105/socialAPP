import { View, Text, Modal, SafeAreaView, TouchableOpacity, TextInput } from 'react-native'
import React, { useRef, useState } from 'react'
import tw from 'twrnc';
import RBSheet from 'react-native-raw-bottom-sheet';
import { RadioButton } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux'

const Info = ({ visible, handleVisible }) => {
    const currentUser = useSelector((state) => state.auth.currentUser)

    const refRBSheet = useRef()
    const [checked, setChecked] = useState(false);


    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent={false}
        >
            <SafeAreaView>
                <View style={tw`bg-white`}>
                    <View style={tw`relative flex flex-row  border-b border-gray-200 p-2`}>
                        <TouchableOpacity
                            style={tw`absolute top-0 left-0`}
                            onPress={handleVisible}
                        >
                            <Text style={tw`py-2.5 pl-4 pr-8 text-base text-gray-400`}>Cancel</Text>
                        </TouchableOpacity>
                        <Text style={tw`flex-1 text-lg font-bold text-center`}>Personal Information</Text>
                        <TouchableOpacity
                            style={tw`absolute top-0 right-0`}
                            onPress={handleVisible}
                        >
                            <Text style={tw`py-2.5 pl-8 pr-4 font-medium text-base text-pink-500`}>Done</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={tw`p-3`}>
                        <Text style={tw`text-gray-400`}>Provide your personal information, even if the account is used for a business, a pet or something else.
                            This won't be part of your public profile.
                        </Text>
                        <View style={tw`flex flex-row items-center mt-5`}>
                            <Text style={tw`w-20 font-medium text-base`}>Email</Text>
                            <Text
                                style={tw`flex-1 text-base py-3 leading-5 border-b border-gray-200`} >
                                {currentUser.email}
                            </Text>
                        </View>
                        <View style={tw`flex flex-row items-center`}>
                            <Text style={tw`w-20 font-medium text-base`}>Phone</Text>
                            <Text
                                style={tw`flex-1 text-base py-3 leading-5 border-b border-gray-200`}>
                                {currentUser.phoneNumber}
                            </Text>
                        </View>
                        <View style={tw`flex flex-row items-center`}>
                            <Text style={tw`w-20 font-medium text-base`}>Gender</Text>
                            <TouchableOpacity
                                style={tw`flex-1 text-base py-2.5 border-b border-gray-200`}
                                onPress={() => refRBSheet.current.open()}
                            >
                                <Text style={tw`text-gray-300 text-base`}>Gender...</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={tw`flex flex-row items-center`}>
                            <Text style={tw`w-20 font-medium text-base`}>Birthday</Text>
                            <TextInput
                                placeholder='Birthday...'
                                placeholderTextColor='#ccc'
                                style={tw`flex-1 text-base py-3 leading-5 border-b border-gray-200`} />
                        </View>
                    </View>
                </View>
            </SafeAreaView>
            <RBSheet
                ref={refRBSheet}
                height={420}
                closeOnDragDown={true}
                closeOnPressMask={true}
                closeOnPressBack={true}
                openDuration={300}
                customStyles={{
                    container: tw`flex rounded-t-xl px-5`
                }}
            >
                <Text>Gender</Text>
                <View>
                    <View style={tw`flex flex-row items-center`}>
                        <Text style={tw`flex-1 font-medium`}>Male</Text>
                        <RadioButton
                            value="first"
                            status={checked ? 'checked' : 'unchecked'}
                            onPress={() => setChecked(!checked)}
                            // color='red'
                            uncheckedColor='blue'
                        />
                    </View>
                </View>
            </RBSheet>
        </Modal>
    )
}

export default Info