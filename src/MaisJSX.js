import React, { Component } from 'react'
// Escolha um cliente do objeto abaixo e retorne um componenete com seu nome, sua idade e a soma total das compras
export default class MaisJSX extends Component {
  render() {
    const luana = {
      cliente: 'Luana',
      idade: 27,
      compras: [
        { nome: 'Notebook', preco: '2500' },
        { nome: 'Geladeira', preco: '3000' },
        { nome: 'Smartphone', preco: '1500' },
      ],
      ativa: true,
    };
    
    const mario = {
      cliente: 'Mario',
      idade: 31,
      compras: [
        { nome: 'Notebook', preco: '2500' },
        { nome: 'Geladeira', preco: '3000' },
        { nome: 'Smartphone', preco: '1500' },
        { nome: 'Guitarra', preco: '3500' },
      ],
      ativa: false,
    };

    const somaProd = luana.compras.reduce((acc, ele)=>{
      return acc + parseInt(ele.preco);
    },0)

    const cliente = luana.cliente;
    const idade = luana.idade;

    const estilo =  somaProd > 10000 ? {color:"green"} : {color:"red"}; 

    return (
      <div>
        <p>Cliente: {cliente}</p>
        <p>{idade} anos</p>
        <p style = {estilo}>Total pago: {somaProd}</p>
      </div>
    )
  }
}
