import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Card from './card';
import CarSection from './cardSection';

const AlbumDetail = (props) => {
    return (
        <Card>            
            <CarSection>
                <Text>{props.album.title}</Text>    
            </CarSection>
        </Card>
    );
};

export default AlbumDetail;