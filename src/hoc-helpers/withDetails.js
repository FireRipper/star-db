import React, { Component } from 'react'
import Spinner from '../components/Spinner'

const withDetails = (ViewDetails) => {
    return class extends Component {
        state = {
            data: null,
            name: null,
            image: null,
            loading: true
        }

        componentDidMount() {
            this.updateItem()
        }

        componentDidUpdate(prevProps) {
            const { itemId, getData, getImageUrl } = this.props

            if (itemId !== prevProps.itemId ||
                getData !== prevProps.getData ||
                getImageUrl !== prevProps.getImageUrl) {
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
                .then((data) => {
                    this.setState({
                        data,
                        name: data.name,
                        image: getImageUrl(data),
                        loading: false
                    })
                })
        }

        render() {
            const { data, loading, image, name } = this.state

            if (!data) {
                return <span>Select a item from a list</span>
            }

            if (loading) {
                return (
                    <div className="item-details card">
                        <Spinner />
                    </div>
                )
            }

            return (
                <ViewDetails {...this.props} data={data} image={image} name={name} />
            )
        }
    }
}

export default withDetails
