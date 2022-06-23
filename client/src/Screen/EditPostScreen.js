import { View, Text, SafeAreaView, TouchableOpacity, Dimensions, Image, TouchableWithoutFeedback, TextInput, Switch } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import FormData from 'form-data';
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../redux/actions/post'

const { width: SCREEN_WIDTH } = Dimensions.get('window');
// frame size 3:2
const FRAMESIZE_W = SCREEN_WIDTH;
const FRAMESIZE_H = SCREEN_WIDTH / 2 * 3;

const EditPostScreen = ({ navigation, route }) => {
    const dispatch = useDispatch()
    const token = useSelector((state) => state.auth.currentUser.accessToken)
    const userId = useSelector((state) => state.auth.currentUser._id)

    const content = route.params.content
    const Base64Image = route.params.images
    const postId = route.params.postId
    const [isCaption, setCaption] = useState(content)
    const [image, setImage] = useState(Base64Image)
    const [isEnabled, setIsEnabled] = useState(false);

    const handleSelectPicture = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            base64: true,
            aspect: [2, 3],
            quality: 1,
        })

        if (!result.cancelled) {
            setImage(result.base64);
        }
    }

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const handleSubmit = () => {
        let formData = new FormData();
        formData.append('_id', postId)
        formData.append('images', image)
        formData.append('content', isCaption)
        formData.append('status', isEnabled)
        formData.append('userId', userId)

        dispatch(actions.updatePostStart({ token, formData }))
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
                    <Text style={tw`flex-1 text-lg font-bold text-center`}>Edit Post</Text>
                </View>
                <View style={tw`bg-[#F5F7FA] p-3 flex h-full`}>
                    <View style={tw`flex flex-row `}>
                        <View>
                            <View style={tw`shadow-lg`}>
                                <Image
                                    source={{ uri: `data:image/png;base64,${image}` }}
                                    // source={require('../images/login-bg.jpg')}
                                    style={[tw`mr-2 rounded-[1]`, { width: FRAMESIZE_W / 3, height: FRAMESIZE_H / 3 }]}
                                />
                                <TouchableOpacity style={tw`items-center justify-center mt-2 h-[40px] mr-2 bg-gray-300 rounded-lg`}>
                                    <Text
                                        onPress={handleSelectPicture}
                                        style={tw`text-base font-medium text-black`}
                                    >
                                        Change picture
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
                            <View style={tw`h-full flex-1 flex`}>
                                <TextInput
                                    multiline={true}
                                    value={isCaption}
                                    style={[tw`bg-white text-base px-3 py-2`, { height: FRAMESIZE_H / 3 + 45 }]}
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
                            <Text style={tw`text-center font-medium text-base text-white`}>Done</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default EditPostScreen