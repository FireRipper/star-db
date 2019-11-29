import React from 'react'

const RecordItems = ({ data, field, label }) => (
    <li className="list-group-item">
        <span className="term">{label}</span>
        <span>{ data[field] }</span>
    </li>
)

export default RecordItems
