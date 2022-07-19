import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFetch } from '../../helpers/getFetch'
import ItemDetail from './ItemDetail'
import './itemDetailContainer.css'


const ItemDetailContainer = () => {

    const [prods, setProds] = useState([])

    const { productId } = useParams()

    useEffect(() => {
        getFetch().then(res => setProds(res)).catch(error => console.log(error))
    }, [])

    return (
        <><div>
            <ItemDetail prods={prods} productId={productId} />
        </div>

        </>
    )
}

export default ItemDetailContainer