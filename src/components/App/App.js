import React, { Component } from 'react'

import Header from '../Header'
import RandomPlanet from '../RandomPlanet'
import ErrorButton from '../ErrorButton'
import ErrorIndicator from '../ErrorIndicator'

import './App.css'
import ErrorBoundary from '../ErrorBoundary'
import RowItem from '../containers/RowItem'
import {
    PersonList,
    PlanetList,
    StarshipList,
    PersonDetails,
    PlanetDetails
} from '../SwComponents'

export default class App extends Component {

    state = {
        hasError: false
    }

    componentDidCatch(error, errorInfo) {
        console.log(errorInfo)
        this.setState({ hasError: true })
    }

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        return (
            <ErrorBoundary>
                <div className='container'>
                    <Header />
                    <RandomPlanet />
                    <ErrorButton />
                    <RowItem
                        left={<PersonList />}
                        right={<PersonDetails itemId={11} />} />
                    <RowItem
                        left={<PlanetList />}
                        right={<PlanetDetails itemId={5} />} />
                    <RowItem
                        left={<StarshipList />}
                        right={'Not working!'} />
                </div>
            </ErrorBoundary>
        )
    }
}
