import React, { Component } from 'react'

import Header from '../Header'
import RandomPlanet from '../RandomPlanet'
import ErrorButton from '../ErrorButton'
import ErrorIndicator from '../ErrorIndicator'

import './App.css'
import ErrorBoundary from '../ErrorBoundary'
import SwapiService from '../../services/swapi-service'
import ItemDetails  from '../ItemDetails'
import RecordItems from '../RecordItems'
import RowItem from '../containers/RowItem'

export default class App extends Component {

    swapiService = new SwapiService()

    state = {
        hasError: false
    }

    componentDidCatch(error, errorInfo) {
        console.log(errorInfo)
        this.setState({ hasError: true })
    }

    render() {
        const { getPerson, getPlanet, getPersonImage, getPlanetImage } = this.swapiService

        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        const personDetails = (
            <ItemDetails
                itemId={8}
                getData={getPerson}
                getImageUrl={getPersonImage}
            >
                <RecordItems field='gender' label='Gender' />
                <RecordItems field='eyeColor' label='Eye Color' />
                <RecordItems field='birthYear' label='Birth year' />
            </ItemDetails>)
        const planetDetails = (
            <ItemDetails
                itemId={3}
                getData={getPlanet}
                getImageUrl={getPlanetImage}
            >
                <RecordItems field='diameter' label='Diameter' />
                <RecordItems field='rotationPeriod' label='Rotation Period' />
                <RecordItems field='population' label='Population' />
            </ItemDetails>)

        return (
            <ErrorBoundary>
                <div className='container'>
                    <Header />
                    <RandomPlanet />
                    <ErrorButton />
                    <RowItem
                        left={personDetails}
                        right={planetDetails} />
                </div>
            </ErrorBoundary>
        )
    }
}
