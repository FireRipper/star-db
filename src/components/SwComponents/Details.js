import ItemDetails from '../ItemDetails'
import { withDetails, withSwapiService } from '../../hoc-helpers'

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

const PersonDetails = withSwapiService(
                        withDetails(ItemDetails)
                        , mapPersonMethodsToProps)
const PlanetDetails = withSwapiService(
                        withDetails(ItemDetails)
                        , mapPlanetMethodsToProps)
const StarshipDetails = withSwapiService(
                        withDetails(ItemDetails)
                        , mapStarshipMethodsToProps)

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}
