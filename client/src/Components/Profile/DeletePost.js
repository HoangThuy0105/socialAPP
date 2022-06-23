import { View, Text, Modal, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../redux/actions/post'

const DeletePost = ({ handleVisible, isVisible, isIdPostSelected }) => {
    const dispatch = useDispatch()
    const token = useSelector((state) => state.auth.currentUser.accessToken)

    const handleDeletePost = () => {
        dispatch(actions.deletePostStart({ token, postId: isIdPostSelected }))
        handleVisible()
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
                    <View style={tw`bg-white rounded-lg my-2`}>
                        <TouchableOpacity
                            onPress={handleDeletePost}
                            style={tw` items-center justify-center py-3 `}
                        >
                            <Text style={tw`text-red-500 text-base`}>Delete</Text>
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

export default DeletePost