import React from 'react'

import ItemDetails from '../ItemDetails'
import RecordItems from '../RecordItems'
import SwapiService from '../../services/swapi-service'

const swapiService = new SwapiService()

const {
    getPerson,
    getPlanet,
    getStarship,
    getPersonImage,
    getPlanetImage,
    getStarshipImage,
} = swapiService

const PersonDetails = ({ itemId }) => {
    return (
        <ItemDetails
            itemId={itemId}
            getData={getPerson}
            getImageUrl={getPersonImage}
        >
            <RecordItems field='gender' label='Gender' />
            <RecordItems field='eyeColor' label='Eye Color' />
            <RecordItems field='birthYear' label='Birth year' />
        </ItemDetails>
    )
}
const PlanetDetails = ({ itemId }) => {
    return (
        <ItemDetails
            itemId={itemId}
            getData={getPlanet}
            getImageUrl={getPlanetImage}
        >
            <RecordItems field='diameter' label='Diameter' />
            <RecordItems field='rotationPeriod' label='Rotation Period' />
            <RecordItems field='population' label='Population' />
        </ItemDetails>
    )
}
const StarshipDetails = ({ itemId }) => {
    return (
        <ItemDetails
            itemId={itemId}
            getData={getStarship}
            getImageUrl={getStarshipImage}
        >
            <RecordItems field='model' label='Model' />
            <RecordItems field='manufacturer' label='Manufacturer' />
            <RecordItems field='costInCredits' label='Cost In Credits' />
        </ItemDetails>
    )
}

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}
