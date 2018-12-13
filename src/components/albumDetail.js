import React, { Component } from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './card';
import CarSection from './cardSection';
import CardSection from './cardSection';
import Button from './button';

const AlbumDetail = ({ album }) => {
    const { 
        title, 
        artist, 
        thumbnail_image,
        image,
        url
    } = album
    
    const { 
        viewContainerStyle, 
        itemContentStyle,
        textTitleStyle, 
        thumbnailContainerStyle, 
        thumbnailStyle,
        imageStyle
    } = styles

    return (
        <Card>            
            <CarSection>
                <View style={viewContainerStyle} > 
                    <View style={thumbnailContainerStyle}>
                        <Image
                            style={ thumbnailStyle } 
                            source={{ uri: thumbnail_image}} 
                        />
                    </View>
                    <View style={ itemContentStyle }>
                        <Text style={ textTitleStyle }>{title}</Text>
                        <Text>{artist}</Text>
                    </View>    
                </View>                
            </CarSection>

            <CardSection>
                <Image
                    style={ imageStyle }
                    source={{ uri: image }}
                />
            </CardSection>
            
            <CarSection>
                <Button onPress={ () => Linking.openURL(url)}>
                    Buy Now
                </Button>
            </CarSection>
        </Card>
    );
};

const styles = {
    viewContainerStyle:{
        flexDirection: 'row'
    },
    itemContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    textTitleStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10 
    },
    imageStyle: {
        height: 300,
        flex: 1, 
        alignSelf: 'stretch'
    }
};

export default AlbumDetail;