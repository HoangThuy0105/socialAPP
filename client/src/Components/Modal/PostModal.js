import { View, Text, Modal, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native';
import * as actions from '../../redux/actions/post'

const PostModal = ({ handleVisible, isVisible, postId, images, content }) => {
    const navigation = useNavigation();
    const dispatch = useDispatch()
    const token = useSelector((state) => state.auth.currentUser.accessToken)

    const showConfirmDialog = () => {
        return Alert.alert(
            "Confirm",
            "Are you sure you want to delete your post?",
            [
                {
                    text: "Yes",
                    onPress: () => {
                        dispatch(actions.deletePostStart({ token, postId }))
                        handleVisible()
                        return
                    }
                },
                {
                    text: "No",
                    onPress: () => {
                        handleVisible()
                        return
                    }
                }
            ]
        )
    }

    const handleDeletePost = () => {
        showConfirmDialog()
    }

    return (
        <Modal
            visible={isVisible}
            transparent={true}
            animationType="fade"
        >
            <View style={[tw`w-full h-full`, { backgroundColor: 'rgba(0,0,0,0.5)' }]}>
                <TouchableOpacity
                    style={tw`w-full h-full flex-1`}
                    onPress={handleVisible}
                />
                <View style={tw`px-3 my-3 `}>
                    <View style={tw`bg-white rounded-lg my-2 overflow-hidden`}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('EditPostStack', {
                                postId: postId,
                                images: images,
                                content: content
                            })}
                            style={tw`w-full p-3 border-b border-gray-200`}
                        >
                            <Text style={tw`text-base text-center text-red-500`}>Edit Post</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={handleDeletePost}
                            style={tw`w-full p-3 border-b border-gray-200`}
                        >
                            <Text style={tw`text-base text-center text-red-500`}>Delete Post</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style={tw`bg-white rounded-lg items-center justify-center py-3`}
                        onPress={handleVisible}
                    >
                        <Text style={tw`text-base`}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

export default PostModal