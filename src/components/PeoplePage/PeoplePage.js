import React, { Component } from 'react'
import ItemList from '../ItemList'
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

        if(this.state.hasError) {
            return  <ErrorIndicator />
        }

        return (
            <div className="row mb-2">
                <div className="col-md-6">
                    <ItemList
                        onItemSelected={this.onPersonSelected}
                        getData={this.swapiService.getAllPeople}
                        renderItem={(item) => `${item.name} (${item.gender}, ${item.birthYear})`}
                    />
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={this.state.selectedPerson} />
                </div>
            </div>
        )
    }
}

