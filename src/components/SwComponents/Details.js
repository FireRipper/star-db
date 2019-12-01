import ItemDetails from '../ItemDetails'
import { withDetails, withSwapiService, compose } from '../../hoc-helpers'

const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImageUrl: swapiService.getPersonImage
    }
}

const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanet,
        getImageUrl: swapiService.getPlanetImage
    }
}
const mapStarshipMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getStarship,
        getImageUrl: swapiService.getStarshipImage
    }
}

//hoc (param)(view)

const PersonDetails = compose(
    withSwapiService(mapPersonMethodsToProps),
    withDetails
)(ItemDetails)

const PlanetDetails = compose(
    withSwapiService(mapPlanetMethodsToProps),
    withDetails
)(ItemDetails)

const StarshipDetails = compose(
    withSwapiService(mapStarshipMethodsToProps),
    withDetails
)(ItemDetails)

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}
