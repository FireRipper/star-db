import ItemList from '../ItemList'
import React, { Component } from 'react'
import RowItem from '../containers/RowItem'
import PersonDetails from '../PersonDetails'
import SwapiService from '../../services/swapi-service'
import ErrorBoundary from '../ErrorBoundary'

export default class PeoplePage extends Component {

    swapiService = new SwapiService()

    state = {
        selectedPerson: 3,
        hasError: false
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }

    render() {
        const itemList = (
            <ItemList
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPeople}
            >
                {
                    (item) => `${item.name}  (${item.birthYear})`
                }
            </ItemList>
        )

        const itemDetails = (<PersonDetails personId={this.state.selectedPerson} />)

        return (
            <ErrorBoundary>
                <RowItem left={itemList} right={itemDetails} />
            </ErrorBoundary>
        )
    }
}

