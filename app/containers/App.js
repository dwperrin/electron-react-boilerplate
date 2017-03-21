import React, { Component, Children } from 'react'

export default class App extends Component {
  props: {
    children: Children
  };

  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
