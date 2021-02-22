import React, { Component } from 'react'

export default class Formulario extends Component {
  render() {
    return (
      <div>
        <h1>Contato</h1>
        <form className="AppForm">
          <label className = "LabelForm">Nome</label><br></br>
          <input className = "InputForm"/><br></br>
          <label>Email</label><br></br>
          <input className = "InputForm"/><br></br>
          <label>Mensagaaem</label>
          <input className = "MsgForm"></input>
          <input type="submit" value="Enviar"/>
        </form> 
      </div>
    )
  }
}
