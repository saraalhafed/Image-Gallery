import React from 'react'
import Card from './Card'
import data from "../../helpers/data"
import Styles from "./Main.module.css"
export default function Main() {
  return (
    <div className={Styles.cardContainer}>
      {
        data.map((item,index)=>
        (
          <Card {...item} kex={index}/>
        )
     ) 
     }
    </div>
  )
}
