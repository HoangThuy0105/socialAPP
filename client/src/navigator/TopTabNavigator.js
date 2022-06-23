import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';
import { Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import Posts from '../Components/Profile/Posts'
import Hearts from '../Components/Profile/Hearts'
import PostsHide from '../Components/Profile/PostsHide'
import Followers from '../Components/Menu/Followers';
import Following from '../Components/Menu/Following';

const Tab = createMaterialTopTabNavigator();
export const TopTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: tw`h-12`,
                tabBarIndicatorStyle: tw`bg-pink-500`,
                tabBarShowLabel: false,
                tabBarShowIcon: true,
            }}
        >
            <Tab.Screen
                name='PostsTab'
                component={Posts}
                options={{
                    tabBarIcon: (({ focused }) =>
                        <>
                            {focused ? (
                                <Ionicons name="ios-grid" style={tw`text-pink-500 text-lg`} />
                            ) : (
                                <Ionicons name="ios-grid-outline" style={tw`text-black text-lg`} />
                            )}
                        </>
                    ),
                }}
            />
            <Tab.Screen
                name='HeartTab'
                component={Hearts}
                options={{
                    tabBarIcon: (({ focused }) =>
                        <>
                            {focused ? (
                                <Ionicons name="ios-heart" style={tw`text-pink-500 text-xl`} />

                            ) : (
                                <Ionicons name="heart-outline" style={tw`text-black text-xl`} />
                            )}
                        </>
                    ),
                }}
            />
            <Tab.Screen
                name='PostsHide'
                component={PostsHide}
                options={{
                    tabBarIcon: (({ focused }) =>
                        <>
                            {focused ? (
                                <Ionicons name="md-lock-closed" style={tw`text-pink-500 text-xl`} />
                            ) : (
                                <Ionicons name="md-lock-closed-outline" style={tw`text-black text-xl`} />
                            )}
                        </>
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export const FollowNavigator = () => {
    const totalFollowers = useSelector((state) => state.user.followers.length)
    const totalFollowings = useSelector((state) => state.user.followings.length)
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: tw`h-12`,
                tabBarIndicatorStyle: tw`bg-pink-500`,
                tabBarShowLabel: true,
                tabBarShowIcon: false,
            }}
        >
            <Tab.Screen
                name='FollowersTab'
                component={Followers}
                options={{
                    tabBarLabel: (({ focused }) =>
                        <Text style={focused ? tw`text-pink-500 font-bold` : tw`text-gray-400 font-bold`}>{totalFollowers} Followers</Text>
                    ),
                }}
            />
            <Tab.Screen
                name='FollowingTab'
                component={Following}
                options={{
                    tabBarLabel: (({ focused }) =>
                        <Text style={focused ? tw`text-pink-500 font-bold` : tw`text-gray-400 font-bold`}>{totalFollowings} Following</Text>
                    ),
                }}
            />
        </Tab.Navigator>
    )
}
