import React from 'react'
import ItemList from '../ItemList'
import { withData, withSwapiService, withChildFunction, compose } from '../../hoc-helpers'

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

//hoc (param)   (View (hoc (param)(ItemList)  ))
const PersonList = compose(
    withSwapiService(mapPeopleMethodsToProps),
    withData,
    withChildFunction(renderName)
)(ItemList)

const PlanetList = compose(
    withSwapiService(mapPlanetsMethodsToProps),
    withData,
    withChildFunction(renderDiameterAndName)
)(ItemList)

const StarshipList = compose(
    withSwapiService(mapStarshipsMethodsToProps),
    withData,
    withChildFunction(renderName)
)(ItemList)

export {
    PersonList,
    PlanetList,
    StarshipList
}
