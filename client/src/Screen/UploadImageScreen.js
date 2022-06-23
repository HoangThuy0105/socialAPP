import { View, Text, SafeAreaView, TouchableOpacity, Dimensions, Image, TouchableWithoutFeedback, TextInput, Switch } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import FormData from 'form-data';
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../redux/actions/post'

const { width: SCREEN_WIDTH } = Dimensions.get('window');
// frame size 3:2
const FRAMESIZE_W = SCREEN_WIDTH;
const FRAMESIZE_H = SCREEN_WIDTH / 2 * 3;


const UploadImageScreen = ({ navigation, route }) => {
    const dispatch = useDispatch()
    const token = useSelector((state) => state.auth.currentUser.accessToken)
    const UserId = useSelector((state) => state.auth.currentUser._id)

    const { image } = route.params
    const [isEnabled, setIsEnabled] = useState(false);
    const [isCaption, setCaption] = useState('')

    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState)
    }

    const handleSubmit = () => {
        let formData = new FormData();
        formData.append('images', image)
        formData.append('content', isCaption)
        formData.append('author', UserId)
        formData.append('status', isEnabled)

        dispatch(actions.createPostStart({ formData, token, UserId }))
        // navigation.navigate('HomeStack')
    }

    return (
        <SafeAreaView style={tw`bg-white flex flex-1`}>
            <View>
                <View style={tw`relative flex flex-row  border-b border-gray-200 p-3`}>
                    <TouchableOpacity
                        style={tw`absolute top-0 left-0`}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={tw`py-2 pl-4 pr-8`}><FontAwesome name="angle-left" style={tw`text-black text-2xl`} /></Text>
                    </TouchableOpacity>
                    <Text style={tw`flex-1 text-lg font-bold text-center`}>Create Post</Text>
                </View>
                <View style={tw`bg-[#F5F7FA] p-3 flex h-full`}>
                    <View style={tw`flex flex-row `}>
                        <View style={tw`shadow-lg`}>
                            <Image
                                source={{ uri: `data:image/png;base64,${image}` }}
                                // source={{ uri: image.uri }}
                                style={[tw`mr-2 rounded-[1]`, { width: FRAMESIZE_W / 3, height: FRAMESIZE_H / 3 }]}
                            />
                        </View>
                        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
                            <View style={tw`h-full flex-1 flex`}>
                                <TextInput
                                    multiline={true}
                                    placeholder='Your caption...'
                                    style={[tw`bg-white text-base px-3 py-2`, { height: FRAMESIZE_H / 3 }]}
                                    onChangeText={val => setCaption(val)}
                                />
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={tw`mt-2`}>
                        <View style={tw`flex flex-row items-center h-13 justify-between bg-white p-3 rounded `}>
                            <Text style={tw`text-base`}>Only me</Text>
                            <Switch
                                trackColor={{ false: "#bfbfbe", true: "#EC4899" }}
                                thumbColor={isEnabled ? "#fff" : "#fff"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                        <TouchableOpacity
                            onPress={handleSubmit}
                            style={tw`bg-pink-500 py-4 mt-2 rounded-lg `}
                        >
                            <Text style={tw`text-center font-medium text-base text-white`}>Create Post</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default UploadImageScreen