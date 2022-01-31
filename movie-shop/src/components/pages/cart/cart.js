import React from 'react'

import trash from './../../../assets/icons/trash-alt-solid.svg'
import './_cart.scss'


const Cart = () => {
    return (
        <div className="container_global_cart">
            <h1>PANIER</h1>

            <table className="table_cart">
                <thead className="table_head">
                    <th className="table_d" >Designation</th>
                    <th className="table_d">Quantité</th>
                    <th className="table_d">Prix</th>
                    <th className="table_d">Action</th>
                </thead>
                <tbody>
                    <tr className="table_row">
                        <td className="table_d">HI</td>
                        <td className="table_d">HelloHello</td>
                        <td className="table_d">12€</td>
                        <td className="table_d">
                            <button type=""><img className="trash_icon" src={trash} alt="icon_trash" /></button>
                        </td>
                    </tr>
                    <td className="table_total">Total</td>
                </tbody>


            </table>
        </div>
    )
}

export default Cart;