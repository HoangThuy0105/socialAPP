import { View, Text, SafeAreaView, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import tw from 'twrnc';
import { MaterialCommunityIcons, SimpleLineIcons, Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux'
import FollowingItem from './FollowingItem';

const Following = () => {
    const data = useSelector((state) => state.user.followings)

    return (
        <SafeAreaView style={tw`flex flex-1 bg-white`}>
            <View style={tw`flex-1 p-3`}>
                <View style={tw`flex flex-row items-center bg-[#F3F0F6] rounded-lg`}>
                    <Ionicons name="ios-search-outline" style={tw`text-xl text-gray-400 px-1.5`} />
                    <TextInput
                        style={tw`flex-1 py-2.5 `}
                        placeholder="Search..."
                    />
                </View>
                {data.length ? (
                    <>
                        <View style={tw`flex flex-row items-center justify-between mt-3`}>
                            <View style={tw`flex flex-row`}>
                                <Text style={tw`text-base`}>Sort by</Text>
                                <Text style={tw`text-base font-medium ml-1.5`}>Default</Text>
                            </View>
                            <TouchableOpacity
                                style={tw`py-2 pl-5`}
                            >
                                <MaterialCommunityIcons name="arrow-up-down" size={20} color="black" />
                            </TouchableOpacity>
                        </View>

                        <FlatList
                            data={data}
                            renderItem={(item) => (<FollowingItem item={item} />)}
                            keyExtractor={(item) => item._id}
                        />
                    </>
                ) : (
                    <View style={tw`flex items-center`}>
                        <View style={tw`my-4 p-6 border-2 border-gray-400 rounded-full`}>
                            <SimpleLineIcons name="user-follow" style={tw`text-5xl text-gray-400`} />
                        </View>
                        <Text style={tw`text-3xl font-medium`}>Followings</Text>
                        <Text style={tw`text-base text-gray-400 mt-2`}>You'll see all the people who follow you here</Text>
                    </View>
                )}
            </View>
        </SafeAreaView>
    )
}

export default Following