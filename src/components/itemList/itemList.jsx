import React from 'react'
import {Item} from '../Item/Item'
import "./itemList.css"
export const ItemList = ({productos=[Item]}) => {
  return (
    <div className='container'>
        <h3>Nuestros productos</h3>
        <div className='fila'>
        {productos.map((item) => <Item {...item} key={item.id}/>)}
        </div>
       
    </div>
  )
}
