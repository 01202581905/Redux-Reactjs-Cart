import React from 'react';
import * as messages from '../../constants/messages';

function Product(props) {
    let { product } = props;

    const showRating = (rating) => {
        let result = [];
        for(let i = 1;i <= rating;i++) {
            result.push(<li key={'i'+i}><i className="fa fa-star"></i></li>);
        }
        for(let j = 1;j <= (5 - rating);j++) {
            result.push(<li key={'j'+j}><i className="fa fa-star-o"></i></li>);
        }
        return result;
    };

    const onAddToCart = (product) => {
        props.onAddToCart(product);
        props.onChangeMessage(messages.MSG_ADD_TO_CART_SUCCESS);
    };

    return (
            <div className="col-lg-4 col-md-6 mb-r">
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                        <img src={ product.img }
                            className="img-fluid" alt={ product.name } />
                        <a href="#123">
                            <div className="mask waves-light waves-effect waves-light"></div>
                        </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
                                <a href="#123">{ product.name }</a>
                            </strong>
                        </h4>
                        <ul className="rating">
                            { showRating(product.rating) }
                        </ul>
                        <p className="card-text">
                        { product.description }
                                    </p>
                        <div className="card-footer">
                            <span className="left">{ product.price }$</span>
                            <span className="right">
                                <a onClick={ () => onAddToCart(product) } className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Cart">
                                    <i className="fa fa-shopping-cart"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Product;
