import React, { useEffect, useState } from 'react'

import axios from "axios";
import ProductCard from './ProductCard';
import { useLocation, useSearchParams } from 'react-router-dom';
import Pagination from './Pagination';
const ProductList = () => {
  const [products, setProducts] = useState([])
  const [searchParams] = useSearchParams();
  const location = useLocation();

  const [page, setpage] = useState(1)
  console.log("location", location)

  console.log("products", products)
  let obj = {
    params: {
      gender: searchParams.getAll("category"), // ["men" , "women" , "kids"]
      _sort: searchParams.get("order") && "price",
      _order: searchParams.get("order")
    },
  }
  const fetchData = async (params,page) => {
    try {
      axios.get(`http://localhost:9080/products?_page=${page}&_limit=3`, params)
        .then((res) => {
          setProducts(res.data)
          console.log(res.data)
        })
    } catch (error) {
      console.log("error")
    }
  }

  useEffect(() => {
    fetchData(obj,page);
  }, [location.search,page])

  return (
    <div>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px"
      }}>
        {
          products.length > 0 && products.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))
        }
      </div>
      <div>
        <Pagination setpage={setpage} pageNo={page}/>
      </div>
    </div>
  )
}

export default ProductList