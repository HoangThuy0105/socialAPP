import React, { useRef, useState } from 'react'
import { StyleSheet, View, Text, SafeAreaView, PixelRatio, Image, Dimensions, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons, Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import RBSheet from 'react-native-raw-bottom-sheet'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux'
import { TopTabNavigator } from '../navigator/TopTabNavigator'
import EditProfile from '../Components/Profile/EditProfile'

const { width } = Dimensions.get('window')

const ProfileScreen = () => {
    PixelRatio.getPixelSizeForLayoutSize(width);
    const refRBSheet = useRef()

    const navigation = useNavigation()
    const currentUser = useSelector((state) => state.auth.currentUser)
    const totalPost = useSelector((state) => state.posts.listPostsUser.length)


    const [visible, setVisible] = useState(false)

    const handleVisibleEdit = () => {
        setVisible(!visible)
    }

    return (
        <SafeAreaView style={tw`w-full h-full bg-white`}>
            <View style={tw`flex w-full h-full`}>
                <View>
                    <Image
                        source={require('../images/bgProfile3.jpg')}
                        style={styles.image}
                        resizeMode='cover'
                    />
                    <TouchableOpacity
                        style={tw`absolute top-0 right-0 z-1 p-3`}
                        onPress={() => refRBSheet.current.open()}
                    >
                        <Feather name="menu" style={tw`text-[28px] text-white`} />
                    </TouchableOpacity>
                    <LinearGradient
                        colors={['rgba(0, 0, 0, 0.65)', 'rgba(0, 0, 0, 0.0003)']}
                        style={tw`w-full h-25 absolute top-0 inset-x-0`}
                    />
                </View>
                <View style={tw`relative flex-1 bg-white -mt-10 rounded-t-[40px]`}>
                    <View style={tw`absolute -top-14 left-10 z-1 p-1 shadow-lg bg-white rounded-full`}>
                        <Image
                            source={currentUser.avatar ? { uri: `data:image/png;base64,${currentUser.avatar}` } : require('../images/defaultAvatar.png')}
                            style={tw`w-25 h-25 rounded-full`}
                        />
                    </View>
                    <View style={tw`flex flex-row items-center justify-end p-3`}>
                        <View style={tw`flex`}>
                            <Text style={tw`text-base font-bold`}>{currentUser.firstName + ' ' + currentUser.lastName}</Text>
                            <Text style={tw`text-sm text-gray-400`}>{currentUser.email}</Text>
                        </View>
                        <TouchableOpacity
                            onPress={handleVisibleEdit}
                            style={tw`p-1 ml-5 border-2 border-pink-500 rounded-lg`}
                        >
                            <MaterialIcons name="mode-edit" size={20} style={tw`text-pink-500`} />
                        </TouchableOpacity>
                    </View>
                    <View style={tw`px-3 flex-1`}>
                        <View style={tw`flex flex-row`}>
                            <View style={tw`flex-1 items-center`}>
                                <Text style={tw`font-medium text-sm`}>{totalPost}</Text>
                                <Text style={tw`text-gray-400 text-xs`}>Posts</Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('FollowStack')}
                                style={tw`flex-1 items-center`}
                            >
                                <Text style={tw`font-medium text-sm`}>{currentUser.followers.length}</Text>
                                <Text style={tw`text-gray-400 text-xs`}>Followers</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={tw`flex-1 items-center`}
                                onPress={() => navigation.navigate('FollowStack')}
                            >
                                <Text style={tw`font-medium text-sm`}>{currentUser.following.length}</Text>
                                <Text style={tw`text-gray-400 text-xs`}>Following</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={tw`flex-1`}>
                            <TopTabNavigator />
                        </View>
                    </View>
                </View>
            </View>
            <RBSheet
                ref={refRBSheet}
                height={420}
                closeOnDragDown={true}
                closeOnPressMask={true}
                closeOnPressBack={true}
                openDuration={300}
                customStyles={{
                    container: tw`flex rounded-t-xl px-3`
                }}
            >
                <View>
                    <TouchableOpacity
                        style={tw`flex flex-row items-center py-2`}
                    >
                        <Ionicons name="qr-code-outline" style={tw`text-2xl w-10`} />
                        <Text style={tw`text-base`}>QR Code</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity
                        style={tw`flex flex-row items-center py-2`}
                    >
                        <Feather name="settings" style={tw`text-2xl w-10`} />
                        <Text style={tw`text-base`}>Settings</Text>
                    </TouchableOpacity> */}
                    <TouchableOpacity
                        style={tw`flex flex-row items-center py-2`}
                        onPress={() => {
                            refRBSheet.current.close()
                            navigation.navigate('PrivacyStack')
                        }}
                    >
                        <Ionicons name="md-lock-closed-outline" style={tw`text-2xl w-10`} />
                        <Text style={tw`text-base`}>Privacy</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={tw`flex flex-row items-center py-2`}
                        onPress={() => {
                            refRBSheet.current.close()
                            navigation.navigate('AccountStack')
                        }}
                    >
                        <MaterialCommunityIcons name="account-circle-outline" style={tw`text-2xl w-10`} />
                        <Text style={tw`text-base`}>Account</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={tw`flex flex-row items-center py-2`}
                    >
                        <Ionicons name="md-help" style={tw`text-2xl w-10`} />
                        <Text style={tw`text-base`}>Help</Text>
                    </TouchableOpacity>
                </View>
            </RBSheet>

            <EditProfile
                visible={visible}
                handleVisible={handleVisibleEdit}
            />


        </SafeAreaView>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    image: {
        width: width,
        height: width / 2
    },
})