import React, { Component } from 'react'
import Header from '../Header'
import RandomPlanet from '../RandomPlanet'
import ErrorButton from '../ErrorButton'
import ErrorIndicator from '../ErrorIndicator'
import ErrorBoundary from '../ErrorBoundary'
import SwapiService from '../../services/swapi-service'
import { SwapiServiceProvider } from '../SwapiServiceContext'
import DummySwapiService from '../../services/dummy-swapi-service'
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages'
import './App.css'


export default class App extends Component {

    state = {
        hasError: false,
        swapiService: new SwapiService()
    }

    onServiceChange = () => {
        this.setState(({ swapiService }) => {
            const Service = swapiService instanceof SwapiService ?
                DummySwapiService : SwapiService

            return {
                swapiService: new Service()
            }
        })
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
                <SwapiServiceProvider value={this.state.swapiService}>
                    <div className='container'>
                        <Header onServiceChange={this.onServiceChange}/>
                        <RandomPlanet />
                        <ErrorButton />
                        <PeoplePage />
                        <PlanetsPage />
                        <StarshipsPage />
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundary>
        )
    }
}
