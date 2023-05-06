import React from "react";
import { Item } from "../Item/Item";
import "./itemList.css";
import { Barra } from "../Button/button";
export const ItemList = ({ productos = [Item] }) => {
  return (
    <div className='container'>
      <h3 id="NP">Nuestros productos</h3>
      <div>
        <Barra />
      </div>
      <div className='fila'>
        {productos.length > 0 ? (
          productos.map((item) => <Item {...item} key={item.id} />)
        ) : (
          <p>No hay productos</p>
        )}
      </div>
    </div>
  );
};
