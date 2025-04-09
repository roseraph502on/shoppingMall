import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';

const ProductAll = () => {

  const [productList, setproductList] = useState([]);
  //get api
  const getProducts = async () => {
    //local
    // let url = `http://localhost:5000/products`
    //배포
    let url = `https://my-json-server.typicode.com/roseraph502on/shoppingMall/products`
    let response = await fetch(url);
    let data = await response.json();
    setproductList(data);
  }
  useEffect(() => {
    getProducts();
  }, [])
  return (
    <div className='pCards'>
      <div class="grid grid-cols-3 gap-3 md:grid-cols-4 gap-4" >
        {
          (productList.map((menu) => (
            <ProductCard item={menu} />

          )))
        }
      </div>
    </div>
  )
}

export default ProductAll
