import React from 'react';
import { connect } from 'react-redux';
import Products from '../components/main/Products';
import Product from '../components/main/Product';
import PropTypes from 'prop-types';
import { actAddToCart, actChangeMessage } from '../actions/index';

ProductContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        })
    ).isRequired,
    onChangeMessage: PropTypes.func.isRequired,
    onAddToCart: PropTypes.func.isRequired
};

function ProductContainer(props) {
    let { products } = props;

    const showProducts = (products) => {
        let result = null;
        let { onAddToCart } = props;
        if( products.length > 0 ) {
            result = products.map( (product, index) => {
                return <Product key={index} product={product} onAddToCart={ onAddToCart } onChangeMessage={ props.onChangeMessage }/>
            });
        }
        return result;
    };

    return (
        <Products>
            {showProducts(products)}
        </Products>
    );
}

const mapStateToProps = state => {
    return {
        products: state.products
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actAddToCart(product, 1));
        },
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message));
        }
    };
};

export default  connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
