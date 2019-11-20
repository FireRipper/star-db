import React, { Component, Fragment } from 'react'

import Header from '../Header'
import PeoplePage from '../PeoplePage'
import RandomPlanet from '../RandomPlanet'
import ErrorButton from '../ErrorButton'
import ErrorIndicator from '../ErrorIndicator'
import ItemList from '../ItemList'
import PersonDetails from '../PersonDetails'
import SwapiService from '../../services/swapi-service'

import './App.css'

export default class App extends Component {

    swapiService = new SwapiService()

    state = {
        hasError: false
    }

    componentDidCatch(error, errorInfo) {
        console.log(errorInfo)
        this.setState({hasError: true})
    }

    render() {

        if ( this.state.hasError) {
            return <ErrorIndicator />
        }

        return (
            <div className='container'>
                <Header />
                <RandomPlanet />
                <ErrorButton />
                <PeoplePage />
                <div className="row mb-2">
                    <div className="col-md-6">
                        <ItemList
                            onItemSelected={this.onPersonSelected}
                            getData={this.swapiService.getAllPlanets}
                            renderItem={(item) => (<Fragment>{item.name}<b> Diameter: {item.diameter}</b></Fragment>)}
                        />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={this.state.selectedPerson} />
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-md-6">
                        <ItemList
                            onItemSelected={this.onPersonSelected}
                            getData={this.swapiService.getAllStarships}
                            renderItem={(item) => `${item.name}, ${item.model}`}
                        />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={this.state.selectedPerson} />
                    </div>
                </div>
            </div>
        )
    }
}
