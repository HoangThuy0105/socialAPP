import { View, Image, StyleSheet, Dimensions, PixelRatio } from 'react-native'
import React from 'react'
import tw from 'twrnc'
const { width, height } = Dimensions.get('window')

const ImageItem = ({ image }) => {
    PixelRatio.getPixelSizeForLayoutSize(width);

    return (
        <View>
            <Image
                // source={{ uri: image }}
                source={{ uri: `data:image/png;base64,${image}` }}
                style={[styles.image, tw`h-full`]}
                resizeMode='cover'
            />
        </View>
    )
}

export default ImageItem

const styles = StyleSheet.create({
    image: {
        width: width,
        // width - 24 ~ p-3
    },
})