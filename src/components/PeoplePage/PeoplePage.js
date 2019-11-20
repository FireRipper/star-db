import ItemList from '../ItemList'
import React, { Component } from 'react'
import RowItem from '../containers/RowItem'
import PersonDetails from '../PersonDetails'
import ErrorIndicator from '../ErrorIndicator'
import SwapiService from '../../services/swapi-service'


export default class PeoplePage extends Component {

    swapiService = new SwapiService()

    state = {
        selectedPerson: 3,
        hasError: false
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ hasError: true })
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        const itemList = (
            <ItemList
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPeople}
                renderItem={(item) => `${item.name} (${item.gender}, ${item.birthYear})`}
            />
        )

        const itemDetails = (<PersonDetails personId={this.state.selectedPerson} />)

        return (
            <RowItem left={itemList} right={itemDetails}/>
        )
    }
}

