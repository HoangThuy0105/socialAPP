import { View, Image, TextInput } from 'react-native';
import tw from 'twrnc';
import React, { useState, useEffect } from 'react'
import { BlurView } from 'expo-blur';
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../redux/actions/post'

const WriteComment = ({ postId, avatar }) => {
    const dispatch = useDispatch()
    const [comment, setComment] = useState('')
    const token = useSelector((state) => state.auth.currentUser.accessToken)
    const userId = useSelector((state) => state.auth.currentUser._id)

    const handleComment = () => {
        dispatch(actions.commentPostStart({ token, userId, comment, postId }))
        setComment('')
    }

    return (
        <BlurView
            style={tw`py-2 px-3 flex flex-row items-center`}
            intensity={20}
            tint='light'
        >
            <Image
                source={avatar ? { uri: `data:image/png;base64,${avatar}` } : require('../../images/defaultAvatar.png')}
                style={tw`w-12 h-12 rounded-full mr-2 border border-gray-200`}
            />
            <TextInput
                style={tw`bg-white flex-1 py-3 rounded-xl px-3 border border-gray-200`}
                placeholder='Write your comment...'
                placeholderTextColor='#ccc'
                onChangeText={val => setComment(val)}
                onEndEditing={handleComment}
            />
        </BlurView>
    )
}

export default WriteComment