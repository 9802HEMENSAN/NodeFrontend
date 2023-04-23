// import styled from "styled-components";

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const Sidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.getAll("category");
  console.log("searchParams", initialCategory)
  const [category, setCategory] = useState(initialCategory || [])  
  const inititalOrder=searchParams.get("order");
  const [order, setOrder] = useState(inititalOrder || "")
  
  const handleChange = (e) => {
    let newCategory = [...category];

    const value = e.target.value;

    if (newCategory.includes(value)) {
       newCategory = newCategory.filter((el) => el !== value)
    } else {
       newCategory.push(value);
    }

    setCategory(newCategory);
  }

const handleSort = (e)=>{
  console.log(e.target.value);
  setOrder(e.target.value)
}
  useEffect(() => {
    let params = {
      category,
    }
     order && (params.order = order);
    setSearchParams(params);

  }, [category,order])

  return (
    <div>
      <h3>Filter By</h3>
      <div>
        <input type="checkbox" value={"men"} onChange={handleChange}
          checked={category.includes("men")} />
        <label>Men</label>
      </div>
      <div>
        <input type="checkbox" value={"women"} onChange={handleChange}
          checked={category.includes("women")} />
        <label>Women</label>
      </div>
      <div>
        <input type="checkbox" value={"kids"} onChange={handleChange}
          checked={category.includes("kids")} />
        <label>Kids</label>
      </div>
      <br/>
      <br/>
      <div onChange={handleSort}>
        <input type="radio" name="order" value="asc" defaultChecked={order==="asc"}/>
        <label>Ascending</label>
        <input type="radio" name="order" value="desc" defaultChecked={order==="desc"}/>
        <label>descending</label>
      </div>
    </div>
  );
};

// const DIV = styled.div`
//   width: 15%;
//   border-right: 1px solid gray;
// `;
