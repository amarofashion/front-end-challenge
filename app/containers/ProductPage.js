import React, { Component } from 'react'

export default class ProductPage extends Component {
    render() {
        const { store, history } = this.props

        return <div>
            Hey! Thanks for using this example. If you like it, consider starring the repo :))
            <div>
                <a href="/">home</a>
            </div>
        </div>
    }
}