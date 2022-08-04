import React from 'react'
import { useEffect, useState } from "react"
import ItemsList from './ItemsList'
import { getFetch } from '../../helpers/getFetch'
import './itemListContainer.css';
import { useParams } from 'react-router-dom'
import {collection,getFirestore,getDocs, where, query} from 'firebase/firestore'

const ItemListContainer = () => {

  const [prods, setProds] = useState([])
  const { genderId} = useParams()
  
  useEffect(() => {
    const db=getFirestore()
    const queryCollection=collection(db,'productos')
    const filteredQueryCollection=query(queryCollection, where("gender","==",genderId?genderId:""))
    getDocs(genderId?filteredQueryCollection:queryCollection)
    .then(resp=>setProds(resp.docs.map(prod=>({id:prod.id,...prod.data()}))))
  }, [genderId])

  return (
    <>
      <div className="body">
        <ItemsList prods={prods} />
      </div>
    </>
  )
}

export default ItemListContainer