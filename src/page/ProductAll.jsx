import React, { useEffect } from 'react'

const ProductAll = () => {
    //get api
    const getProducts= async()=>{
        let url = `https://my-json-server.typicode.com/roseraph502on/shoppingMall`
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
    }
    useEffect(()=>{
        getProducts();
    },[])
  return (
    <div>
      <h2>ProductAll Page</h2>
    </div>
  )
}

export default ProductAll
