import { View, Text, SafeAreaView, TouchableOpacity, TextInput, FlatList } from 'react-native'
import React, { useRef } from 'react'
import tw from 'twrnc';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import MessageItem from '../Components/Chatbox/MessageItem'

const data = [
    {
        id: '1',
        image: 'https://indotech.vn/hinh-anh-cua-rose-black-pink/imager_2_12521_700.jpg',
        name: 'Rose',
        email: 'Rose@gmail.com'
    },
    {
        id: '2',
        image: 'https://nguoinoitieng.tv/images/nnt/96/0/bbnh.jpg',
        name: 'Cara',
        email: 'Cara@gmail.com'
    },
    {
        id: '3',
        image: 'https://1.bp.blogspot.com/-xoe-yLLhMsA/X3XmnozvxCI/AAAAAAAAPWE/Px6lNykKtiswyxWfgH_qgmqojUN__F4DwCLcBGAsYHQ/s1600/5a129327b91c191dcd7e2eed9c6b7d1d.jpg',
        name: 'IU',
        email: 'IU@gmail.com'
    },
    {
        id: '4',
        image: 'https://photo-cms-tpo.zadn.vn/w890/uploads/2017/08/598f116c25449-view08-600x450.png',
        name: 'Nayeon',
        email: 'Nayeon@gmail.com'
    },
    {
        id: '5',
        image: 'https://static1.bestie.vn/Mlog/ImageContent/202110/my-nhan-hoa-ngu-so-huu-ma-banh-bao-ai-du-xinh-dep-vuot-trieu-lo-tu-88d143.jpg',
        name: 'Tuanle',
        email: 'Tuanle@gmail.com'
    }
]


const ChatBoxScreen = () => {
    const navigation = useNavigation()
    const searchTextInput = useRef();
    return (
        <SafeAreaView style={tw`flex flex-1 bg-white`}>
            <View style={tw`relative flex flex-row p-3`}>
                <TouchableOpacity
                    style={tw`absolute top-0 left-0`}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={tw`py-2 pl-4 pr-8`}><FontAwesome name="angle-left" style={tw`text-black text-2xl`} /></Text>
                </TouchableOpacity>
                <Text style={tw`flex-1 text-lg font-bold text-center`}>Message</Text>
            </View>
            <View style={tw`flex flex-row items-center mx-3 mb-3 bg-[#F3F0F6] rounded-lg overflow-hidden`}>
                <TouchableOpacity
                    activeOpacity={.8}
                    onPress={() => { searchTextInput.current.focus(); }}
                >
                    <Ionicons name="ios-search-outline" style={tw`text-xl text-gray-400 px-1.5`} />
                </TouchableOpacity>
                <TextInput
                    placeholder='Search...'
                    style={tw`flex-1 py-2.5`}
                    ref={searchTextInput}
                />
            </View>
            <FlatList
                data={data}
                renderItem={(item) => (<MessageItem item={item} />)}
                keyExtractor={(item) => item.id}
            />

        </SafeAreaView>
    )
}

export default ChatBoxScreen