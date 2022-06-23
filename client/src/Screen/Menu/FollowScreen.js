import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { FontAwesome } from '@expo/vector-icons';
import { useSelector } from 'react-redux'
import { FollowNavigator } from '../../navigator/TopTabNavigator'

const FollowScreen = ({ navigation }) => {
    const currentUser = useSelector((state) => state.auth.currentUser)

    return (
        <SafeAreaView style={tw`flex flex-1 bg-white`}>
            <View style={tw`relative flex flex-row p-3`}>
                <TouchableOpacity
                    style={tw`absolute top-0 left-0`}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={tw`py-2 pl-4 pr-8`}><FontAwesome name="angle-left" style={tw`text-black text-2xl`} /></Text>
                </TouchableOpacity>
                <Text style={tw`flex-1 text-lg font-bold text-center`}>{currentUser.firstName + ' ' + currentUser.lastName}</Text>
            </View>
            <FollowNavigator />

        </SafeAreaView>
    )
}

export default FollowScreen