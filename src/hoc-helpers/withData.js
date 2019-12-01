import React, { Component } from 'react'
import Spinner from '../components/Spinner'
import ErrorIndicator from '../components/ErrorIndicator'

const withData = (View) => {
    return class extends Component {
        state = {
            data: null,
            loading: true,
            error: false
        }

        componentDidMount() {
            this.updateList()
        }

        componentDidUpdate(prevProps) {
            if (this.props.getData !== prevProps.getData) {
                this.updateList()
            }
        }

        updateList() {
            this.setState({ loading: true })
            this.props.getData()
                .then((data) => {
                    this.setState({
                        data,
                        loading: false
                    })
                })
                .catch(() => {
                    this.setState({
                        error: true,
                        loading: false
                    })
                })
        }

        render() {
            const { data, loading, error } = this.state

            if(error) {
                return <ErrorIndicator />
            }

            if (!data || loading) {
                return <Spinner />
            }

            return <View {...this.props} data={data} />
        }
    }
}

export default withData
