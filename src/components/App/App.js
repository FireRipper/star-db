import React from 'react'

import Header from '../Header'
import ItemList from '../ItemList'
import PersonDetails from '../PersonDetails'
import RandomPlanet from '../RandomPlanet'

import './App.css'


const App = () => {
    return (
        <div className='container'>
            <Header />
            <RandomPlanet />
            <div className="row mb-2">
                <div className="col-md-6">
                    <ItemList />
                </div>
                <div className="col-md-6">
                    <PersonDetails />
                </div>
            </div>
        </div>
    );
}

export default App