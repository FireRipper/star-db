import React, { Component } from 'react'
import { StarshipDetails, StarshipList } from '../SwComponents'
import RowItem from '../containers/RowItem'

export default class StarshipsPage extends Component {
    state = {
        selectedItem: null
    }

    onItemSelected = (selectedItem) => {
        this.setState({ selectedItem })
    }

    render() {
        const { selectedItem } = this.state

        return (
            <RowItem
                left={<StarshipList/>}
                right={<StarshipDetails  itemId={selectedItem}/>}
            />
        )
    }
}
