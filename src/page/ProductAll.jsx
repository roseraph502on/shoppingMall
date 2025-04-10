import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { useSearchParams } from 'react-router';

const ProductAll = () => {

  const [productList, setproductList] = useState([]);
  const[query, setqeury] = useSearchParams();
  //get api
  const getProducts = async () => {
    let searchQuery = query.get("q")||("");
    console.log("쿼리값",searchQuery)
    let url = `https://my-json-server.typicode.com/roseraph502on/shoppingMall/products?q=${searchQuery}`
    let response = await fetch(url);
    let data = await response.json();
    setproductList(data);
  }
  useEffect(() => {
    getProducts();
  }, [query])
  return (
    <div className='pCards'>
      <div class="grid grid-cols-1 gap-3 md:grid-cols-3 gap-4" >
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
