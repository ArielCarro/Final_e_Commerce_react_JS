import React from 'react'
import { useEffect, useState } from "react"
import ItemsList from './ItemsList'
import { getFetch } from '../../helpers/getFetch'
import './itemListContainer.css';
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

  const [prods, setProds] = useState([])
  const { genderId} = useParams()



  useEffect(() => {

    if (genderId !== undefined) {
      getFetch().then(res => setProds(res.filter(prod => prod.gender === genderId))).catch(error => console.log(error))
    } else {
      getFetch().then(res => setProds(res)).catch(error => console.log(error))
    }

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