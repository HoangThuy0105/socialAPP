import React, { useRef, useState, useCallback, useEffect } from 'react'
import { View, Text, Image, Dimensions, TouchableOpacity, FlatList, Animated } from 'react-native'
import tw from 'twrnc';
import { MaterialCommunityIcons, Ionicons, FontAwesome } from '@expo/vector-icons';
import { TapGestureHandler } from 'react-native-gesture-handler';
import { BlurView } from 'expo-blur';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import RBSheet from 'react-native-raw-bottom-sheet'
import { useSelector, useDispatch } from 'react-redux'
import { format } from 'timeago.js'
import * as actions from '../../redux/actions/post'
import { getUserByIdStart } from '../../redux/actions/user'
import Paginator from './Paginator';
import PostModel from '../Modal/PostModal'
import ImageItem from './ImageItem'
import CommentItem from './CommentItem';

const Post = ({ post, token, userId }) => {
    const refRBSheet = useRef()
    const navigation = useNavigation()
    const dispatch = useDispatch()

    const { width: SCREEN_WIDTH } = Dimensions.get('window');
    const FRAMESIZE_W = SCREEN_WIDTH;
    const FRAMESIZE_H = SCREEN_WIDTH / 2 * 3;
    const slidesRef = useRef(null);
    const scrollX = useRef(new Animated.Value(0)).current;
    const [currentIndex, setCurrentIndex] = useState(0);

    const [heart, setHeart] = useState(false);
    const [totalHeart, setTotalHeart] = useState(post.item.likes.length)

    const [showMore, setShowMore] = useState(false)
    const [lengthMore, setLengthMore] = useState(false);

    const [isVisibleModal, setVisibleModal] = useState(false)

    const [author, setAuthor] = useState('')

    const handleVisibleModal = () => {
        setVisibleModal(!isVisibleModal)
    }

    const handlePressHeart = () => {
        setHeart(!heart);
        const postId = post.item._id
        dispatch(actions.likePostStart({ token, postId, userId }))
        heart ? setTotalHeart(totalHeart - 1) : setTotalHeart(totalHeart + 1)
    }

    useEffect(() => {
        setHeart(post.item.likes.includes(userId))
    }, [userId, post.item.likes])

    const listUser = useSelector((state) => state.user.listUser)
    useEffect(() => {

        listUser.map((user) => {
            if (user._id == post.item.author) {
                setAuthor(user)
            }
        })
    }, [])

    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    const onTextLayout = useCallback(e => {
        setLengthMore(e.nativeEvent.lines.length >= 2);
    }, []);


    return (
        <View style={[tw`bg-white mt-3 overflow-hidden`, { width: FRAMESIZE_W, height: FRAMESIZE_H }]}>
            <View style={tw`flex flex-row justify-between items-center px-3`}>
                <View style={tw`flex flex-row items-center`}>
                    <Image
                        style={tw`w-12 h-12 rounded-full mr-2.5`}
                        source={author.avatar ? { uri: `data:image/png;base64,${author.avatar}` } : require('../../images/defaultAvatar.png')}
                    />
                    <View>
                        <Text style={tw`text-base font-medium`}>{author.firstName + ' ' + author.lastName}</Text>
                        <Text style={tw`text-xs text-gray-400`}>{format(post.item.createdAt)}</Text>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={handleVisibleModal}
                >
                    <MaterialCommunityIcons name="dots-horizontal" style={tw`text-2xl text-black`} />
                </TouchableOpacity>
            </View>
            <View style={tw`my-2 px-3`}>
                <TouchableOpacity
                    // onPress={() => setShowMore(!showMore)}
                    onPress={() => navigation.navigate('DetailPostStack', {
                        image: post.item.images,
                        content: post.item.content,
                        postId: post.item._id,
                        comments: post.item.comments,
                        createdAt: post.item.createdAt,
                        author: author,
                        totalHeart: totalHeart
                    })}
                >
                    <Text
                        style={tw`font-normal `}
                        numberOfLines={showMore ? 99 : 2}
                        onTextLayout={onTextLayout}
                    >
                        {post.item.content}
                    </Text>
                </TouchableOpacity>
                {/* {
                    lengthMore ?
                        <TouchableOpacity
                            // onPress={() => setShowMore(!showMore)}
                            onPress={() => navigation.navigate('DetailPostStack')}
                        >
                            <Text style={tw`text-gray-400  mt-1`}>{showMore ? 'Hide' : 'See more'}</Text>
                        </TouchableOpacity>
                        : null
                } */}
            </View>
            <View style={tw`relative`}>
                <TapGestureHandler
                    style={tw` w-full h-full`}
                    numberOfTaps={2}
                    onActivated={handlePressHeart}
                >
                    <FlatList
                        data={post.item.images}
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
                    >
                    </FlatList>
                </TapGestureHandler>
                <View style={tw`absolute right-2 top-50`}>
                    <BlurView
                        intensity={30}
                        tint="light"
                        style={tw`rounded-lg px-3 py-2 overflow-hidden`}
                    >
                        <View style={tw`flex flex-col`}>
                            <TouchableOpacity
                                onPress={handlePressHeart}
                                style={tw`flex flex-col items-center justify-center`}
                            >
                                <Ionicons name="ios-heart" size={22} style={heart ? tw`text-red-500` : tw`text-white`} />
                                <Text style={tw`text-white text-xs`}>{totalHeart}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => refRBSheet.current.open()}
                                style={tw`pt-3 pb-5`}
                            >
                                <Ionicons name="chatbubble-ellipses" size={22} style={tw`text-white`} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <FontAwesome name="send" size={18} style={tw`text-white`} />
                            </TouchableOpacity>
                        </View>
                    </BlurView>
                </View>
                <LinearGradient
                    colors={['rgba(0, 0, 0, 0.0003)', 'rgba(0, 0, 0, 0.75)']}
                    style={tw`w-full h-55 absolute bottom-0 inset-x-0`}
                />
            </View>
            {/* <View style={tw`absolute bottom-1 inset-x-2`}>
                {(post.item.images.length > 1) ? (
                    <Paginator data={post.item.attachment} scrollX={scrollX} />
                ) : (
                    <></>
                )}
            </View> */}

            <RBSheet
                ref={refRBSheet}
                height={420}
                closeOnDragDown={true}
                closeOnPressMask={true}
                closeOnPressBack={true}
                openDuration={350}
                customStyles={{
                    container: tw`flex rounded-t-xl px-5`
                }}
            >
                <View style={tw`flex flex-1`}>
                    <Text style={tw`text-center font-medium text-pink-500`}>{post.item.comments.length} comments</Text>
                    <FlatList
                        data={post.item.comments}
                        renderItem={(item) => (<CommentItem item={item} />)}
                        keyExtractor={(item, i) => i}
                    />
                </View>
            </RBSheet>
            <PostModel
                handleVisible={handleVisibleModal}
                isVisible={isVisibleModal}
                postId={post.item._id}
                images={post.item.images}
                content={post.item.content}
            />

        </View >
    )
}

export default Post