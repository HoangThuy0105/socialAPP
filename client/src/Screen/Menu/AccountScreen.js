import { View, TouchableOpacity, Text, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc';
import { FontAwesome, Ionicons, Feather } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/actions/auth';
import Info from '../../Components/Menu/Info'
import Password from '../../Components/Menu/Password'

const AccountScreen = ({ navigation }) => {
    const dispatch = useDispatch()

    const [infoModalVisible, setInfoModalVisible] = useState(false)
    const [passwordModalVisible, setPasswordModalVisible] = useState(false)

    const handleInfoModalVisible = () => {
        setInfoModalVisible(!infoModalVisible)
    }
    const handlePasswordModalVisible = () => {
        setPasswordModalVisible(!passwordModalVisible)
    }

    return (
        <SafeAreaView style={tw`bg-white flex flex-1`}>
            <View>
                <View style={tw`relative flex flex-row  border-b border-gray-200 p-3`}>
                    <TouchableOpacity
                        style={tw`absolute top-0 left-0`}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={tw`py-2 pl-4 pr-8`}><FontAwesome name="angle-left" style={tw`text-black text-2xl`} /></Text>
                    </TouchableOpacity>
                    <Text style={tw`flex-1 text-lg font-bold text-center`}>Account</Text>
                </View>
                <View style={tw`px-3`}>
                    <View style={tw`h-full py-2`}>
                        <TouchableOpacity
                            style={tw`flex flex-row items-center`}
                            onPress={handleInfoModalVisible}
                        >
                            <Feather name="user" style={tw` text-2xl w-10`} />
                            <Text style={tw`text-base flex-1`}>Personal information</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={handlePasswordModalVisible}
                            style={tw`flex flex-row items-center mt-2`}
                        >
                            <Ionicons name="md-key-outline" style={tw` text-2xl w-10`} />
                            <Text style={tw`text-base flex-1`}>Password</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={tw`p-2.5 mt-5 bg-pink-500 rounded-lg`}
                            onPress={() => {
                                dispatch(logout())
                            }}
                        >
                            <Text style={tw`text-white font-medium text-center text-base`}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <Info
                visible={infoModalVisible}
                handleVisible={handleInfoModalVisible}
            />
            <Password
                visible={passwordModalVisible}
                handleVisible={handlePasswordModalVisible}
            />
        </SafeAreaView>
    )
}

export default AccountScreen