import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from '../components/main/Cart';
import CartItem from '../components/main/CartItem';
import CartResult from '../components/main/CartResult';
import * as messages from '../constants/messages';
import { actRemoveProduct, actChangeMessage, actUpdateProduct } from '../actions/index';

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        }).isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired,
    onUpdateProduct: PropTypes.func.isRequired,
    onChangeMessage: PropTypes.func.isRequired,
    onRemoveProduct: PropTypes.func.isRequired
};

const showTotalPrice = (cart) => {
    let result = 0;
    if( cart.length > 0 ) {
        for( let i =0; i < cart.length; i++ ) {
            result += cart[i].product.price * cart[i].quantity;
        }
    }
    return <CartResult total={result} />;
};

function CartContainer(props) {
    const showCartItem = (cart) => {
        let result = <tr>{messages.MSG_WELCOME}</tr>;
        if( cart.length > 0 ) {
            result = cart.map((item, index) => {
                return (
                    <CartItem 
                        key={index} 
                        item={item} 
                        onRemoveProduct={props.onRemoveProduct} 
                        onChangeMessage={props.onChangeMessage}
                        onUpdateProduct={props.onUpdateProduct}>
                    </CartItem>
                );
            });
        }
        return result;
    };
    
    let { cart } = props;
    return (
        <Cart>
            { showCartItem(cart) }
            { showTotalPrice(cart) }
        </Cart>
    );
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onRemoveProduct: (product) => {
            dispatch(actRemoveProduct(product));
        },
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message));
        },
        onUpdateProduct: (product, quantity) => {
            dispatch(actUpdateProduct(product, quantity));
        }
    };
};

export default  connect(mapStateToProps, mapDispatchToProps)(CartContainer);
