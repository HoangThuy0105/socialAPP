import { View, Text, SafeAreaView, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import NotificationItem from '../Components/Notification/NotificationItem';

const data = [
    {
        postId: '1',
        image:
            'https://i.vietgiaitri.com/2021/2/9/cara-phuong-toi-va-noway-dang-tim-hieu-nhau-thay-cung-hoa-hop-975-5573060.jpg',
        title: 'abc dcc ddkjd dkdi thah jiodj ijdoijd ohello good mornig aloo halo jdijdoo '
    },
    {
        postId: '2',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Kim_Ji-soo_at_Incheon_Airport%2C_heading_to_Amsterdam_on_May_16th%2C_2019_21.png/1200px-Kim_Ji-soo_at_Incheon_Airport%2C_heading_to_Amsterdam_on_May_16th%2C_2019_21.png',
        title: 'abc dcc ddkjd dkdi thah jiodj ijdoijd ohello good mornig aloo halo jdijdoo '
    },
    {
        postId: '3',
        image: 'https://2sao.vietnamnetjsc.vn/images/2022/02/20/21/00/IU-2.jpg',
        title: 'abc dcc ddkjd dkdi thah jiodj ijdoijd ohello good mornig aloo halo jdijdoo '
    }
    ,
    {
        postId: '4',
        image: 'https://afamilycdn.com/150157425591193600/2021/6/8/photo-1-16229736437071881672186-16231223886751522999177.jpg',
        title: 'abc dcc ddkjd dkdi thah jiodj ijdoijd ohello good mornig aloo halo jdijdoo '
    }
    ,
    {
        postId: '5',
        image: 'https://nguoinoitieng.tv/images/nnt/96/2/bbnh.jpg',
        title: 'abc dcc ddkjd dkdi thah jiodj ijdoijd ohello good mornig aloo halo jdijdoo '
    }
    ,
    {
        postId: '6',
        image: 'https://thuthuatnhanh.com/wp-content/uploads/2021/06/Hinh-anh-Rose-Black-Pink-1.jpg',
        title: 'abc dcc ddkjd dkdi thah jiodj ijdoijd ohello good mornig aloo halo jdijdoo '
    }
]

const NotificationScreen = () => {
    return (
        <SafeAreaView style={tw`flex flex-1 bg-white`}>
            <View style={tw`flex flex-1`}>
                <TouchableOpacity
                    style={tw`flex flex-row items-center justify-between border-b border-gray-200 `}
                >
                    <Text style={tw`text-base font-medium p-3`}>Follow Requests</Text>
                    <Text style={tw`mr-5 px-1.5 py-1 text-white font-medium bg-pink-500 rounded-full`}>10</Text>
                </TouchableOpacity>
                <FlatList
                    data={data}
                    renderItem={(item) => (<NotificationItem item={item} />)}
                    keyExtractor={(item) => item.postId}
                />
            </View>
        </SafeAreaView>
    )
}

export default NotificationScreen