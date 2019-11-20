import React, { Component } from 'react'

import Header from '../Header'
import PeoplePage from '../PeoplePage'
import RandomPlanet from '../RandomPlanet'
import ErrorButton from '../ErrorButton'
import ErrorIndicator from '../ErrorIndicator'
import ItemList from '../ItemList'
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
                        />
                    </div>
                    <div className="col-md-6">

                    </div>
                </div>
            </div>
        )
    }
}
