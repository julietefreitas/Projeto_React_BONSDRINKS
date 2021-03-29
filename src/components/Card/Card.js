import React from "react";
import style from "./Card.module.css"

export default function Card({ url, noClick, titulo }) {
  return (
    <div className={style.div_mae_card}>
      <div className={style.card}>
        <img onClick={()=>{
        }} className={style.imagem_card} src={url} />
        <h3>{titulo}</h3>
      </div>
    </div>
  );
}
