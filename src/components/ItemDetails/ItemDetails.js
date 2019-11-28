import React, { Component } from 'react'
import Spinner from '../Spinner'
import ErrorButton from '../ErrorButton'
import './ItemDetails.css'

export default class ItemDetails extends Component {

    state = {
        item: null,
        image: null,
        loading: true
    }

    componentDidMount() {
        this.updateItem()
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.setState({
                loading: true
            })
            this.updateItem()
        }
    }

    updateItem() {
        const { itemId, getData, getImageUrl } = this.props

        if (!itemId) {
            return
        }

        getData(itemId)
            .then((item) => {
                this.setState({
                    item,
                    image: getImageUrl(item),
                    loading: false
                })
            })
    }

    render() {

        const { item, loading, image } = this.state

        if (!item) {
            return <span>Select a item from a list</span>
        }

        const { name } = item

        if (loading) {
            return (
                <div className="item-details card">
                    <Spinner />
                </div>
            )
        }
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
                                React.Children.map(this.props.children, (child) => {
                                    return React.cloneElement(child, { item })
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
}
