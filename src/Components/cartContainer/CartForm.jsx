import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useCartContext } from '../../context/CartContext'
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';
const Swal = require('sweetalert2')

const CartForm = () => {
    const navigate = useNavigate();
    const emptyForm = {
        name: '',
        phone: '',
        email: '',
        emailCheck:""
    }
    const [formData, setFormData] = useState(emptyForm);
    const [abled, setAbled] = useState(false);

    const { cartList, clearCart, cartTotal } = useCartContext()
    let total = cartTotal()

    const ableSubmit = () => {
        if (formData.name.length > 0 && formData.phone.length > 0 && !isNaN(formData.phone) && formData.email.length > 0 && formData.email===formData.emailCheck) {
            setAbled(true)
        } else {
            setAbled(false)
        }
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        });
    };


    const generateOrder = async () => {
        const order = {}
        order.buyer = formData
        order.items = cartList.map(product => {
            return {
                id: product.id,
                name: product.name,
                quant: product.count,
                price: product.priceIva
            }
        })
        const timeElapsed = Date.now();
        const now = new Date(timeElapsed);
        now.toUTCString()
        order.date = now
        order.total = total

        const db = getFirestore()
        const queryOrders = collection(db, 'orders')
        addDoc(queryOrders, order)
            .then(resp =>
                Swal.fire({
                    title: 'Compra Exitosa',
                    text: `Su código de compra es: ${resp.id}`,
                    icon: 'success',
                    confirmButtonText: 'Entendido'
                }))
            .catch(err => console.log(err))
            .finally(clearCart)

        const queryCollectionStock = collection(db, 'productos')
        const queryUpdateStock = query(queryCollectionStock, where(documentId(), "in", cartList.map(prod => prod.id)))

        const batch = writeBatch(db)


        await getDocs(queryUpdateStock)
            .then(res => res.docs.forEach(res => batch.update(res.ref, {
                stock: res.data().stock - cartList.find(prod => prod.id === res.id).count
            }))).catch(err => console.log(err))
            .finally(() => clearCart)


        batch.commit()
        navigate("/");
    }



    return (
        <div className='formContainer'>
            <Form className='form'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre y Apellido</Form.Label>
                    <Form.Control type='name' placeholder="Ingrese su nombre y apellido" name='name' pattern='[A-Za-z]' onChange={handleChange} onKeyUp={ableSubmit} />
                    <div className='formError'>{formData.name.length > 0 ? "" : "Debe completar este campo"}</div>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Número de Telefono</Form.Label>
                    <Form.Control type='phone' placeholder="Ingrese su número de telefono" name='phone' onChange={handleChange} onKeyUp={ableSubmit} />
                    <div className='formError'>{formData.phone.length > 0 ? "" : "Debe completar este campo"}</div>
                    <div className='formError'>{isNaN(formData.phone) ? "Ingrese un número" : ""}</div>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>email</Form.Label>
                    <Form.Control type='email' placeholder="Ingrese su dirección de correo" name='email' onChange={handleChange} onKeyUp={ableSubmit} />
                    <div className='formError'>{formData.email.length > 0 ? "" : "Debe completar este campo"}</div>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Repita email</Form.Label>
                    <Form.Control type='email' placeholder="Vuelva a escribir direccion de correo" name='emailCheck' onChange={handleChange} onKeyUp={ableSubmit} />
                    <div className='formError'>{formData.email.length > 0 ? "" : "Debe completar este campo"}</div>
                    <div className='formError'>{formData.email===formData.emailCheck ? "" : "Los correos ingresados no coinciden"}</div>
                </Form.Group>
            </Form>
            <div className='btnContainer'>
                <Button variant="success" type="submit" onClick={() => { generateOrder() }} disabled={!abled} className='sbmtBtn'>
                    Submit
                </Button>
                <Link to={`/cart`}>
                    <Button variant='primary'> Volver </Button>
                </Link>
            </div>


        </div>
    );
}

export default CartForm