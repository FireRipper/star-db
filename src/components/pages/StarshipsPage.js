import React, { Component } from 'react'
import { StarshipList } from '../SwComponents'
import RowItem from '../containers/RowItem'

export default class StarshipsPage extends Component {
    state = {
        selectedItem: null
    }

    onItemSelected = (selectedItem) => {
        this.setState({ selectedItem })
    }

    render() {
        return (
            <RowItem
                left={<StarshipList onItemSelected={this.onItemSelected} />}
                right={'Not working'} />
        )
    }
}
