import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Dropdown } from 'primereact/dropdown';



const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const getProductDetail = async () => {
    let url = `http://localhost:5000/products/${id}`
    let response = await fetch(url);
    let data = await response.json();
    console.log("paramd", data)
    setProduct(data)
  }
  const sizeOptions = product?.size?.map(size => ({
    label: size,
    value: size,
  }));
  useEffect(() => {
    getProductDetail();
  }, [])

  return (
    <div className='PdDetail'>
      <div class="grid grid-flow-col grid-cols-2 gap-4 ">
        <img class="row-span-3" src={product?.img} />
        <div className='infors'>
          <div className='infor'>{product?.title}</div>
          <div className='infor'>₩{product?.price}</div>
          <Dropdown className='infor'
            options={sizeOptions} // 변환된 옵션 사용
            value={selectedSize} // 선택된 값
            onChange={(e) => setSelectedSize(e.value)} // 선택 시 상태 업데이트
            placeholder="Size" 
            style={{ minWidth: '100%' }} 
          />
          <button>추가</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
