import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFetch } from '../../helpers/getFetch'
import ItemDetail from './ItemDetail'
import './itemDetailContainer.css'
import {collection,getFirestore,getDocs} from 'firebase/firestore'

const ItemDetailContainer = () => {

    const [prods, setProds] = useState([])

    const { productId } = useParams()

    useEffect(() => {
        const db=getFirestore()
        const querryCollection=collection(db,'productos')
        getDocs(querryCollection)
        .then(resp=>setProds(resp.docs.map(prod=>({id:prod.id,...prod.data()}))))
        console.log(prods);
      }, [])

    return (
        <><div>
            <ItemDetail prods={prods} productId={productId} />
        </div>

        </>
    )
}

export default ItemDetailContainer