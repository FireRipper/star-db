import React from 'react'
import { PersonDetails, PersonList } from '../SwComponents'
import { Record } from '../ItemDetails/ItemDetails'
import RowItem from '../containers/RowItem'
import { withRouter } from 'react-router-dom'

const PeoplePage = ({ history, match}) => {
    const  { id } = match.params
    return (
        <RowItem
            left={<PersonList onItemSelected={(id) => history.push(id)} />}
            right={
                <PersonDetails itemId={id}>
                    <Record field='gender' label='Gender' />
                    <Record field='eyeColor' label='Eye Color' />
                    <Record field='birthYear' label='Birth year' />
                </PersonDetails>
            } />
    )
}

export default withRouter(PeoplePage)
