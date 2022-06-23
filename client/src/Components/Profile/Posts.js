import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { FlatGrid } from 'react-native-super-grid';
import PostItem from './PostItem'
import tw from 'twrnc';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions/post'
import DeletePost from './DeletePost';

const Posts = () => {
    const [isVisibleDeleteModal, setVisibleDeleteModal] = useState(false)
    const [isIdPostSelected, setIdPostSelected] = useState(null)

    const handleVisibleDeleteModal = () => {
        setVisibleDeleteModal(!isVisibleDeleteModal)
    }

    const data = useSelector(state => state.posts.listPostsUser)
    const newList = data.filter(post => {
        // if (post.status == true) {
        return !post.status
        // }
    })

    return (
        <View style={tw`flex-1 bg-white`}>
            {
                newList.length
                    ? (
                        <FlatGrid
                            data={newList}
                            itemDimension={100}
                            renderItem={(item) =>
                                <PostItem
                                    item={item}
                                    handleVisible={handleVisibleDeleteModal}
                                    setIdPostSelected={setIdPostSelected}
                                />
                            }
                            style={tw`pt-2 bg-white`}
                            keyExtractor={item => item._id}
                            spacing={5}
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                        />
                    )
                    : (
                        <View style={tw`flex justify-center h-full`}>
                            <Text style={tw`text-base font-medium text-center`}>Share your first post</Text>
                            <Text style={tw`text-gray-400 text-center`}>Upload a image with captions, sounds and more. Your posts will appear on your profile</Text>
                        </View>
                    )
            }
            <DeletePost
                handleVisible={handleVisibleDeleteModal}
                isVisible={isVisibleDeleteModal}
                isIdPostSelected={isIdPostSelected}
            />
        </View>
    )
}

export default Posts