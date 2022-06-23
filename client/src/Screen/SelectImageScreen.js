import { View, Text, SafeAreaView, TouchableOpacity, Image, Dimensions } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc';
import * as ImagePicker from 'expo-image-picker';
import { EvilIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { BlurView } from 'expo-blur'

const SelectImageScreen = () => {
    const [image, setImage] = useState(null)
    const navigation = useNavigation();
    const { width: SCREEN_WIDTH } = Dimensions.get('window');
    const FRAMESIZE_W = SCREEN_WIDTH;
    const FRAMESIZE_H = SCREEN_WIDTH / 2 * 2.5;



    const handleSelectPicture = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            base64: true,
            aspect: [2, 3],
            quality: 1,
        })

        if (!result.cancelled) {
            // const image = {
            //     uri: Platform.OS == 'ios' ? result.uri.substr(7) : result.uri,
            //     name: result.fileName || result.uri.substr(result.uri.lastIndexOf('/') + 1)
            // }
            setImage(result.base64);
        }
    }

    return (
        <SafeAreaView style={tw`flex flex-1 bg-white`}>
            <View style={tw`p-2 border-b border-gray-200`}>
                <Text style={tw`font-medium text-lg text-center`}>Select Image</Text>
            </View>
            {image
                ? (
                    <View style={[tw`flex-1 items-center`]}>
                        <Image
                            source={{ uri: `data:image/png;base64,${image}` }}
                            // source={{ uri: image.uri }}
                            style={tw`w-full h-full`}
                        />
                    </View>
                )
                : (
                    <View style={tw`flex flex-1 items-center justify-center`}>
                        <View style={tw`flex justify-center items-center w-25 h-25 border-2 border-pink-500 rounded-full`}>
                            <EvilIcons name="camera" style={tw`text-5xl text-pink-500`} />
                        </View>
                        <Text style={tw`text-base text-pink-500 font-medium my-2`}>Photos will be displayed here</Text>
                    </View>
                )
            }
            <View style={tw`absolute bottom-0 left-0 right-0 px-3 py-1`}>
                <BlurView
                    intensity={30}
                    style={[tw`flex flex-row items-center justify-center w-full py-2 rounded-lg overflow-hidden`]}
                >
                    {
                        image ? (
                            <TouchableOpacity
                                onPress={() => setImage(null)}
                                style={tw`absolute left-3 top-0 bottom-0 flex flex-row items-center p-2.5`}
                                activeOpacity={.8}
                            >
                                <AntDesign name="close" style={tw`text-pink-500 text-xl`} />
                                <Text style={tw`text-pink-500 font-medium text-base ml-1.5`}>Cancel</Text>
                            </TouchableOpacity>
                        ) : (
                            <Text />
                        )
                    }
                    <TouchableOpacity style={tw`items-center px-7 mx-3 bg-pink-500 rounded-lg`}>
                        <Text
                            onPress={handleSelectPicture}
                            style={tw`py-2 text-base font-medium text-white`}
                        >
                            Gallery
                        </Text>
                    </TouchableOpacity>
                    {
                        image ? (
                            <TouchableOpacity
                                onPress={() => navigation.navigate('UploadImageStack', { image: image })}
                                style={tw`absolute right-3 top-0 flex flex-row items-center p-2`}
                                activeOpacity={.8}
                            >
                                <Text style={tw`py-2 text-pink-500 font-medium text-base`}>Next</Text>
                                <FontAwesome name="angle-right" style={tw`text-pink-500 text-2xl ml-1.5`} />
                            </TouchableOpacity>
                        ) : (
                            <Text />
                        )
                    }
                </BlurView>
            </View>
        </SafeAreaView>
    )
}

export default SelectImageScreen