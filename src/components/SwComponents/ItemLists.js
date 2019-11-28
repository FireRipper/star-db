import React from 'react'
import ItemList from '../ItemList'
import { withData } from '../../hoc-helpers/withData'
import SwapiService from '../../services/swapi-service'

const swapiService = new SwapiService()

const {
    getAllPeople,
    getAllPlanets,
    getAllStarships
} = swapiService

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
}

const renderName = ({ name }) => <span>{name}</span>
const renderDiameterAndName = ({ diameter, name }) => <span>{name} (Diameter: {diameter})</span>

const PersonList = withData(withChildFunction(ItemList, renderName
), getAllPeople)

const PlanetList = withData(withChildFunction(ItemList, renderDiameterAndName
), getAllPlanets)

const StarshipList = withData(withChildFunction(ItemList, renderName
), getAllStarships)

export {
    PersonList,
    PlanetList,
    StarshipList
}
