import React, { useEffect, useState } from 'react'
import {collection, getDocs , getFirestore } from "firebase/firestore" 
import { useParams } from 'react-router-dom';
import ItemList from '../itemList/ItemList';

export default function ItemListContainer() {

    const[products ,setProducts] = useState([])
    const {idCategoria} = useParams()

    useEffect(() =>{
     
     

      const db = getFirestore()
      
      const refcollectionProductos = collection(db , "productos" ) //referencia al documento
      
      getDocs(refcollectionProductos).then((res) => {
      
      let limpios = res.docs
      
      limpios = limpios.map((producto)=>{
          
      return ({id: producto.id, ...producto.data() })
         
      })
      
      let completos = limpios.filter((producto)=>{
          return producto})
          
      
      limpios = limpios.filter((producto)=>{
          return producto.idCategoria === idCategoria
      } )

      
      if (idCategoria){
          setProducts(limpios)
         

      }else{
          setProducts(completos)
         
          
      }
      
      
      })
      


  },[idCategoria])

  return (

    <div> <ItemList products={products} /></div>
  )
}
