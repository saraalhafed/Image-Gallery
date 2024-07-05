import React from 'react'
import Styles from "./Main.module.css"
export default function Card(item) {
  return (
    <div className={Styles.Card}>
       <div className={Styles.wrapper}>
        <img src={item.src.large} alt={item. photographer}/>
       </div>
       <div className={Styles.title} >
         <h1>{ item.photographer}</h1>
       </div>
    
    </div>
  )
}
