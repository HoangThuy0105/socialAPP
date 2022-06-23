import { View, Text, Image, StatusBar, ScrollView, TouchableOpacity, Animated, FlatList, TextInput, KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react'
import { useLayoutEffect, useRef, useState } from 'react'
import tw from 'twrnc'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import { useDispatch, useSelector } from 'react-redux'
import { format } from 'timeago.js'
import { SafeAreaView } from 'react-native-safe-area-context'

import WriteComment from '../Components/Comment/WriteComment'
import Comments from '../Components/Comment/Comments'
import ImageItem from '../Components/Home/ImageItem'
import DeleteCommentModal from '../Components/Modal/DeleteCommentModal'

const DetailPostScreen = ({ route }) => {
    const navigation = useNavigation();
    const scrollX = useRef(new Animated.Value(0)).current;
    const [currentIndex, setCurrentIndex] = useState(0);
    const slidesRef = useRef(null);

    const [isHeart, setIsHeart] = useState(false)

    const [isVisibleDeleteModal, setVisibleDeleteModal] = useState(false)

    const handleVisibleDeleteModal = () => {
        setVisibleDeleteModal(!isVisibleDeleteModal)
    }

    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;
    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    const post = [
        {
            postsImageList: [
                'https://icdn.dantri.com.vn/thumb_w/770/2022/05/30/iu-11-1653887051969.jpg',
                'https://2sao.vietnamnetjsc.vn/images/2022/02/20/21/00/IU-2.jpg'
            ],
            caption: 'Hello mn',
            totalComment: 19
        }
    ]

    return (
        <SafeAreaView edges={['bottom']} >
            <View style={tw`bg-white h-full`}>
                <TouchableOpacity
                    style={tw`absolute top-5 left-3 z-50`}
                    onPress={() => navigation.goBack()}
                >
                    <Ionicons
                        name='chevron-back'
                        size={25}
                        style={tw`text-white`}
                    />
                </TouchableOpacity>
                <ScrollView
                    contentContainerStyle={tw`flex items-center`}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                >
                    <StatusBar hidden={true} />
                    <View style={tw`h-140 w-full bg-gray-100`}>

                        <FlatList
                            data={route.params.image}
                            renderItem={({ item }) => {
                                return <ImageItem image={item} />
                            }}
                            keyExtractor={(item, i) => i}
                            pagingEnabled
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            bounces={false}
                            onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                                useNativeDriver: false,
                            })}
                            scrollEventThrottle={32}
                            onViewableItemsChanged={viewableItemsChanged}
                            viewabilityConfig={viewConfig}
                            ref={slidesRef}
                        />


                        <LinearGradient
                            colors={['rgba(0, 0, 0, 0.0003)', 'rgba(0, 0, 0, 0.2)']}
                            style={tw`w-full h-15 py-3 absolute bottom-0 right-0 left-0 flex flex-col justify-end z-0`}
                        >
                            {/* {(post.postsImageList.length) ? (
                                <Paginator data={post.postsImageList} scrollX={scrollX} />
                            ) : (
                                <></>
                            )} */}

                        </LinearGradient>
                    </View>
                    <View style={tw`w-full px-5`}>
                        <View style={tw`flex flex-row items-center`}>
                            <View style={tw`flex flex-row items-center justify-between w-full`}>

                                <View>
                                    <Image
                                        style={tw`w-14 h-14 rounded-full absolute -top-5 bg-gray-300 border border-2 border-white`}
                                        source={route.params.author.avatar ? { uri: `data:image/png;base64,${route.params.author.avatar}` } : require('../images/defaultAvatar.png')}
                                    />
                                    <View style={tw`ml-15 flex`}>
                                        <Text style={tw`font-bold text-base`}>{route.params.author.firstName + ' ' + route.params.author.lastName}</Text>
                                        <Text style={[{ fontSize: 11 }, tw`font-light`]}>{format(route.params.createdAt)}</Text>
                                    </View>
                                </View>

                                <View style={tw` flex flex-row items-center justify-around bg-gray-50 px-3 py-1 my-2 rounded-xl border border-gray-200`}>
                                    <TouchableOpacity
                                        activeOpacity={.7}
                                        style={tw` items-center flex flex-row justify-center`}
                                    // onPress={handleReact}
                                    >
                                        <Ionicons name={isHeart ? "heart" : "heart-outline"}
                                            style={isHeart ? tw`text-2xl text-[#ED4366] mr-2` : tw`text-2xl text-gray-300 mr-2 ml-1`}
                                            size={24}
                                        />
                                        <Text style={tw`font-semibold text-gray-800 mr-3`}>{route.params.totalHeart}</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        activeOpacity={.7}
                                        style={tw`items-center justify-center`}
                                    >
                                        <FontAwesome name="send"
                                            style={tw`text-gray-400`}
                                            size={18}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View>
                            <Text style={tw` my-3  pl-3`}>
                                {route.params.content}
                            </Text>

                            <View style={tw`w-full flex justify-center items-center`}>
                                <View style={tw`bg-gray-200 rounded-full w-2/5 h-[1] items-center mt-4 mb-1`} />
                            </View>
                            <Text style={tw`text-center text-gray-500 mb-4`}>
                                {post.totalComment} comments
                            </Text>
                            {
                                route.params.comments ? (
                                    route.params.comments.map((item, i) => {
                                        return <Comments
                                            item={item}
                                            key={i}
                                        // setIdCommentSelected={setIdCommentSelected}
                                        // handleVisibleDeleteModal={handleVisibleDeleteModal}
                                        />
                                    })
                                ) : <></>
                            }
                        </View>
                    </View>
                </ScrollView>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    keyboardVerticalOffset={2}
                >
                    <WriteComment
                        postId={route.params.postId}
                        avatar={route.params.author.avatar}
                    />
                </KeyboardAvoidingView>
            </View>
            <DeleteCommentModal
                // token={token}
                isVisibleDeleteModal={isVisibleDeleteModal}
                handleVisibleDeleteModal={handleVisibleDeleteModal}
            // isIdCommentSelected={isIdCommentSelected}
            />
        </SafeAreaView>
    )
}

export default DetailPostScreen