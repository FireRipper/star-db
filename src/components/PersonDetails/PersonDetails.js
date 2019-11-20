import React, { Component } from 'react'

import './PersonDetails.css'
import SwapiService from '../../services/swapi-service'
import Spinner from '../Spinner'
import ErrorButton from '../ErrorButton'

export default class PersonDetails extends Component {
    swapiService = new SwapiService()

    state = {
        person: null,
        loading: true
    }

    componentDidMount() {
        this.updatePerson()
    }

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.setState({
                loading: true
            })
            this.updatePerson()
        }
    }

    updatePerson() {
        const { personId } = this.props

        if (!personId) {
            return
        }

        this.swapiService
            .getPerson(personId)
            .then((person) => {
                this.setState({
                    person,
                    loading: false
                })
            })
    }

    render() {

        if (!this.state.person) {
            return <span>Select a person from a list</span>
        }
        const {
            id, name, gender,
            birthYear, eyeColor
        } = this.state.person

        if (this.state.loading) {
            return (
                <div className="person-details card">
                    <Spinner />
                </div>
            )
        }
        return (
            <div className="person-details card">
                <div className="row">
                    <img
                        className="person-image col-md-3 p-2" alt={name}
                        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />
                    <div className="card-body col-md-9">
                        <h4>{name}</h4>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <span className="term">Gender</span>
                                <span>{gender}</span>
                            </li>
                            <li className="list-group-item">
                                <span className="term">Birth Year</span>
                                <span>{birthYear}</span>
                            </li>
                            <li className="list-group-item">
                                <span className="term">Eye Color</span>
                                <span>{eyeColor}</span>
                            </li>
                            <li className='list-group-item'>
                                <ErrorButton />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
