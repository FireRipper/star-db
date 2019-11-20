import React, { Component } from 'react'

export default class ErrorButton extends Component {

    state = {
        renderError: false
    }

    render() {

        if (this.state.renderError) {
            this.foo.bar = 0
        }

        return (
            <div className="row mb-2">
                <div className="col-12">
                    <button
                        className='error-button btn btn-danger btn-lg'
                        onClick={() => this.setState({renderError: true})}>
                        Throw error
                    </button>
                </div>
            </div>
        )
    }
}
