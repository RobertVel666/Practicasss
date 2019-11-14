import React, { Component } from 'react'
import { 
    TouchableOpacity,
    FlatList,
    RefreshControl,
    View
 } from 'react-native'

import ArtistBox from './ArtistBox'

import { Actions } from 'react-native-router-flux'

export default class ArtistList extends Component<Props> {
    /*constructor(props) {
        super()
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        this.state = {
            dataSource: ds
        }
    }*/

    renderRefreshControl() {
        this.setState({ isLoading: true })
        this.props.getArtist()
    }

    handlePress(artist) {
        Actions.artistDetail({artist: artist})
    }

    render(){
        return(
            /*
            <ListView
                enableEmptySections = {true}
                dataSource = {this.state.dataSource}
                renderRow = {(artist) => {
                    return(
                        <TouchableOpacity onPress = {() => this.handlePress(artist)}>
                            <ArtistBox artist = {artist}/>
                        </TouchableOpacity>
                    )
                }}
            />*/
            <FlatList
                data = {this.props.artist}
                renderItem = {(artist)}
            />
        )
    }
}
