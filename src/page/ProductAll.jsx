import React, { useEffect } from 'react'

const ProductAll = () => {
    //get api
    const getProducts= async()=>{
        //local
        // let url = `http://localhost:5000/products`
        //배포
        let url = `https://my-json-server.typicode.com/roseraph502on/shoppingMall/products`
        let response = await fetch(url);
        letdata = await response.json();
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
