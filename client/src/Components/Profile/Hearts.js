import { View, Text } from 'react-native'
import React from 'react'
import { FlatGrid } from 'react-native-super-grid';
import PostItem from './PostItem'
import tw from 'twrnc';


const data = [
    {
        postId: '1',
        image:
            'https://monngon.tv/wp-content/uploads/2022/03/kim-se-jeong-de-mai-ca-chuc-nam-khong-mai-nhin-la-lam-y-nguoi-khac-2df58c.jpg',
        title: ''
    },
    {
        postId: '2',
        image: 'https://i.vietgiaitri.com/2020/4/30/kim-se-jeong-ioi-tu-a-quan-produce-101-den-con-ghe-quoc-dan-vi-lam-dieu-dai-dot-nay-83f-4892557.jpeg',
        title: ''
    },
    {
        postId: '3',
        image: 'https://i.pinimg.com/550x/b5/34/b3/b534b37150101c3882d29a4f8424769d.jpg',
        title: ''
    }
    ,
    {
        postId: '4',
        image: 'https://w0.peakpx.com/wallpaper/310/106/HD-wallpaper-jisoo-blackpink-blink-blue-cute-jiso-korea-kpop-singel-song.jpg',
        title: ''
    }
    ,
    {
        postId: '5',
        image: 'https://afamilycdn.com/150157425591193600/2021/6/8/photo-1-16229736437071881672186-16231223886751522999177.jpg',
        title: ''
    }
    ,
    {
        postId: '6',
        image: 'https://i.pinimg.com/originals/9e/36/c8/9e36c849effa00c3946d15a976febd03.png',
        title: ''
    }
]

const Images = () => {
    return (
        <View style={tw`flex-1`}>
            <FlatGrid
                data={data}
                itemDimension={100}
                renderItem={(item) => <PostItem item={item} />}
                style={tw`pt-2 bg-white`}
                keyExtractor={item => item.postId}
                spacing={5}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default Images