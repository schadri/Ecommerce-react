import React, { useEffect, useState } from 'react';
import { pedirProductos } from '../../helpers/pedirProductos';
import { ItemList } from '../itemList/itemList';
import './itenlistcontainer.css';
import {FaSpinner} from "react-icons/fa"
import { useParams } from 'react-router-dom';

export const ItemListContainer = ({greating}) => {

  const [items, setItems] = useState([])

  const [loading, setLoading] = useState(false)

  //const param = useParams()


  const {categoryId} = useParams()

  useEffect(() =>{
// iniciamos el efecto montaje, con un loading en "true"
    setLoading(true)
    pedirProductos()
      .then((res) =>{
        // Imprimos la respuesta y la guardamos en el hook
        if(categoryId){
          setItems(res.filter(prod => prod.category === categoryId) )
        } else {
          setItems(res)
        }
        
        // console.log(res)
      })
      // Consologueamos errores
      .catch((error) => console.log(error))
      .finally(() =>{setLoading(false)})
  }, [categoryId])




  return (
    <>
      {
        loading
        ? 
        <div className="container">
        <div className="spinner">
          <FaSpinner />
        </div>
      </div>
      
        :<ItemList productos={items}/>
      }
    </>
  )}
