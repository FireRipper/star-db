import React from 'react'
import ErrorButton from '../ErrorButton'
import './ItemDetails.css'

const Record = ({ data, field, label }) => (
    <li className="list-group-item">
        <span className="term">{label}</span>
        <span>{ data[field] }</span>
    </li>
)

export {
    Record
}

const ItemDetails = (props) => {

    const { data, image, name } = props

    return (
        <div className="item-details card text-center text-md-left">
            <div className="row">
                <div className="col-md-4">
                    <img
                        className="item-image" alt={name}
                        src={image} />
                </div>
                <div className="card-body col-md-8">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        {
                            //Transmit props.item to component RecordItem
                            React.Children.map(props.children, (child) => {
                                return React.cloneElement(child, { data })
                            })
                        }
                        <li className='list-group-item'>
                            <ErrorButton />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ItemDetails
