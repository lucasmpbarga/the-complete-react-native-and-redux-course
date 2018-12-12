import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import AlbumDetail from './albumDetail'

class AlbumList extends Component {
    state = { albums: [] };

    componentWillMount(){
        axios.get('http://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));
    }

    renderAlbums(){
        return this.state.albums.map(album => 
            <AlbumDetail key={album.title} album={album}/>
        );
    }

    render(){
        return(
            <View>
                {this.renderAlbums()}
            </View>
        );
    }
}

export default AlbumList;