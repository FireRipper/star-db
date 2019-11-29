import React from 'react'
import ItemList from '../ItemList'
import { withData, withSwapiService, withChildFunction } from '../../hoc-helpers'

const mapPeopleMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    }
}

const mapPlanetsMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    }
}
const mapStarshipsMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    }
}

const renderName = ({ name }) => <span>{name}</span>
const renderDiameterAndName = ({ diameter, name }) => <span>{name} (Diameter: {diameter})</span>

const PersonList = withSwapiService(withData(withChildFunction(ItemList, renderName
)), mapPeopleMethodsToProps)

const PlanetList = withSwapiService(withData(withChildFunction(ItemList, renderDiameterAndName
)), mapPlanetsMethodsToProps)

const StarshipList = withSwapiService(withData(withChildFunction(ItemList, renderName
)), mapStarshipsMethodsToProps)

export {
    PersonList,
    PlanetList,
    StarshipList
}
