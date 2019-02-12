import React, { Component } from 'react'

export default class NotFound extends Component {
    componentWillMount() {
        const { staticContext } = this.props
        staticContext && (staticContext.NOT_FOUND=true)
    }

    render() {
        return <div>404错误,网页不存在</div>
    }
}
