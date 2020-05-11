import React, { useState  } from 'react';
import * as messages from '../../constants/messages';

const showSubTotal = (price, quantity) => {
    return price * quantity;
};


function CartItem(props) {

    const onUpdateQuantity = (product, quantityproduct) => {
        if( quantityproduct > 0 ) {
            props.onChangeMessage(messages.MSG_UPDATE_CART_SUCCESS);
            props.onUpdateProduct(product, quantityproduct);
        }
    };

    const removeProduct = (product) => {
        props.onRemoveProduct(product);
        props.onChangeMessage(messages.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
    };

    let { item } = props;
    return (
        <tr>
            <th scope="row">
                <img src={item.product.img}
                    alt={item.product.name} className="img-fluid z-depth-0" />
            </th>
            <td>
                <h5>
                    <strong>{item.product.name}</strong>
                </h5>
            </td>
            <td>{item.product.price}$</td>
            <td className="center-on-small-only">
                <span className="qty"> {item.quantity} </span>
                <div className="btn-group radio-group" data-toggle="buttons">
                    <label className="btn btn-sm btn-primary
                                                btn-rounded waves-effect waves-light">
                        <a onClick={ () => onUpdateQuantity(item.product, item.quantity - 1) } href="#-">—</a>
                    </label>
                    <label className="btn btn-sm btn-primary
                                                btn-rounded waves-effect waves-light">
                        <a onClick={ () => onUpdateQuantity(item.product, item.quantity + 1) }href="#+">+</a>
                    </label>
                </div>
            </td>
            <td>{showSubTotal(item.quantity, item.product.price)}$</td>
            <td>
                <button onClick={ () => { removeProduct(item.product) } } type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                    title="" data-original-title="Remove item">
                    X
                </button>
            </td>
        </tr>
    );
}

export default CartItem;
