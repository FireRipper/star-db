import React from 'react'
import PropTypes from 'prop-types'

import './ItemList.css'

const ItemList = (props) => {

    const { data, onItemSelected, children: renderLabel } = props

    const items = data.map((item) => {

        const { id, name } = item

        const label = renderLabel(item)

        return (
            <li className="list-group-item"
                key={id + name}
                onClick={() => onItemSelected(id)}>
                {label}
            </li>
        )
    })

    return (
        <ul className="item-list list-group my-3">
            {items}
        </ul>
    )
}

 ItemList.defaultProps = {
    onItemSelected: () => {}
}

ItemList.propTypes = {
    onItemSelected: PropTypes.func,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    children: PropTypes.func.isRequired
}

export default ItemList
