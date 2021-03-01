import React, { Component } from 'react'

export default class Imagemcontato extends Component {
  render() {
    return (
      <img className="imgContato"src={this.props.foto}/>
    )
  }
}
