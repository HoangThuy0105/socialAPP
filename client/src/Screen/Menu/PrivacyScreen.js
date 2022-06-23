import { View, Switch, TouchableOpacity, Text, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc';
import { FontAwesome, AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'

const PrivacyScreen = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()

    const [statusAccount, setStatusAccount] = useState(false)

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
                    <Text style={tw`flex-1 text-lg font-bold text-center`}>Privacy</Text>
                </View>
                <View style={tw`px-3`}>
                    <View style={tw`py-3 border-b border-gray-200`}>
                        <Text style={tw`text-base  font-medium mb-2`}>Account Privacy</Text>
                        <View style={tw`flex flex-row items-center`}>
                            <Ionicons name="md-lock-closed-outline" style={tw` text-2xl w-10`} />
                            <Text style={tw`text-base flex-1`}>Private Account?</Text>
                            <Switch
                                trackColor={{ false: "#C6CBD9", true: "#5EC2EA" }}
                                thumbColor={"#fff"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={() => setStatusAccount(!statusAccount)}
                                value={statusAccount}
                            />
                        </View>
                    </View>
                    <View style={tw`h-full py-2`}>
                        <Text style={tw`text-base font-medium mb-2`}>Connections</Text>
                        <TouchableOpacity
                            style={tw`flex flex-row items-center`}
                            onPress={() => navigation.navigate('BlockedAccountStack')}
                        >
                            <AntDesign name="closecircleo" style={tw` text-2xl w-10`} />
                            <Text style={tw`text-base flex-1`}>Blocked accounts</Text>
                            <FontAwesome name="angle-right" style={tw`text-gray-300 text-2xl`} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={tw`flex flex-row items-center mt-2`}
                            onPress={() => navigation.navigate('FollowStack')}
                        >
                            <Feather name="users" style={tw` text-2xl w-10`} />
                            <Text style={tw`text-base flex-1`}>Accounts you follow</Text>
                            <FontAwesome name="angle-right" style={tw`text-gray-300 text-2xl`} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default PrivacyScreen