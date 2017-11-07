import React from 'react';
import ProductTableRowComponent from './product-table-row-component';

const ProductTableComponent = (props) => {
  const {
    products,
    isProductListLoading
  } = props;
  const rows = [];

  products.forEach((product) => {
    rows.push(
      <ProductTableRowComponent
        product={product}
        key={product._id}
      />
    );
  });

  return (
    <table className="table table-sm table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th></th>
          <th>Qty</th>
        </tr>
      </thead>
      <tbody>{isProductListLoading ? <tr><td colSpan="4" className="text-center">Loading...</td></tr> : rows}</tbody>
    </table>
  );
}

export default ProductTableComponent;
