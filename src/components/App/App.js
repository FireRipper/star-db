import React, { Component } from 'react'
import Header from '../Header'
import RandomPlanet from '../RandomPlanet'
import ErrorButton from '../ErrorButton'
import ErrorIndicator from '../ErrorIndicator'
import ErrorBoundary from '../ErrorBoundary'
import RowItem from '../containers/RowItem'
import { SwapiServiceProvider } from '../SwapiServiceContext'
import { Record } from '../ItemDetails/ItemDetails'
import SwapiService from '../../services/swapi-service'
import {
    PersonList,
    PlanetList,
    StarshipList,
    PersonDetails,
    PlanetDetails
} from '../SwComponents'
import './App.css'


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

        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        return (
            <ErrorBoundary>
                <SwapiServiceProvider value={this.swapiService}>
                    <div className='container'>
                        <Header />
                        <RandomPlanet />
                        <ErrorButton />
                        <RowItem
                            left={<PersonList />}
                            right={
                                <PersonDetails itemId={11}>
                                    <Record field='gender' label='Gender' />
                                    <Record field='eyeColor' label='Eye Color' />
                                    <Record field='birthYear' label='Birth year' />
                                </PersonDetails>
                            } />
                        <RowItem
                            left={<PlanetList />}
                            right={
                                <PlanetDetails itemId={2}>
                                    <Record field='diameter' label='Diameter' />
                                    <Record field='rotationPeriod' label='Rotation Period' />
                                    <Record field='population' label='Population' />
                                </PlanetDetails>
                            } />
                        <RowItem
                            left={<StarshipList />}
                            right={'Not working!'} />
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundary>
        )
    }
}
