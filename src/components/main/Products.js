import React from 'react';

function Products(props) {
    return (
        <div className="row">
            { props.children }
        </div>
    );
}

export default Products;
