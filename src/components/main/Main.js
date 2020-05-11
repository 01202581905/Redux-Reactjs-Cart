import React from 'react';
import ProductContainer from '../../containers/ProductContainer';
import CartContainer from '../../containers/CartContainer';
import MessageContainer from '../../containers/MessageContainer';

function Main() {
    return (
        <main id="mainContainer">
            <div className="container">
                <section className="section">
                    <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                </section>
                <ProductContainer />
                <MessageContainer />
                <CartContainer />
                </div>
        </main>
    );
}

export default Main;
