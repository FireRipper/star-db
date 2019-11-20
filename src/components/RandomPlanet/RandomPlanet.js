import React, { Component } from 'react'
import SwapiService from '../../services/swapi-service'
import Spinner from '../Spinner'
import PlanetView from './PlanetView'
import ErrorIndicator from '../ErrorIndicator'

import './RandomPlanet.css'

export default class RandomPlanet extends Component {

    swapiService = new SwapiService()

    state = {
        planet: {},
        loading: true,
        error: false
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    componentDidMount() {
        this.updatePlanet()
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false
        })
    }

    updatePlanet() {
        const id = Math.floor(Math.random() *10) + 2
        this.swapiService.getPlanet(id).then(this.onPlanetLoaded).catch(this.onError)
    }

    render() {

        const { planet, loading, error } = this.state

        const hasData = !(loading || error)

        const errorMessage = error ? <ErrorIndicator /> : null
        const spinner = loading ? <Spinner /> : null
        const content = hasData ? <PlanetView planet={planet} /> : null

        return (
            <div className={`random-planet jumbotron rounded ${loading ? ' justify-content-center' : null}`}>
                {errorMessage}
                {spinner}
                {content}
            </div>
        )
    }
}
