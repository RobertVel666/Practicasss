import React, { Component } from 'react'
import { 
    ListView,
    TouchableOpacity
 } from 'react-native'

import ArtistBox from './ArtistBox'

import { Actions } from 'react-native-router-flux'

export default class ArtistList extends Component<Props> {
    constructor(props) {
        super()
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        this.state = {
            dataSource: ds
        }
    }
    componentDidMount(){
        this.updateDataSource(this.props.artists)
    }

    componentWillReceiveProps(newProps) {
        if (newProps.artists !== this.props.artists) {
            this.updateDataSource(newProps.artists)
        }
    }
    updateDataSource = (data) => {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(data)
        })
    }
    handlePress(artist) {
        Actions.artistDetail({artist: artist})
    }
    render(){
        return(
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
            />
        )
    }
}

const styles = StyleSheet.create({
    artistBox: {
        margin: 5,
        backGroundColor: 'white',
        flexDirection: 'row',
        shadowColor: 'black',
        shadowOpacity: .1,
        shadowoffset: {
            height: 1,
            width: -2
        },
        elevation: 2
    },
    image: {
        width: 150,
        height: 150
    },
    info: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    name: {
        fontSize: 20,
        marginTop: 10,
        color: '#333'
    },
})