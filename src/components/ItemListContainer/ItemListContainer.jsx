import React, { useEffect, useState } from "react";
// import { pedirProductos } from "../../helpers/pedirProductos";
import { ItemList } from "../itemList/itemList";
import "./itenlistcontainer.css";
import { FaSpinner } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { Ban } from "../Ban/Ban"
import { db } from "../../firebase/config";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const [loading, setLoading] = useState(false);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true)

    const productos = categoryId
      ? db.collection("productos").where("category", "==", categoryId)
      : db.collection("productos")
    productos.get()
      .then((res) => {
        const newItem = res.docs.map((doc) => {
          return { id: doc.id, ...doc.data() }
        })
        setItems(newItem)
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setLoading(false)
      })
  }, [categoryId]);


  return (
    <>
      <Ban />
      {loading ? (
        <div className='container'>
          <div className='spinner'>
            <FaSpinner />
          </div>
        </div>
      ) : (
        <ItemList productos={items} />
      )}
    </>
  );
};
