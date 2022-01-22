import React from 'react'
import './itemlist.css';


export const ItemList = ({product, description, price}) => {
    return (
        <div className='itemlist'>
            <img src="https://picsum.photos/id/200/200/300" alt="" />
            <h4>Producto: {product} </h4>
            <h4>Descripción: {description} </h4>
            <h4>Valor: {price} </h4>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident animi alias blanditiis illum explicabo consectetur?</span>
        </div>
        
    )    
}


export default ItemList