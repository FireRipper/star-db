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
import RecordItems from '../RecordItems'

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
                        right={
                            <PersonDetails itemId={11}>
                                <RecordItems field='gender' label='Gender' />
                                <RecordItems field='eyeColor' label='Eye Color' />
                                <RecordItems field='birthYear' label='Birth year' />
                            </PersonDetails>
                        } />
                    <RowItem
                        left={<PlanetList />}
                        right={
                            <PlanetDetails itemId={2}>
                                <RecordItems field='diameter' label='Diameter' />
                                <RecordItems field='rotationPeriod' label='Rotation Period' />
                                <RecordItems field='population' label='Population' />
                            </PlanetDetails>
                        } />
                    <RowItem
                        left={<StarshipList />}
                        right={'Not working!'} />
                </div>
            </ErrorBoundary>
        )
    }
}
