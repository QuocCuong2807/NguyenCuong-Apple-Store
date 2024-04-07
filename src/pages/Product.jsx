import React, { useEffect, useState } from "react";
import ProductList from "../components/Product/ProductList";
import Banner from "../components/Shared/Banner";
import { categories,allProduct } from "../data/data";

function Product() {
  
  //states
  const [category, setCategory] = useState('All')
  const [products, setProducts] = useState(allProduct)

  //handle set state
  const handleChangeCategory = (categoryName) => {
    setCategory(categoryName)
    handleChangeProductsByCategory(categoryName)
  }

  const handleChangeProductsByCategory = (categoryName) => {
    switch (categoryName) {
        case 'All':
            setProducts(allProduct)
            break;
        case 'Iphone':
            const iPhones = allProduct.filter((item) => item.name.includes('iPhone'))
            setProducts(iPhones)
            break;
        case 'Ipad':
            const iPads = allProduct.filter((item) => item.name.includes('iPad'))
            setProducts(iPads)
            break;
        case 'MacBook':
            const macs = allProduct.filter((item) => item.name.includes('MacBook'))
            setProducts(macs)
            break;
        default:
            break;
    }

  }
  return (
    <div className="container">
      <h1 className="text-center" style={{margin: 24}}>{category}</h1>
      <Banner />
      <div className="d-flex" style={{ marginTop: 26, cursor: "pointer" }}>
        <p className="category-list" onClick={() => handleChangeCategory('All')}>
          <a>All</a>
        </p>

        {categories.map((item) => (
          <p
            key={item.id}
            className="category-list"
            style={{ marginLeft: 46, cursor: "pointer" }}
            onClick={() => handleChangeCategory(item.name)}
          >
            <a>{item.name}</a>
          </p>
        ))}
      </div>

      <ProductList props = {products}/>
    </div>
  );
}

export default Product;
