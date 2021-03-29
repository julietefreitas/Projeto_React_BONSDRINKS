import React from "react";
import style from  "./Conteudo.module.css";

export default function ConteudoDrinks({
  nomeDrink,
  categoriaDrink,
  copoDrink,
  ibaDrink,
  ingredienteDrink,
  instrucoesDrink,
}) {
  return (
    <ul className={style.lista_informacoes}>
      <li >
        <h3 className={style.titulo_infos}>Nome:<p className={style.texto_label}> {nomeDrink}</p></h3> 
      </li>
      <li className={style.ilConteudo}>
        <h3 className={style.titulo_infos}>Categoria: <p className={style.texto_label}> {categoriaDrink}</p></h3>
       
      </li>
      <li className={style.ilConteudo}>
        <h3 className={style.titulo_infos}>Copo:<p className={style.texto_label}> {copoDrink}</p></h3>
      </li>
      <li className={style.ilConteudo}>
        <h3 className={style.titulo_infos}>IBA:<p className={style.texto_label}> {ibaDrink}</p></h3>

      </li>
      <li className={style.ilConteudo}>
        <h3 className={style.titulo_infos}>Ingredientes:<p className={style.texto_label}> {ingredienteDrink}</p></h3>
        
      </li>
      <li className={style.ilConteudo}>
        <h3 className={style.titulo_infos}>Instruções:<p className={style.texto_label}> {instrucoesDrink}</p></h3>
      </li>
    </ul>
  );
}
