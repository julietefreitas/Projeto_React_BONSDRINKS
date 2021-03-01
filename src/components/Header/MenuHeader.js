import React, { Component } from 'react'

export default class MenuHeader extends Component {
  render() {
    return (
        <header className = "header">
          <nav>
            <ul className = "listaHeader">
              <li><a className = "ancoraHeader" href ="">Drinks</a></li>
              <li><a className = "ancoraHeader" href ="">Sobre Nós</a></li>
              <li><a className = "ancoraHeader" href ="">Nosso Time</a></li>
              <li><a className = "ancoraHeader" href ="">Contato</a></li>
            </ul>
          </nav>
        </header>
    )
  }
}
