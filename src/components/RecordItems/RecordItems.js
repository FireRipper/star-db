import React from 'react'

const RecordItems = ({ item, field, label }) => (
    <li className="list-group-item">
        <span className="term">{label}</span>
        <span>{ item[field] }</span>
    </li>
)

export default RecordItems
