import React, { Component } from 'react'
import { PersonDetails, PersonList } from '../SwComponents'
import { Record } from '../ItemDetails/ItemDetails'
import RowItem from '../containers/RowItem'

export default class PeoplePage extends Component {
    state = {
        selectedItem: null
    }

    onItemSelected = (selectedItem) => {
        this.setState({selectedItem})
    }

    render() {
        const { selectedItem } = this.state

        return (
            <RowItem
                left={<PersonList onItemSelected={this.onItemSelected} />}
                right={
                    <PersonDetails itemId={selectedItem}>
                        <Record field='gender' label='Gender' />
                        <Record field='eyeColor' label='Eye Color' />
                        <Record field='birthYear' label='Birth year' />
                    </PersonDetails>
                } />
        )
    }
}
