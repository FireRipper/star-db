import ItemList from '../ItemList'
import React, { Component } from 'react'
import RowItem from '../containers/RowItem'
import ItemDetails from '../ItemDetails'
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
        const personList = (
            <ItemList
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPeople}
            >
                {
                    (item) => `${item.name}  (${item.birthYear})`
                }
            </ItemList>
        )

        const personDetails = (
            <ItemDetails
                itemId={this.state.selectedPerson}
                getData={this.swapiService.getPerson}
            />)

        return (
            <ErrorBoundary>
                <RowItem left={personList} right={personDetails} />
            </ErrorBoundary>
        )
    }
}

