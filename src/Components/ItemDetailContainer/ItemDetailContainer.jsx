import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import ".//ItemDetailContainer.css"
import { useParams } from 'react-router-dom'
import {collection, getDocs , getFirestore } from "firebase/firestore"


const ItemDetailContainer = () => {

  const [items, setItems] = useState([])
  const { idItem } = useParams()


 
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
        return producto.idItem === idItem
    } )

    
    if (idItem){
        setItems(limpios)
     

    }else{
        setItems(completos)
     
        
    }
    
    
    })
    


},[idItem])



return (
  <div className='idc'>
  <ItemDetail  producto={items}  />
  </div>

  

)
}

export default ItemDetailContainer

