import React, { Component } from 'react'

export default class MenuHeader extends Component {
  render() {
    return (
      <div>
        <header className = "header">
          <nav>
            <ul className = "listaHeader">
              <li><a className = "ancoraHeader"href ="">Drinks</a></li>
              <li><a href ="">Sobre Nós</a></li>
              <li><a href ="">Nosso Time</a></li>
              <li><a href ="">Contato</a></li>
            </ul>
          </nav>
        </header>
      </div>
    )
  }
}
