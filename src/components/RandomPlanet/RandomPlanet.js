import React, { Component } from 'react'
import Spinner from '../Spinner'
import PlanetView from './PlanetView'
import SwapiService from '../../services/swapi-service'
import ErrorIndicator from '../ErrorIndicator'

import './RandomPlanet.css'

export default class RandomPlanet extends Component {

    swapiService = new SwapiService()

    state = {
        planet: {},
        loading: true,
        error: false
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    constructor() {
        super()
        this.updatePlanet()
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false
        })
    }

    updatePlanet() {
        const id = 15
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError)
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