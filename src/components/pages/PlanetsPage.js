import React, { Component } from 'react'
import { PlanetDetails, PlanetList } from '../SwComponents'
import { Record } from '../ItemDetails/ItemDetails'
import RowItem from '../containers/RowItem'

export default class PlanetsPage extends Component {
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
                left={<PlanetList onItemSelected={this.onItemSelected} />}
                right={
                    <PlanetDetails itemId={selectedItem}>
                        <Record field='diameter' label='Diameter' />
                        <Record field='rotationPeriod' label='Rotation Period' />
                        <Record field='population' label='Population' />
                    </PlanetDetails>
                } />
        )
    }
}
