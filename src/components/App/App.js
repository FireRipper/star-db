import React, { Component } from 'react'
import Header from '../Header'
import RandomPlanet from '../RandomPlanet'
import ErrorIndicator from '../ErrorIndicator'
import ErrorBoundary from '../ErrorBoundary'
import SwapiService from '../../services/swapi-service'
import { SwapiServiceProvider } from '../SwapiServiceContext'
import DummySwapiService from '../../services/dummy-swapi-service'
import { PeoplePage, PlanetsPage, StarshipsPage, LoginPage, SecretPage } from '../pages'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import { PlanetDetails } from '../SwComponents'

export default class App extends Component {

    state = {
        hasError: false,
        swapiService: new SwapiService(),
        isLoggedIn: false
    }

    onLogin = () => {
        this.setState({
            isLoggedIn: true
        })
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

        const { hasError, isLoggedIn, swapiService } = this.state

        if (hasError) {
            return <ErrorIndicator />
        }

        return (
            <ErrorBoundary>
                <SwapiServiceProvider value={swapiService}>
                    <Router>
                        <div className='container'>
                            <Header onServiceChange={this.onServiceChange} />
                            <RandomPlanet />
                            <Switch>
                                <Route path='/' exact render={() => <h2>Welcome to StarDB</h2>} />
                                <Route path='/people/:id?' component={PeoplePage} />
                                <Route path='/planets/' exact component={PlanetsPage} />
                                <Route path='/planets/:id'
                                       render={({ match }) => {
                                           const { id } = match.params
                                           return (
                                               <PlanetDetails itemId={id} />
                                           )
                                       }} />
                                <Route path='/starships/' component={StarshipsPage} />
                                <Route path='/login'
                                       render={() => <LoginPage
                                           isLoggedIn={isLoggedIn}
                                           onLogin={this.onLogin} />} />
                                <Route path='/secret'
                                       render={() => <SecretPage isLoggedIn={isLoggedIn} />} />
                                <Route render={() => <h2>Page not found</h2>}/>
                            </Switch>
                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundary>
        )
    }
}
