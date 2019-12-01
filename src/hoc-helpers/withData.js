import React, { Component } from 'react'
import Spinner from '../components/Spinner'

const withData = (View) => {
    return class extends Component {
        state = {
            data: null,
            loading: true
        }

        componentDidMount() {
            this.updateList()
        }

        componentDidUpdate(prevProps) {
            if (this.props.getData !== prevProps.getData) {
                this.setState({ loading: true })
                this.updateList()
            }
        }

        updateList() {
            this.props.getData()
                .then((data) => {
                    this.setState({
                        data,
                        loading: false
                    })
                })
        }

        render() {
            const { data, loading } = this.state

            if (!data || loading) {
                return <Spinner />
            }

            return <View {...this.props} data={data} />
        }
    }
}

export default withData
